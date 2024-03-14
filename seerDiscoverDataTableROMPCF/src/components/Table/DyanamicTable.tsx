import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  parameterSettingColumns,
  parameterBaseSettingColumns
} from '../../Constants/parametersSetting';
import {
  setCurrentChangingParameters,
  setCurrentChangingResources,
  setCurrentSavedParameters,
  setCurrentSavedProjectTasks,
  setCurrentSavedResources,
  setLatestChanges,
  setShowSaveParameters,
  setSnapshotSaveLoacalyOneTime,
  setStateSnapshot
} from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';

const DyanamicTable = ({ handleClose, tableNumber, arrayGeneratorHandler }: { handleClose: any, tableNumber?: number, arrayGeneratorHandler?: any }) => {
  const dispatch = useDispatch();
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(parameterSettingColumns);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const [showSnapshotForm, setShowSnapshotForm] = useState(false);
  const finalizeSnapshot = useSelector((state: any) => state?.snapshot?.finalizeSnapshot);

  // NEW STATE
  const currentChangingParameters = useSelector((state: any) => state?.snapshot?.currentChangingParameters);
  const currentChangingResources = useSelector((state: any) => state?.snapshot?.currentChangingResources);
  const currentChangingProjectTasks = useSelector((state: any) => state?.snapshot?.currentChangingProjectTasks);
  const latestChanges = useSelector((state: any) => state?.snapshot?.latestChanges)
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  const initialFetchData = useSelector((state: any) => state.report.initialFetchData);
  const loadedSnapshotId = useSelector((state: any) => state?.snapshot?.loadedSnapshotId);

  const [disabled, setIsDisabled] = useState((loadedSnapshotId && (finalizeSnapshot?.seer_rominportalsnapshotid == loadedSnapshotId)))

  const onChangeHanlder = useCallback(
    (info) => {
      dispatch(setCurrentChangingParameters(info));
      dispatch(setLatestChanges({
        ...latestChanges,
        parameterChanged: true,
      }));
    },
    [dispatch]
  );

  const saveHandler = (info: any) => {
    // saveSnapshotAsync(info);
    setShowSnapshotForm(true);
    dispatch(setShowSaveParameters(true))
    dispatch(setStateSnapshot(true))
    dispatch(setCurrentSavedParameters(currentChangingParameters))
    // dispatch(setCurrentChangingResources(currentChangingResources))
    dispatch(setCurrentSavedResources(currentChangingResources))
    dispatch(setCurrentSavedProjectTasks(currentChangingProjectTasks))
    dispatch(setLatestChanges({
      ...latestChanges,
      parameterChanged: true,
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
    if (isBaesline) {
      setColumns(parameterBaseSettingColumns);
    } else {
      setColumns(parameterSettingColumns);
    }
  }, [isBaesline]);

  useEffect(() => {
    setIsDisabled((loadedSnapshotId && (finalizeSnapshot?.seer_rominportalsnapshotid == loadedSnapshotId)))
  }, [loadedSnapshotId, finalizeSnapshot?.seer_rominportalsnapshotid])

  return (
    <div className="containerManualTable">
      <table>
        <thead>
          <tr>
            {columns?.map(({ header, accessorKey }, index: number) => {
              return (
                // <div>
                <th key={`${isBaesline ? 'baseline' : 'setting'}${index}`}>{header}</th>
                // </div>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {
          // snapshotSettingParameters
          currentChangingParameters?.formattedData?.map((settingItem: Parameter, id: number) => {            
            let name = settingItem?.name;
            let switchValue = settingItem?.switch;
            let currentValue = settingItem?.currentValue;
            let baslineValue = settingItem?.baslineValue;
            let type = settingItem?.type;
            let dropdownValues = settingItem?.dropdownValues;
            let currentValueType = settingItem?.currentValueType;
            let typeValueCurrent = settingItem?.typeValueCurrent;
            let typeValueBasline = settingItem?.typeValueBasline;
            let currentValueDropdownValues = settingItem?.currentValueDropdownValues;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <div>
                    {type == 'dropdown' ? (
                      <div>
                        <select
                          value={typeValueCurrent || ''}
                          onChange={(e) => {
                            // handleRoleChange(row.id, e.target.value)
                            onChangeHanlder({
                              ...settingItem,
                              key: 'typeValueCurrent',
                              value: e.target.value,
                              isDropDown: true
                            });
                          }}
                          disabled={disabled}
                        >
                          {dropdownValues?.map((fteItem: any) => (
                            <option value={fteItem?.value}>{fteItem?.label}</option>
                          ))}
                          {/* <option value="Admin">Admin</option>
                          <option value="User">User</option>
                          <option value="Guest">Guest</option> */}
                        </select>
                      </div>
                    ) : (
                      <div>{switchValue}</div>
                    )}
                  </div>
                </td>
                <td>
                  <div>
                    {currentValueType == 'dropdown' ? (
                      <div>
                        <select
                          value={currentValue}
                          onChange={(e) => {
                            // handleRoleChange(row.id, e.target.value)
                            onChangeHanlder({
                              ...settingItem,
                              key: 'currentValue',
                              value: e.target.value,
                              isDropDown: true
                            });
                          }}
                          disabled={disabled}
                        >
                          {currentValueDropdownValues?.map((currentItem: any) => (
                            <option value={currentItem?.value}>{currentItem?.label}</option>
                          ))}
                          {/* <option value="Admin">Admin</option>
                          <option value="User">User</option>
                          <option value="Guest">Guest</option> */}
                        </select>
                      </div>
                    ) : (
                      <div>
                        {/* {currentValue} */}
                        <input
                          name="currentValue"
                          value={currentValue}
                          type="text"
                          // onKeyDown={handleKeyDown}
                          onChange={(e) => {
                            onChangeHanlder({
                              ...settingItem,
                              key: 'currentValue',
                              value: e.target.value
                            });
                          }}
                          placeholder="Current Value"
                          disabled={disabled}
                        />
                      </div>
                    )}
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
          <Button className="btn-primary" onClick={() => saveHandler(settingParameters)}>
            Save
          </Button>
        )}
        {/* <Button className="btn-primary" onClick={() => saveHandler(settingParameters)}>
          Save
        </Button> */}
        {/* <Button className="btn-primary">
          Save
        </Button> */}
      </div>
      {/* {showSnapshotForm ? (
        <FormDialog
          handleClickOpen={true}
          handleSubmit={onSubmit}
          setSubmitFormData={setSubmitFormData}
          handleClose={onClose}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default DyanamicTable;
