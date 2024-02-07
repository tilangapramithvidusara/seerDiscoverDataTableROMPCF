import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { setIsLiveModeEnable, setStateSnapshot } from '../../../redux/snapshotReport/snapshotReportSlice';
import { useDispatch } from 'react-redux';

const index = (
  {
    setSelectedButton, 
    selectedButton, 
    numberOfButtons, 
    buttonTitles,
    arrayGeneratorHandler
  }: 
  {
    setSelectedButton: any, selectedButton: any, 
    numberOfButtons?: number, buttonTitles?: any,
    arrayGeneratorHandler?: any,
  }) => {

  const dispatch = useDispatch();

  const handleButtonChange = (event: any, newValue: any) => {
    console.log('newValue ==> ',newValue);
    
    if (newValue == 'button2')
      dispatch(setIsLiveModeEnable(false))
    else if (newValue == 'button1') {
      dispatch(setIsLiveModeEnable(true));
    }
    // setSelectedButton(newValue);
      // if (newValue == 'button1') {
      //   arrayGeneratorHandler(true);
      // }
    setTimeout(() => {
      setSelectedButton(newValue);
      if (newValue == 'button1') {
        arrayGeneratorHandler(true);
      }
    }, 10);
    // setTimeout(() => {
    //   if (newValue == 'button1') {
    //     arrayGeneratorHandler(true);
    //   }
    // }, 20)
    // setSelectedButton(newValue);
  };

  

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

          {buttonTitles?.map((item: any, index: number) => {
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
          <ToggleButton className='toggle-btn' style={{ display: 'flex' }} value="button2" aria-label="Button 2">
              SnapShot
          </ToggleButton>  
        </ToggleButtonGroup>
      )}
    </>
  );
}

export default React.memo(index);