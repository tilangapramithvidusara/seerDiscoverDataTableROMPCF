import { setRecordId, setBaseJson, setSnapshotLoading, setSettingParameters, setLoadedSnapshot, setSnapshotList, setShowSaveParameters, setResourceModelDataParameters, setSelectedSnapshotFromDB, setStateSnapshot, setIsSnapshotLoading, setLoadedSnapshotId, setCurrentSavedParameters, setInitiallyCurrentChangingParameters, setCurrentSavedResources, setInitiallyCurrentChangingResources, setCurrentSavedProjectTasks, setInitiallyCurrentChangingProjectTasks, setSnapshotBase, setLoadedSnapshotDetails, setLoadedSnapshotDetailsWhenSave, setDoCalculation, setShowLoadedSnapshotBase, setShowLoadedSnapshotPametersNRates, setSnapshotParameters, setLiveBase, setFinalizeCount, setFinalizeSanpshotName } from './snapshotReportSlice';
import { convertBase64ToJson, executeAfterGivenDilay } from '../../Utils/commonFunc.utils';
import { seerBasejson, seerUpdatedsnapshotdata } from '../../Constants/endPoints';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';
import { showAlertError, showAlertSuccess } from '../../Utils/Alerts';
import { initialFetchFailure, initialFetchSuccess } from '../report/reportSlice';
import { fetchInitialDataAsync } from '../report/reportAsycn';
import { failedToLoadSelectedSnapshot, failedToSave } from '../../Constants/messages';

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
  const accountId = queryParameters.get(snapshotAPIConstants.ACCOUNT_ID);
  const contactId = queryParameters.get(snapshotAPIConstants.USER_ID);

  return (dispatch: any) => {
    try {
      dispatch(setSnapshotLoading(true));

      // NEW STATE
      dispatch(setIsSnapshotLoading(true));
      const record: any = {};
      record[snapshotAPIConstants.SEER_ACCOUNT_RECORD_ID] = `/accounts(${accountId})`; // Lookup
      record[snapshotAPIConstants.SEER_CONTACT_RECORD_ID] = `/contacts(${contactId})`; // Lookup
      record.seer_name = info?.seerName; // Text
      record.seer_description = info?.seerDescription; // Text

      window.parent.webapi.safeAjax({
          type: "POST",
          contentType: "application/json",
          url: snapshotAPIConstants.INITIAL_SNAPSHOT_URL,
          data: JSON.stringify(record),
          success: function (data: any, textStatus: any, xhr: any) {
            
              var newId = xhr.getResponseHeader("entityid");
              dispatch(setRecordId(newId))
              dispatch(saveSnapshotAsync({requestNumber: 1, recodeId: newId, ...info}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            // dispatch(saveSnapshotAsync({requestNumber: 1, recodeId: 111, ...info}))
            showAlertError(failedToSave);
            dispatch(setIsSnapshotLoading(false))
            dispatch(setSnapshotLoading(false))
          }
      });
    } catch (error) {
      showAlertError(failedToSave);
      dispatch(setIsSnapshotLoading(false))
      dispatch(setSnapshotLoading(false))
    } 
  }
}

export const saveSnapshotAsync: any = (info: any) => {
  return (dispatch: any) => {
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
              if(requestNumber === 1){ 
                dispatch(saveSnapshotAsync({...info, requestNumber: 2}))
                dispatch(setSnapshotLoading(false));
              }
              else {
                dispatch(setSettingParameters(snapshotData))

                // NEW STATES
                dispatch(setLoadedSnapshotId(recodeId))
                dispatch(setSnapshotBase(baseData));
                dispatch(setLoadedSnapshotDetailsWhenSave({
                  seer_rominportalsnapshotid: recodeId,
                  seer_name: info?.seerName,
                }));
                // NEW STATES
                dispatch(loadFinalizeSnapshotsAsync())
                dispatch(loadSnapshotsAsync());
                dispatch(loadSelectedSnapshotAsync({snapshotId: recodeId, arrayGeneratorHandler: info?.arrayGeneratorHandler}))
                showAlertSuccess("Snapshot saved succesfully!")
              }
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            showAlertError(failedToSave)
            dispatch(setIsSnapshotLoading(false));
          }
      });
    } catch (error) {
      showAlertError(failedToSave)
      dispatch(setIsSnapshotLoading(false))
    } 
  }
}

