import axios from 'axios';
import { setRecordId, setSnapshotLoading } from './snapshotReportSlice';
import { executeAfterGivenDilay } from '../../Utils/commonFunc.utils';
import { seerBasejson, seerUpdatedsnapshotdata } from '../../Constants/endPoints';

declare global {
  interface Window {
    webapi: any;
    createDevopsWorkItemURL: any;
    userId: any;
  }
}

declare global {
  interface Window {
    webapi: any;
    createDevopsWorkItemURL: any;
    userId: any;
  }
}

export const saveInitialSnapshotRecordAsync = (info: any) => {
  const url = new URL(window.location.href);
  const queryParameters = url.searchParams;
  // console.log('accountId -=> ', queryParameters.get("accountId"));
  const accountId = queryParameters.get("accountId");
  const contactId = queryParameters.get("userId");

  console.log("ACC ID", accountId);
  console.log("COntact ID", contactId);
  console.log("saveInitialSnapshotRecordAsync Info", info);

  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      const record: any = {};
      record["seer_account@odata.bind"] = `/accounts(${accountId})`; // Lookup
      record["seer_contact@odata.bind"] = `/contacts(${contactId})`; // Lookup
      record.seer_name = info?.seerName; // Text
      record.seer_description = info?.seerDescription; // Text

      window.parent.webapi.safeAjax({
          type: "POST",
          contentType: "application/json",
          url: "/_api/seer_rominportalsnapshots",
          data: JSON.stringify(record),
          success: function (data: any, textStatus: any, xhr: any) {
              var newId = xhr.getResponseHeader("entityid");
              console.log(newId);
              dispatch(setRecordId(newId))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
              console.log(xhr);
          }
      });
    } catch (error) {
      console.log('save snapshot error: ');
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
      const {payload: {requestNumber, recodeId, baseData, snapshotData}} = info;
      const endPoint = requestNumber == 1 ? seerBasejson : seerUpdatedsnapshotdata;
      dispatch(setSnapshotLoading(true));
      var fileName = requestNumber == 1 ? encodeURIComponent(`baseJsonData${new Date()}`) : encodeURIComponent(`snapshotJsonData${new Date()}`); // The following characters are not allowed inside a file name: \ / : * ? " < > |
      const url = `/_api/seer_rominportalsnapshots(${recodeId})/${endPoint}?x-ms-file-name=`

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
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
              console.log(xhr);
          }
      });

      // when successfully saved 
      // loadSnapshotsAsync();
    } catch (error) {
      console.log('save snapshot error: ');
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
      // when after successfully load
      // setSettingParameters()
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