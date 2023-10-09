import { useState } from 'react';
import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const index = ({setSelectedButton, selectedButton}: {setSelectedButton: any, selectedButton: any}) => {
  // const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonChange = (event: any, newValue: any) => {
    setSelectedButton(newValue);
  };

  return (
    <ToggleButtonGroup
      value={selectedButton}
      exclusive
      size="small"
      color="primary"
      onChange={handleButtonChange}
    >
      <ToggleButton value="button1" aria-label="Button 1">
        Live Data
      </ToggleButton>
      <ToggleButton value="button2" aria-label="Button 2">
        SnapShot
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default React.memo(index);