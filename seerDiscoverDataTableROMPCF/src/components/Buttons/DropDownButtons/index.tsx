import * as React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import UpdateOutlined from '@mui/icons-material/UpdateOutlined';
import { useDispatch } from 'react-redux';

const index = ({selectedButton, hasSnapshots}: {selectedButton: any, hasSnapshots?: boolean}) => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize the state for selected item

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (itemValue: any) => {
    
    setSelectedItem(itemValue); // Update the selected item in state
    handleClose(); // Close the menu
  };

  const optionList: any = {
    "item1": "Load Snapshots Option 1",
    "item2": "Load Snapshots Option 2",
    "item3": "Load Snapshots Option 3"
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
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className='custom-dropdown-menu'
            >
              <MenuItem value="item1" onClick={() => handleMenuItemClick("item1")}>Load Snapshots Option 1</MenuItem>
              <MenuItem value="item2" onClick={() => handleMenuItemClick("item2")}>Load Snapshots Option 2</MenuItem>
              <MenuItem value="item3" onClick={() => handleMenuItemClick("item3")}>Load Snapshots Option 3</MenuItem>
            </Menu>
          </>
        )}
        {
          selectedButton === "button2" &&
          // selectedButton === "button1" && 
        (
          <Button  title='Save Snapshot'
            variant="contained" 
            color="primary" 
            className='btn-blue-outline btn-small mr-10'>
            <SaveOutlinedIcon className='btn-icon'/> 
          </Button>
        )}
        {selectedButton === "button2" && (
          <Button title='Update Master'
            variant="contained" 
            color="primary" 
            className='btn-gray-outline btn-small mr-10'
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
