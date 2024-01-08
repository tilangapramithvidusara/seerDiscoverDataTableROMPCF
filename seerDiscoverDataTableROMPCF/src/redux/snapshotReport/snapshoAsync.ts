import axios from 'axios';
import { setRecordId, setSnapshotLoading } from './snapshotReportSlice';
import { executeAfterGivenDilay } from '../../Utils/commonFunc.utils';
import { seerBasejson, seerUpdatedsnapshotdata } from '../../Constants/endPoints';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';

declare global {
  interface Window {
    webapi: any;
    createDevopsWorkItemURL: any;
    userId: any;
  }
}

export const saveInitialSnapshotRecordAsync : any = (info: any) => {
  const url = new URL(window.location.href);
  const queryParameters = url.searchParams;
  // console.log('accountId -=> ', queryParameters.get("accountId"));
  const accountId = queryParameters.get(snapshotAPIConstants.ACCOUNT_ID);
  const contactId = queryParameters.get(snapshotAPIConstants.USER_ID);

  console.log("ACC ID", accountId);
  console.log("COntact ID", contactId);
  console.log("saveInitialSnapshotRecordAsync Info", info);

  return async (dispatch: any) => {
    try {
      console.log("saving....");
      dispatch(setSnapshotLoading(true));
      const record: any = {};
      record[snapshotAPIConstants.SEER_ACCOUNT_RECORD_ID] = `/accounts(${accountId})`; // Lookup
      record[snapshotAPIConstants.SEER_CONTACT_RECORD_ID] = `/contacts(${contactId})`; // Lookup
      record.seer_name = info?.seerName; // Text
      record.seer_description = info?.seerDescription; // Text
      console.log("saving 1 ....");

      window.parent.webapi.safeAjax({
          type: "POST",
          contentType: "application/json",
          url: snapshotAPIConstants.INITIAL_SNAPSHOT_URL,
          data: JSON.stringify(record),
          success: function (data: any, textStatus: any, xhr: any) {
              var newId = xhr.getResponseHeader("entityid");
              console.log("newId", newId);
              dispatch(setRecordId(newId))
              dispatch(saveSnapshotAsync({requestNumber: 1, recodeId: newId, ...info}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            console.log("xhr", xhr);
          }
      });
    } catch (error) {
      console.log('save snapshot initial error: ', error);
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const saveSnapshotAsync = (info: any) => {
  console.log("Save snapshot Async", info)
  return async (dispatch: (arg0: any) => void) => {
    try {
      const {requestNumber, recodeId, baseData, snapshotData} = info;
      const endPoint = requestNumber == 1 ? seerBasejson : seerUpdatedsnapshotdata;
      dispatch(setSnapshotLoading(true));
      var fileName = requestNumber == 1 ? encodeURIComponent(`baseJsonData${new Date()}`) : encodeURIComponent(`snapshotJsonData${new Date()}`); // The following characters are not allowed inside a file name: \ / : * ? " < > |
      const url = `${snapshotAPIConstants.INITIAL_SNAPSHOT_URL}(${recodeId})/${endPoint}?x-ms-file-name=`

      // NOTE: the following code converts a Base 64 encoded string to binary data
      var base64Content = requestNumber == 1 ? baseData : snapshotData;
      var byteCharacters = atob(base64Content);
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) { byteNumbers[i] = byteCharacters.charCodeAt(i); }
      var fileContent = new Uint8Array(byteNumbers);

      // NOTE: if you get the file using FileReader API "readAsArrayBuffer" the Base 64 conversion is not required
      // var fileContent = new Uint8Array(e.target.result);

      window.parent.webapi.safeAjax({
          type: "PUT", // NOTE: right now Portals requires PUT instead of PATCH for the upload
          url: url + fileName,
          contentType: "application/octet-stream",
          data: fileContent,
          processData: false,
          success: function (data: any, textStatus: any, xhr: any) {
              console.log("File uploaded");
              if(requestNumber === 1){ 
                console.log("Success 1", requestNumber)
                dispatch(saveSnapshotAsync({...info, requestNumber: 2}))
              }
              else {console.log("Success 2", requestNumber)}
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            console.log("Error Request", requestNumber);
              console.log(xhr);
          }
      });

      // when successfully saved 
      // loadSnapshotsAsync();
    } catch (error) {
      console.log('save snapshot error: ', error);
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const loadSelectedSnapshotAsync = (info: any) => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true))
    //   window.parent.webapi.safeAjax({
    //     type: "GET",
    //     url: "/_api/seer_rominportalsnapshots(7efbb810-faad-ee11-a569-002248015232)?$select=seer_rominportalsnapshotid,_seer_account_value,seer_basejson,seer_basejson_name,_seer_contact_value,createdon,modifiedon,seer_name,seer_updatedsnapshotdata,seer_updatedsnapshotdata_name",
    //     contentType: "application/json",
    //     headers: {
    //         "Prefer": "odata.include-annotations=*"
    //     },
    //     success: function (data, textStatus, xhr) {
    //         var result = data;
    //         console.log(result);
    //         // Columns
    //         var seer_rominportalsnapshotid = result["seer_rominportalsnapshotid"]; // Guid
    //         var seer_account = result["_seer_account_value"]; // Lookup
    //         var seer_account_formatted = result["_seer_account_value@OData.Community.Display.V1.FormattedValue"];
    //         var seer_account_lookuplogicalname = result["_seer_account_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
    //         var seer_basejson = result["seer_basejson"]; // File
    //         var seer_basejson_name = result["seer_basejson_name"]; // Text
    //         var seer_contact = result["_seer_contact_value"]; // Lookup
    //         var seer_contact_formatted = result["_seer_contact_value@OData.Community.Display.V1.FormattedValue"];
    //         var seer_contact_lookuplogicalname = result["_seer_contact_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
    //         var createdon = result["createdon"]; // Date Time
    //         var createdon_formatted = result["createdon@OData.Community.Display.V1.FormattedValue"];
    //         var modifiedon = result["modifiedon"]; // Date Time
    //         var modifiedon_formatted = result["modifiedon@OData.Community.Display.V1.FormattedValue"];
    //         var seer_name = result["seer_name"]; // Text
    //         var seer_updatedsnapshotdata = result["seer_updatedsnapshotdata"]; // File
    //         var seer_updatedsnapshotdata_name = result["seer_updatedsnapshotdata_name"]; // Text
    //     },
    //     error: function (xhr, textStatus, errorThrown) {
    //         console.log(xhr);
    //     }
    // });
    
    } catch (error) {
      console.log('save snapshot error: ');
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const loadSnapshotsAsync = (info: any) => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true))
    } catch (error) {
      console.log('save snapshot error: ');
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}