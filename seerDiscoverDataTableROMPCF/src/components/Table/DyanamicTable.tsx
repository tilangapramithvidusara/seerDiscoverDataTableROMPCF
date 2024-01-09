import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  parameterSettingColumns,
  parameterBaseSettingColumns
} from '../../Constants/parametersSetting';
import {
  setSettingParameterAttributes,
  setSettingParameters,
  setStateSnapshot
} from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';
import { fteDropdown } from '../../Constants/dropdownConstants';
import {
  saveInitialSnapshotRecordAsync,
  saveSnapshotAsync
} from '../../redux/snapshotReport/snapshoAsync';
import FormDialog from '../../components/Form/index';
import { convertBase64ToJson, convertJsonToBase64 } from '../../Utils/commonFunc.utils';

const DyanamicTable = ({ handleClose }: { handleClose: any }) => {
  const dispatch = useDispatch();
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(parameterSettingColumns);
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);
  const snapshotSettingParameters = useSelector((state: any) => state?.snapshot?.snapshotSettingParameters || []);
  const [showSnapshotForm, setShowSnapshotForm] = useState(false);
  const [submitFormData, setSubmitFormData] = useState<any>();

  console.log('settingParameters', settingParameters, snapshotSettingParameters);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('Sentence changed:');
      dispatch(setStateSnapshot(true));
    }
  };

  const onChangeHanlder = useCallback(
    (info) => {
      dispatch(setSettingParameterAttributes(info));
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
      dispatch(setSettingParameters(info));
    },
    [dispatch]
  );

  // const saveHandler = useCallback((info: any) => {
  //   saveSnapshotAsync(info);
  //   setShowSnapshotForm(true);
  // }, [dispatch])

  const saveHandler = (info: any) => {
    // saveSnapshotAsync(info);
    setShowSnapshotForm(true);
  };

  useEffect(() => {
    if (isBaesline) {
      setColumns(parameterBaseSettingColumns);
    } else {
      setColumns(parameterSettingColumns);
    }
  }, [isBaesline]);


    const onSubmit = () => {
      if (submitFormData?.name && submitFormData?.description) {
          dispatch(saveInitialSnapshotRecordAsync({
            seerName: submitFormData?.name,
            baseData: convertJsonToBase64(baseJson), 
            snapshotData: convertJsonToBase64(snapshotSettingParameters),
            seerDescription: submitFormData?.description
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
          {settingParameters?.formattedData?.map((settingItem: Parameter, id: number) => {
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
                        >
                          {fteDropdown?.map((fteItem: any) => (
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
        <Button className="btn-primary mr-10" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button className="btn-primary" onClick={() => saveHandler(settingParameters)}>
          Save
        </Button>
      </div>
      {showSnapshotForm ? (
        <FormDialog
          handleClickOpen={true}
          handleSubmit={onSubmit}
          setSubmitFormData={setSubmitFormData}
          handleClose={onClose}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DyanamicTable;
