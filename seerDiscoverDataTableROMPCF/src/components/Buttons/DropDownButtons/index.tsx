import * as React from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import UpdateOutlined from '@mui/icons-material/UpdateOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBaseJson,
  setCurrentSavedParameters,
  setCurrentSavedProjectTasks,
  setCurrentSavedResources,
  setInitiallyCurrentChangingParameters,
  setInitiallyCurrentChangingProjectTasks,
  setInitiallyCurrentChangingResources,
  setLoadedSnapshotDetails,
  setLoadedSnapshotId,
  setResourceModelDataParameters,
  setSelectSnapshot,
  setSelectedSnapshotFromDB,
  setSettingParameters,
  setShowLoadedSnapshotBase,
  setShowLoadedSnapshotPametersNRates,
  setShowSaveParameters,
  setSnapshotBase,
  setSnapshotLoading,
  setSnapshotParameters,
  setStateSnapshot
} from '../../../redux/snapshotReport/snapshotReportSlice';
import SnapShotPopup from '../../SnapshotPopup/SnapshotPopup';
import OverlayComponent from '../../Overley';
import { showAlertError } from '../../../Utils/Alerts';
import { failedToLoadSelectedSnapshot, noExistingSnapshots } from '../../../Constants/messages';
import { convertBase64ToJson } from '../../../Utils/commonFunc.utils';
import { seerBasejson, seerUpdatedsnapshotdata } from '../../../Constants/endPoints';

const index = ({selectedButton, hasSnapshots, selectItem, selectedItemParent, handleSaveSnapshot, arrayGeneratorHandler}: 
  {selectedButton: any, hasSnapshots?: boolean, selectItem?: any, selectedItemParent?: string, handleSaveSnapshot?: any, arrayGeneratorHandler?: any}) => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize the state for selected item
  const [openLoadSnapshotModal, setOpenLoadSnapshotModal] = useState(false); // Initialize the state for selected item

  const snapshotsList = useSelector((state: any) => state.snapshot.snapshotsList)
  const [showOverlayLoad, setShowOverlayLoad] = useState(false);

  const loadSelectedSnapshotAsyncAPI: any = (info: any) => {
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
              dispatch(getSnapshotBaseJSONFileAPI({requestNumber: 1, recodeId: seer_rominportalsnapshotid, ...info}))
              // dispatch(getUpdatedSnapshotFile({requestNumber: 1, recodeId: seer_rominportalsnapshotid}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
              dispatch(setSnapshotLoading(false))
              setShowOverlayLoad(false)
              setTimeout(() => {
                showAlertError(failedToLoadSelectedSnapshot);
              }, 10);
          }
        });
      
      } catch (error) {
        dispatch(setSnapshotLoading(false))
        setShowOverlayLoad(false)
        setTimeout(() => {
          showAlertError(failedToLoadSelectedSnapshot);
        }, 10);
      }
    }
  }
  
  const getSnapshotBaseJSONFileAPI = (info: any) => {
    const {requestNumber, recodeId} = info;
  
    return (dispatch: (arg0: any) => void) => {
      try {
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
              dispatch(getUpdatedSnapshotFileAPI({requestNumber: 1, recodeId, base: convertedJSONData, ...info}))
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
              dispatch(setSnapshotLoading(false))
              setShowOverlayLoad(false)
              setTimeout(() => {
                showAlertError(failedToLoadSelectedSnapshot);
              }, 10);
          }
        });
      } catch (error) {
        dispatch(setSnapshotLoading(false))
        setShowOverlayLoad(false)
        setTimeout(() => {
          showAlertError(failedToLoadSelectedSnapshot);
        }, 10);
      }
    }
  }
  
  const getUpdatedSnapshotFileAPI = (info: any) => {
    const {requestNumber, recodeId, base} = info;
  
    return (dispatch: (arg0: any) => void) => {
      try {
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
              dispatch(info?.arrayGeneratorHandler(false, {...convertedJSONData, base}, 'snapshot'))
              dispatch(setSnapshotLoading(false))
              setShowOverlayLoad(false)
          },
          error: function (xhr: any, textStatus: any, errorThrown: any) {
            dispatch(setSnapshotLoading(false))
            setShowOverlayLoad(false)
            setTimeout(() => {
              showAlertError(failedToLoadSelectedSnapshot);
            }, 10);
          }
      });
      } catch (error) {
        dispatch(setSnapshotLoading(false))
        setShowOverlayLoad(false)
        setTimeout(() => {
          showAlertError(failedToLoadSelectedSnapshot);
        }, 10);
      }
    }
  }

  React.useEffect(() => {
    if (showOverlayLoad) {
      loadSelectedSnapshotHandler(selectedItem);
    }
  }, [showOverlayLoad, selectedItem])

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setSelectSnapshotHandler = React.useCallback((info) => {
    dispatch(setSelectSnapshot(info))
  }, [dispatch])

  const loadSelectedSnapshotHandler = React.useCallback((info) => {
    dispatch(loadSelectedSnapshotAsyncAPI({snapshotId: info, arrayGeneratorHandler}))
  }, [dispatch])

  const handleMenuItemClick = (itemValue: any) => {
    setSelectedItem(itemValue); // Update the selected item in state
    setShowOverlayLoad(true);
    setSelectSnapshotHandler(itemValue);
    handleClose(); // Close the menu
  };

  const optionList: any = {
    "item1": "Load Snapshots Option List 1",
    "item2": "Load Snapshots Option 2",
    "item3": "Load Snapshots Option 3"
  }

  const handleClosePopup = () => {
    setOpenLoadSnapshotModal(false)
  }
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {
          selectedButton === "button2" && 
          (
          <>
            <Button title='Load Snapshots'
              aria-controls="dropdown-menu" 
              // className="dropdown mr-10 btn-gray-outline" 
              variant="contained" 
              color="primary" 
              className='btn-blue-outline btn-small mr-10'  
              aria-haspopup="true" 
              onClick={() => {
                if (snapshotsList && snapshotsList?.length) {
                  setOpenLoadSnapshotModal(!openLoadSnapshotModal)
                } else {
                  alert(noExistingSnapshots)
                }
              }}
            >
              <DownloadingOutlinedIcon className='btn-icon'/> 
            </Button>
            {(snapshotsList && snapshotsList?.length > 0) && (   
              <div>
                {
                  openLoadSnapshotModal && <SnapShotPopup snapshots = {snapshotsList} handleClose={handleClosePopup} onSelect={handleMenuItemClick} open={openLoadSnapshotModal}/>
                }
              </div>
            )}
          </>
        )}
        {
          selectedButton === "button2" &&
          // selectedButton === "button1" && 
        (
          <Button  title='Save Snapshot'
            variant="contained" 
            color="primary" 
            className='btn-blue-outline btn-small mr-10'
            onClick={handleSaveSnapshot}
            >
            <SaveOutlinedIcon className='btn-icon'/> 
          </Button>
        )}
        {selectedButton === "button2" && (
          <Button title='Update Master'
            variant="contained" 
            color="primary" 
            className='btn-gray-outline btn-small mr-10'
            onClick={() => {}}
          >
            <UpdateOutlined className='btn-icon'/> 
          </Button>
        )}
      </div>
      {showOverlayLoad && <OverlayComponent showOverlay={showOverlayLoad}/>}
      {/* <div className='text-right'>
        {selectedItem && selectedButton === "button2" && (
          <InputLabel className='label  ptb-10'>{optionList?.[selectedItem]}</InputLabel>
        )}
      </div> */}
    </div>
  );
}

export default React.memo(index);
