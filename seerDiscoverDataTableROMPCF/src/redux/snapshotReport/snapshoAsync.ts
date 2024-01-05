import axios from 'axios';
import { setRecordId, setSnapshotLoading } from './snapshotReportSlice';
import { executeAfterGivenDilay } from '../../Utils/commonFunc.utils';

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
  const contactId = queryParameters.get("contactId");

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
      dispatch(setSnapshotLoading(true));
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