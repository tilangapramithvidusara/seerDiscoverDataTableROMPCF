import { setRecordId, setBaseJson, setSnapshotLoading, setSettingParameters, setLoadedSnapshot, setSnapshotList } from './snapshotReportSlice';
import { convertBase64ToJson, executeAfterGivenDilay } from '../../Utils/commonFunc.utils';
import { seerBasejson, seerUpdatedsnapshotdata } from '../../Constants/endPoints';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';
import { showAlertError, showAlertSuccess } from '../../Utils/Alerts';

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
            console.log('snapshot success ===> ', data, textStatus);
            
              var newId = xhr.getResponseHeader("entityid");
              console.log("newId", newId);
              dispatch(setRecordId(newId))
              dispatch(saveSnapshotAsync({requestNumber: 1, recodeId: newId, ...info}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            console.log("snapshot failed xhr", xhr);
            console.log("snapshot failed", textStatus, errorThrown);
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
                console.log("Success 1", requestNumber, data, xhr)
                console.log('Success one textStatus', textStatus);
                
                dispatch(saveSnapshotAsync({...info, requestNumber: 2}))
                dispatch(setSnapshotLoading(false));
              }
              else {
                console.log("Success 2", requestNumber, data, xhr)
                console.log('Success two textStatus', textStatus);
                // alert("Snapshot saved succesfully!")
                dispatch(setSettingParameters(snapshotData))
                showAlertSuccess("Snapshot saved succesfully!")
              }
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            console.log("Error Request", requestNumber);
            console.log(xhr);
            showAlertError("Snapshot failed to save!")
          }
      });

      // when successfully saved 
      // loadSnapshotsAsync();
    } catch (error) {
      console.log('save snapshot error: ', error);
      showAlertError("Snapshot failed to save!")
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const loadSnapshotsAsync: any = () => {
  console.log("loadSnapshotsAsync Calling... ")
  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: "/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,_seer_account_value,_seer_contact_value,createdon,seer_description,modifiedon,seer_name&$orderby=createdon desc,modifiedon desc",
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function (data: any, textStatus: any, xhr: any) {
            var results = data;
            console.log(results);
            dispatch(setSnapshotList(results?.value));
            // setSnapshotConfigList("List results", results?.value);
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

export const loadSelectedSnapshotAsync: any = (info: any) => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true))
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${info?.snapshotId})?$select=seer_rominportalsnapshotid,_seer_account_value,seer_basejson,seer_basejson_name,_seer_contact_value,createdon,modifiedon,seer_name,seer_updatedsnapshotdata,seer_updatedsnapshotdata_name`,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function (data: any, textStatus: any, xhr: any) {
            var result = data;
            console.log("loadSelectedSnapshotAsync success", result);
            // Columns
            var seer_rominportalsnapshotid = result["seer_rominportalsnapshotid"];
            dispatch(getSnapshotBaseJSONFile({requestNumber: 1, recodeId: seer_rominportalsnapshotid}))
            dispatch(getUpdatedSnapshotFile({requestNumber: 1, recodeId: seer_rominportalsnapshotid}))
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
            console.log("loadSelectedSnapshotAsync failed", xhr);
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

export const getSnapshotBaseJSONFile = (info: any) => {
  const {requestNumber, recodeId} = info;

  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${recodeId})/seer_basejson`,
        contentType: "application/json",
        success: function (data: any, textStatus: any, xhr: any) {
            var fileContent = data["value"]; // Base 64
            var fileName = "file.bin"; // default name
    
            console.log("File retrieved. Name: " + fileName);
            console.log("File fileContent. Name: " + fileContent);
            console.log("File retrived success");
            // dispatch(setBaseJson({...info, fileContent:fileContent, recordId: recodeId}));
            const convertedJSONData = convertBase64ToJson(fileContent);
            dispatch(setBaseJson(convertedJSONData));
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

export const getUpdatedSnapshotFile = (info: any) => {
  const {requestNumber, recodeId} = info;

  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${recodeId})/seer_updatedsnapshotdata`,
        contentType: "application/json",
        success: function (data: any, textStatus: any, xhr: any) {
            var fileContent = data["value"]; // Base 64
            var fileName = "file.bin"; // default name
    
            console.log("File retrieved. Name: " + fileName);
            console.log("File fileContent. Name: " + fileContent);
            console.log("File uploaded");
            const convertedJSONData = convertBase64ToJson(fileContent);
            dispatch(setSettingParameters(convertedJSONData));
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