// webapi.safeAjax({
//   type: "GET",
//   url: "/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,seer_isfinalversion&$filter=(_seer_account_value eq 91855757-e8d6-ee11-904d-000d3a0bca56 and seer_reporttype eq 381070000 and seer_isfinalversion eq true)&$count=true",
//   contentType: "application/json",
//   headers: {
//       "Prefer": "odata.include-annotations=*"
//   },
//   success: function (data, textStatus, xhr) {
//       var results = data;
//       console.log(results);
//       var odata_count = results["@odata.count"];
//       for (var i = 0; i < results.value.length; i++) {
//           var result = results.value[i];
//           // Columns
//           var seer_rominportalsnapshotid = result["seer_rominportalsnapshotid"]; // Guid
//           var seer_isfinalversion = result["seer_isfinalversion"]; // Boolean
//           var seer_isfinalversion_formatted = result["seer_isfinalversion@OData.Community.Display.V1.FormattedValue"];
//       }
//   },
//   error: function (xhr, textStatus, errorThrown) {
//       console.log(xhr);
//   }
// });

export const loadFinalizeSnapshotsAsync: any = () => {
  const accountId = localStorage.getItem("accountId");
  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,seer_name,seer_isfinalversion&$filter=(_seer_account_value eq ${accountId} and seer_reporttype eq 381070000 and seer_isfinalversion eq true)&$count=true`,
        // "/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,_seer_contact_value,_createdby_value,createdon,seer_description,_modifiedby_value,modifiedon"
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function (data: any, textStatus: any, xhr: any) {
            var results = data;
            var odata_count = results["@odata.count"]
            dispatch(setFinalizeCount(odata_count));
            dispatch(setFinalizeSanpshotName(results?.value?.[0]?.seer_name))
            // setSnapshotConfigList("List results", results?.value);
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
          // showAlertError(failedToLoadSelectedSnapshot);
        }
      });
    } catch (error) {
      // showAlertError(failedToLoadSelectedSnapshot);
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const loadSnapshotsAsync: any = () => {
  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: "/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,_seer_account_value,_seer_contact_value,_createdby_value,createdon,seer_description,seer_isfinalversion,_modifiedby_value,modifiedon,_seer_createdbyportal_value,_seer_modifiedbyportal_value,seer_settingsupdateddate,seer_name&$orderby=createdon desc,modifiedon desc",
        // "/_api/seer_rominportalsnapshots?$select=seer_rominportalsnapshotid,_seer_contact_value,_createdby_value,createdon,seer_description,_modifiedby_value,modifiedon"
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function (data: any, textStatus: any, xhr: any) {
            var results = data;
            dispatch(setSnapshotList(results?.value));
            // setSnapshotConfigList("List results", results?.value);
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
          showAlertError(failedToLoadSelectedSnapshot);
        }
      });
    } catch (error) {
      showAlertError(failedToLoadSelectedSnapshot);
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const loadSelectedSnapshotAsync: any = (info: any) => {
  return (dispatch: (arg0: any) => void) => {
    try {      
      dispatch(setSnapshotLoading(true))
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${info?.snapshotId})?$select=seer_rominportalsnapshotid,_seer_account_value,seer_basejson,seer_basejson_name,_seer_contact_value,createdon,modifiedon,seer_name,seer_updatedsnapshotdata,seer_updatedsnapshotdata_name`,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: async function (data: any, textStatus: any, xhr: any) {
            var result = data;
            // Columns
            var seer_rominportalsnapshotid = result["seer_rominportalsnapshotid"];
            dispatch(getSnapshotBaseJSONFile({requestNumber: 1, recodeId: seer_rominportalsnapshotid, ...info}))
            // dispatch(getUpdatedSnapshotFile({requestNumber: 1, recodeId: seer_rominportalsnapshotid}))
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
            dispatch(setSnapshotLoading(false))
            showAlertError(failedToLoadSelectedSnapshot);
        }
      });
    
    } catch (error) {
      dispatch(setSnapshotLoading(false))
      showAlertError(failedToLoadSelectedSnapshot);
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}

