import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  resourceParameterColumn
} from '../../Constants/parametersSetting';
import {
  setResourceModelDataParameters,
  setResourceModelDataParameterAttributes,
  setShowSaveParameters,
  setStateSnapshot,
  setCurrentSavedParameters,
  setCurrentChangingResources,
  setCurrentSavedResources,
  setCurrentSavedProjectTasks,
  setLatestChanges,
  setSnapshotSaveLoacalyOneTime
} from '../../redux/snapshotReport/snapshotReportSlice';

const ResourceTable = ({ handleClose, tableNumber, arrayGeneratorHandler }: { handleClose: any, tableNumber?: number, arrayGeneratorHandler?: any }) => {
  const dispatch = useDispatch();
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(resourceParameterColumn);
  const [showSnapshotForm, setShowSnapshotForm] = useState(false);
  
  // NEW STATE
  const initialFetchData = useSelector((state: any) => state.report.initialFetchData);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources);
  const currentChangingResources = useSelector((state: any) => state?.snapshot?.currentChangingResources);
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  const currentChangingParameters = useSelector((state: any) => state?.snapshot?.currentChangingParameters);
  const currentSavedProjectTasks = useSelector((state: any) => state?.snapshot?.currentSavedProjectTasks)
  const currentChangingProjectTasks = useSelector((state: any) => state?.snapshot?.currentChangingProjectTasks)
  const latestChanges = useSelector((state: any) => state?.snapshot?.latestChanges);
  const finalizeSnapshot = useSelector((state: any) => state?.snapshot?.finalizeSnapshot);
  const loadedSnapshotId = useSelector((state: any) => state?.snapshot?.loadedSnapshotId);

  const [disabled, setIsDisabled] = useState((loadedSnapshotId && (finalizeSnapshot?.seer_rominportalsnapshotid == loadedSnapshotId)))


  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(setStateSnapshot(true));
    }
  };


  const onChangeHanlder = useCallback(
    (info) => {
      dispatch(setCurrentChangingResources(info));
      dispatch(setLatestChanges({
        ...latestChanges,
        resourceChanged: true,
      }));
    },
    [dispatch]
  );

  const saveHandler = () => {
    // saveSnapshotAsync(info);
    setShowSnapshotForm(true);
    dispatch(setShowSaveParameters(true))
    dispatch(setStateSnapshot(true))
    dispatch(setCurrentSavedParameters(currentChangingParameters))
    dispatch(setCurrentSavedResources(currentChangingResources))
    dispatch(setCurrentSavedProjectTasks(currentChangingProjectTasks))
    dispatch(setLatestChanges({
      ...latestChanges,
      resourceChanged: true,
    }));
    dispatch(setSnapshotSaveLoacalyOneTime(true))
    arrayGeneratorHandler(false, {
      ...currentChangingParameters, 
      base: snapshotBase ? snapshotBase : initialFetchData,
      currentSavedResources: currentChangingResources,
      currentSavedProjectTasks: currentChangingProjectTasks
    }, 'snapshot')
  };

  useEffect(() => {
    setIsDisabled((loadedSnapshotId && (finalizeSnapshot?.seer_rominportalsnapshotid == loadedSnapshotId)))
  }, [loadedSnapshotId, finalizeSnapshot?.seer_rominportalsnapshotid])


  // useEffect(() => {
  //   if (isBaesline) {
  //     setColumns(parameterBaseSettingColumns);
  //   } else {
  //     setColumns(parameterSettingColumns);
  //   }
  // }, [isBaesline]);

// const objct = {
//   "resourceId": "83b5886a-a5dd-ec11-bb3c-000d3a7f3b87",
//   "name": "Cloud Deployment Manager",
//   "hourlyRate": 125.0000000000,
//   "hourlyCost": 50.0000000000
// }


  return (
    <div className="containerManualTable">
      <table>
        <thead>
          <tr>
            {columns?.map(({ header }, index: number) => {
              return (
                // <div>
                <th key={`${isBaesline ? 'baseline' : 'setting'}${index}`}>{header}</th>
                // </div>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* need to add types */}
          {currentChangingResources?.map((settingItem: any, id: number) => {            
            const {
              resourceId,
              name,
              hourlyRate,
              hourlyCost,
            } = settingItem;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <div>
                    <input
                      name="hourlyCost"
                      value={hourlyCost}
                      type="number"
                      // onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        onChangeHanlder({
                          ...settingItem,
                          key: 'hourlyCost',
                          value: parseFloat(e.target.value)
                        });
                      }}
                      disabled={disabled}
                      placeholder="HourlyCost"
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <input
                      name="hourlyRate"
                      value={hourlyRate}
                      type="number"
                      // onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        onChangeHanlder({
                          ...settingItem,
                          key: 'hourlyRate',
                          value: parseFloat(e.target.value)
                        });
                      }}
                      disabled={disabled}
                      placeholder="HourlyRate"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal-footer">
        {/* btn-gray-outline */}
        <Button className="btn-blue-outline mr-10" onClick={() => handleClose()}>
          Cancel
        </Button>
        {(!disabled) && (
          <Button className="btn-primary" onClick={() => saveHandler()}>
            Save
          </Button>
        )}
        {/* <Button className="btn-primary" onClick={() => saveHandler()}>
          Save
        </Button> */}
      </div>
    </div>
  );
};

export default ResourceTable;
