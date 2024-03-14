import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { setIsLiveModeEnable } from '../../../redux/snapshotReport/snapshotReportSlice';
import { useDispatch, useSelector } from 'react-redux';

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

  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  const currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const loadedSnapshotId = useSelector((state: any) => state?.snapshot?.loadedSnapshotId);

  const handleButtonChange = (event: any, newValue: any) => {
    if (!newValue) return;
    setSelectedButton(newValue);
    if (newValue == 'button2') {
      dispatch(setIsLiveModeEnable(false))
      if (currentSavedParameters || loadedSnapshotId) {
        arrayGeneratorHandler(false, {...currentSavedParameters, base: snapshotBase, currentSavedResources}, 'snapshot')
      }
    } else if (newValue == 'button1') {
      dispatch(setIsLiveModeEnable(true));
      setTimeout(() => {
        arrayGeneratorHandler(true)
      }, 2)
    }
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