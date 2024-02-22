import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  parameterSettingColumns,
  parameterBaseSettingColumns,
  projectTaskColumn
} from '../../Constants/parametersSetting';
import {
  setProjectTasktModelParameters,
  setProjectTasktModelParameterAttributes,
  setShowSaveParameters,
  setStateSnapshot,
  setCurrentChangingProjectTasks,
  setCurrentSavedParameters,
  setCurrentSavedResources,
  setCurrentSavedProjectTasks
} from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';
import { fteDropdown } from '../../Constants/dropdownConstants';
import {
  saveInitialSnapshotRecordAsync,
  saveSnapshotAsync
} from '../../redux/snapshotReport/snapshoAsync';
import { convertBase64ToJson, convertJsonToBase64 } from '../../Utils/commonFunc.utils';

const ProjectTaskTable = ({ handleClose, tableNumber, arrayGeneratorHandler }: { handleClose: any, tableNumber?: number, arrayGeneratorHandler: any }) => {
  const dispatch = useDispatch();
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(projectTaskColumn);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  const [showSnapshotForm, setShowSnapshotForm] = useState(false);
  const [submitFormData, setSubmitFormData] = useState<any>();
  const initialFetchData = useSelector((state: any) => state.report.initialFetchData);
  const snapshotBase = useSelector((state: any) => state?.snapshot?.snapshotBase);
  let currentSavedResources = useSelector((state: any) => state?.snapshot?.currentSavedResources);
  const currentChangingResources = useSelector((state: any) => state?.snapshot?.currentChangingResources);
  const currentSavedParameters = useSelector((state: any) => state?.snapshot?.currentSavedParameters);
  const currentChangingParameters = useSelector((state: any) => state?.snapshot?.currentChangingParameters);
  const currentSavedProjectTasks = useSelector((state: any) => state?.snapshot?.currentSavedProjectTasks)
  const currentChangingProjectTasks = useSelector((state: any) => state?.snapshot?.currentChangingProjectTasks)


  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(setStateSnapshot(true));
    }
  };


  const onChangeHanlder = useCallback(
    (info) => {
      dispatch(setCurrentChangingProjectTasks(info));
      // if (info?.isDropDown) {
      //   dispatch(setStateSnapshot(true));
      // }
      // example for checking
      // dispatch(setStateSnapshot(true))
    },
    [dispatch]
  );

  // call this when retrive success
  const handleSetSettingParameters = useCallback(
    (info) => {
      dispatch(setProjectTasktModelParameters(info));
    },
    [dispatch]
  );

  // const saveHandler = useCallback((info: any) => {
  //   saveSnapshotAsync(info);
  //   setShowSnapshotForm(true);
  // }, [dispatch])

  const saveHandler = () => {
    // saveSnapshotAsync(info);
    setShowSnapshotForm(true);
    dispatch(setShowSaveParameters(true))
    dispatch(setStateSnapshot(true))
    dispatch(setCurrentSavedParameters(currentChangingParameters))
    dispatch(setCurrentSavedResources(currentChangingResources))
    dispatch(setCurrentSavedProjectTasks(currentChangingProjectTasks))
    arrayGeneratorHandler(false, {...currentChangingParameters, base: snapshotBase ? snapshotBase : initialFetchData, currentSavedResources: currentChangingResources, currentSavedProjectTasks: currentChangingProjectTasks}, 'snapshot')
  };

  // useEffect(() => {
  //   if (isBaesline) {
  //     setColumns(parameterBaseSettingColumns);
  //   } else {
  //     setColumns(parameterSettingColumns);
  //   }
  // }, [isBaesline]);

  const onSubmit = () => {
    if (submitFormData?.name && submitFormData?.description) {
        dispatch(saveInitialSnapshotRecordAsync({
          seerName: submitFormData?.name,
          baseData: convertJsonToBase64(baseJson), 
          snapshotData: convertJsonToBase64(snapshotSettingParameters),
          seerDescription: submitFormData?.description,
        }))
      }
}

const onClose = () => {
  setShowSnapshotForm(false);
  setSubmitFormData({});
};

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
          {currentChangingProjectTasks?.map((settingItem: any, id: number) => {
            const {
              name,
              seerResource, // id, name
              seerResourceSecondary,
              seerResourceSplit,
            } = settingItem;
            
            const secondaryDropDown = [{
              resourceId: '',
              name: ''
            }, ...currentSavedResources];
            
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <div>
                    <div>
                      {/* {seerResource?.id + "" + seerResource?.name} */}
                      <select
                        value={seerResource?.id || ''}
                        onChange={(e) => {                          
                          // handleRoleChange(row.id, e.target.value)
                          onChangeHanlder({
                            ...settingItem,
                            key: 'seerResource',
                            selectedValue: e.target.value,
                            isDropDown: true
                          });
                        }}
                      >
                        {currentSavedResources?.map((resourceItem: {
                          resourceId: string,
                          name: string
                        }) => (
                          <option value={resourceItem?.resourceId}>{resourceItem?.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>
                      <select
                        value={seerResourceSecondary?.id || ''}
                        onChange={(e) => {                          
                          // handleRoleChange(row.id, e.target.value)
                          onChangeHanlder({
                            ...settingItem,
                            key: 'seerResourceSecondary',
                            selectedValue: e.target.value,
                            isDropDown: true
                          });
                        }}
                      >
                        {secondaryDropDown?.map((resourceItem: {
                          resourceId: string,
                          name: string
                        }) => (
                          <option value={resourceItem?.resourceId}>{resourceItem?.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                  <div>
                    <input
                      name="Split"
                      value={seerResourceSplit}
                      type="number"
                      // onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        let value = parseFloat(e.target.value);
                        // Ensure the value is between 0 and 100
                        if (value < 0) {
                          value = 0;
                        } else if (value > 100) {
                          value = 100;
                        }

                        // Update the state with the sanitized value
                        onChangeHanlder({
                          ...settingItem,
                          key: 'seerResourceSplit',
                          value: value,
                          isDropdown: false,
                        });
                      }}
                      placeholder="Split"
                    />
                  </div>
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
        <Button className="btn-primary" onClick={() => saveHandler()}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ProjectTaskTable;
