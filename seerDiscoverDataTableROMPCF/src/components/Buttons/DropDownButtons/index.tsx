import * as React from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import UpdateOutlined from '@mui/icons-material/UpdateOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectSnapshot } from '../../../redux/snapshotReport/snapshotReportSlice';
import SnapShotPopup from '../../SnapshotPopup/SnapshotPopup';

const index = ({selectedButton, hasSnapshots, selectItem, selectedItemParent, handleSaveSnapshot}: 
  {selectedButton: any, hasSnapshots?: boolean, selectItem?: any, selectedItemParent?: string, handleSaveSnapshot?: any}) => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize the state for selected item
  const [openLoadSnapshotModal, setOpenLoadSnapshotModal] = useState(false); // Initialize the state for selected item

  const snapshotsList = useSelector((state: any) => state.snapshot.snapshotsList)
  // const snapshotsList = [{seer_name: "test", seer_description: "Des", seer_rominportalsnapshotid: "idd", createdOn: "2024-01-10T09:37:11Z"}, {seer_name: "teeest", seer_description: "Deseee", seer_rominportalsnapshotid: "iddss", createdOn: "2024-01-10T09:37:11Z"}];

  console.log("snapshotsListState", snapshotsList)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setSelectSnapshotHandler = React.useCallback((info) => {
    dispatch(setSelectSnapshot(info))
  }, [dispatch])

  const handleMenuItemClick = (itemValue: any) => {
    console.log('itemValue => ', itemValue);
    setSelectedItem(itemValue); // Update the selected item in state
    selectItem(itemValue);
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
          // selectedButton === "button2" && 
          selectedButton === "button2" && 
          (
          <>
            <Button title='Load Snapshots'
              aria-controls="dropdown-menu" 
              // className="dropdown mr-10 btn-gray-outline" 
              variant="contained" 
              color="primary" 
              className='btn-blue-outline btn-small mr-10'  
              aria-haspopup="true" onClick={handleClick}>
              <DownloadingOutlinedIcon className='btn-icon'/> 
            </Button>
            {snapshotsList && snapshotsList?.length && (   <div>
        {
          openLoadSnapshotModal ? <SnapShotPopup snapshots = {snapshotsList} handleClose={handleClosePopup} open={openLoadSnapshotModal}/> : <></>
        }
      </div>
              // <Menu
              //   id="dropdown-menu"
              //   anchorEl={anchorEl}
              //   open={Boolean(anchorEl)}
              //   onClose={handleClose}
              //   className='custom-dropdown-menu'
              // >
              //   {
              //     snapshotsList?.map((optionItem: any, ) => (
              //       <MenuItem value={optionItem?.seer_rominportalsnapshotid} onClick={() => handleMenuItemClick(optionItem?.seer_rominportalsnapshotid)}>{optionItem?.seer_name}</MenuItem>
              //     ))
              //   }
              //   {/* <MenuItem value="item1" onClick={() => handleMenuItemClick("item1")}>Load Snapshots Option 1</MenuItem>
              //   <MenuItem value="item2" onClick={() => handleMenuItemClick("item2")}>Load Snapshots Option 2</MenuItem>
              //   <MenuItem value="item3" onClick={() => handleMenuItemClick("item3")}>Load Snapshots Option 3</MenuItem> */}
              // </Menu> 
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
            onClick={() => setOpenLoadSnapshotModal(true)}
          >
            <UpdateOutlined className='btn-icon'/> 
          </Button>
        )}
      </div>
      <div className='text-right'>
        {selectedItem && selectedButton === "button2" && (
          <InputLabel className='label  ptb-10'>{optionList?.[selectedItem]}</InputLabel>
        )}
      </div>
    </div>
  );
}

export default React.memo(index);
