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
  return async (dispatch: (arg0: any) => void) => {
    try {
      dispatch(setSnapshotLoading(true));
      const record: any = {};
      record["seer_account@odata.bind"] = "/accounts(b8357ad8-a499-ee11-be37-000d3a0be042)"; // Lookup
      record["seer_contact@odata.bind"] = "/contacts(cedbb378-6d6d-ee11-9ae7-000d3a0be042)"; // Lookup
      record.seer_name = "test"; // Text
      record.seer_description = "test description"; // Text

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