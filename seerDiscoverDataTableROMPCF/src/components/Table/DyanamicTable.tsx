import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  parameterSettingColumns,
  parameterBaseSettingColumns
} from '../../Constants/parametersSetting';
import {
  setSettingParameterAttributes,
} from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';
import { fteDropdown } from '../../Constants/dropdownConstants';

const DyanamicTable = ({ handleClose }: { handleClose: any }) => {
  const dispatch = useDispatch();
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(parameterSettingColumns);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);

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

  // const saveHandler = useCallback((info: any) => {
  //   saveSnapshotAsync(info);
  //   setShowSnapshotForm(true);
  // }, [dispatch])

  useEffect(() => {
    if (isBaesline) {
      setColumns(parameterBaseSettingColumns);
    } else {
      setColumns(parameterSettingColumns);
    }
  }, [isBaesline]);

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
            let type = settingItem?.type;
            let currentValueType = settingItem?.currentValueType;
            let typeValueCurrent = settingItem?.typeValueCurrent;
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
        {/* <Button className="btn-primary" onClick={() => saveHandler(settingParameters)}>
          Save
        </Button> */}
        <Button className="btn-primary">
          Save
        </Button>
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
