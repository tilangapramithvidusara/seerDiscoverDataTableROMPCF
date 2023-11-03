import * as React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

const index = ({selectedButton}: {selectedButton: any}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(""); // Initialize the state for selected item

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (itemValue: any) => {
    console.log("item ===> ", itemValue);
    
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
        {selectedButton === "button2" && (
          <>
            <Button aria-controls="dropdown-menu" className="dropdown mr-10" aria-haspopup="true" onClick={handleClick}>
              Load Snapshots
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
        {selectedButton === "button1" && (
          <Button variant="contained" color="primary" className='btn-primary'>
            Save Snapshot
          </Button>
        )}
        {selectedButton === "button2" && (
          <Button variant="contained" color="primary" className='btn-primary'>
            Update Master
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
