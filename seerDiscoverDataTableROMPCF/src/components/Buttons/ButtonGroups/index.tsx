import { useState } from 'react';
import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const index = (
  {setSelectedButton, selectedButton, 
    numberOfButtons, buttonTitles
  }: 
  {setSelectedButton: any, selectedButton: any, 
    numberOfButtons?: number, buttonTitles?: any
  }) => {
  // const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonChange = (event: any, newValue: any) => {
    console.log('newValue==> ');
    
    setSelectedButton(newValue);
  };

  console.log('selectedButton', selectedButton);
  

  return (
    <>
      {(buttonTitles || numberOfButtons) ? (
        <ToggleButtonGroup
        value={selectedButton}
        exclusive
        size="small"
        color="primary"
        onChange={handleButtonChange}
        className='custom-toggle'
      >

        {buttonTitles.map((item: any, index: number) => {
          console.log('item ', item)
          return(
          <ToggleButton className='toggle-btn' value={`${item?.title}`} aria-label={`Button ${index}`}>
            {item?.value}
          </ToggleButton>
        )})}
        
      </ToggleButtonGroup>
      ) : (
        <ToggleButtonGroup
          value={selectedButton}
          exclusive
          size="small"
          color="primary"
          onChange={handleButtonChange}
          className='custom-toggle'
        >
          <ToggleButton className='toggle-btn' value="button1" aria-label="Button 1">
            Live Data
          </ToggleButton>
          <ToggleButton className='toggle-btn' value="button2" aria-label="Button 2">
              SnapShot
          </ToggleButton>  
        </ToggleButtonGroup>
      )}
    </>
  );
}

export default React.memo(index);