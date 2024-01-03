import axios from 'axios';
import { setSnapshotLoading } from './snapshotReportSlice';
import { executeAfterGivenDilay } from '../../Utils/commonFunc.utils';

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