export const getSnapshotBaseJSONFile = (info: any) => {
  const {requestNumber, recodeId} = info;

  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${recodeId})/${seerBasejson}`,
        contentType: "application/json",
        success: async function (data: any, textStatus: any, xhr: any) {
            var fileContent = data["value"]; // Base 64
            var fileName = "file.bin"; // default name

            // dispatch(setBaseJson({...info, fileContent:fileContent, recordId: recodeId}));
            const convertedJSONData = await convertBase64ToJson(fileContent);
            dispatch(setBaseJson(convertedJSONData));
            dispatch(getUpdatedSnapshotFile({requestNumber: 1, recodeId, base: convertedJSONData, ...info}))
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
            dispatch(setSnapshotLoading(false))
            showAlertError(failedToLoadSelectedSnapshot);
        }
      });
    } catch (error) {
      dispatch(setSnapshotLoading(false))
    }
  }
}

export const getUpdatedSnapshotFile = (info: any) => {
  const {requestNumber, recodeId, base} = info;

  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      window.parent.webapi.safeAjax({
        type: "GET",
        url: `/_api/seer_rominportalsnapshots(${recodeId})/${seerUpdatedsnapshotdata}`,
        contentType: "application/json",
        success: async function (data: any, textStatus: any, xhr: any) {
            var fileContent = data["value"]; // Base 64
            var fileName = "file.bin"; // default name
    
            const convertedJSONData = await convertBase64ToJson(fileContent);
            const {snapshotResourceModelDataParameters, currentSavedResources, currentSavedProjectTasks, ...rest} = convertedJSONData;
            dispatch(setSettingParameters(rest));
            dispatch(setResourceModelDataParameters(snapshotResourceModelDataParameters));
            dispatch(setSelectedSnapshotFromDB(recodeId));
            dispatch(setShowSaveParameters(true));
            dispatch(setStateSnapshot(true))

            // NEW STATE
            dispatch(setLoadedSnapshotId(recodeId));
            dispatch(setLoadedSnapshotDetails(recodeId))
            dispatch(setCurrentSavedParameters(rest));
            dispatch(setInitiallyCurrentChangingParameters(rest))
            dispatch(setSnapshotParameters(rest))
            // resource
            dispatch(setCurrentSavedResources(currentSavedResources))
            dispatch(setInitiallyCurrentChangingResources(currentSavedResources))
            // project task
            dispatch(setCurrentSavedProjectTasks(currentSavedProjectTasks))
            dispatch(setInitiallyCurrentChangingProjectTasks(currentSavedProjectTasks))
            dispatch(setSnapshotBase(base));
            dispatch(setShowLoadedSnapshotBase(true));
            dispatch(setShowLoadedSnapshotPametersNRates(true));
            // dispatch(setDoCalculation(true));
            dispatch(info?.arrayGeneratorHandler(false, {...convertedJSONData, base}, 'snapshot'))
            // setComIsloading(true)
            // const inititalData = await fetchInitialDataAsync();
            // if (!inititalData.error) {
            //   dispatch(initialFetchSuccess(inititalData?.result));

            //   // NEW STATE
            //   dispatch(setLiveBase(inititalData?.result));
            //   dispatch(setSnapshotBase(inititalData?.result));
            // } else {
            //   // setComIsloading(false)
            //   dispatch(initialFetchFailure(inititalData?.result));
            // }
            dispatch(setSnapshotLoading(false))
        },
        error: function (xhr: any, textStatus: any, errorThrown: any) {
          dispatch(setSnapshotLoading(false))
        }
    });
    } catch (error) {
      dispatch(setSnapshotLoading(false))
    } finally {
      executeAfterGivenDilay(() => {
        dispatch(setSnapshotLoading(false))
      });
    }
  }
}
