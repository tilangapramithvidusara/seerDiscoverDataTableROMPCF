import * as React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { parameterSettingColumns, parameterBaseSettingColumns } from '../../Constants/parametersSetting';
import { setSettingParameterAttributes, setSettingParameters, setStateSnapshot } from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';
import { fteDropdown } from '../../Constants/dropdownConstants';

const DyanamicTable = () => {
  const dispatch = useDispatch();  
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(parameterSettingColumns);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);

  console.log('settingParameters', settingParameters);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('Sentence changed:');
      dispatch(setStateSnapshot(true))
    }
  };

  const onChangeHanlder = useCallback((info) => {
    dispatch(setSettingParameterAttributes(info))
    if (info?.isDropDown) {
      dispatch(setStateSnapshot(true))
    }
    // example for checking
    // dispatch(setStateSnapshot(true))
  }, [dispatch]);

  const handleSetSettingParameters = useCallback((info) => {
    dispatch(setSettingParameters(info))
  }, [dispatch])

  useEffect(() => {
    if (isBaesline) {
      setColumns(parameterBaseSettingColumns)
    } else {
      setColumns(parameterSettingColumns)
    }
  }, [isBaesline])

  return (
    <div className="containerManualTable">
      <table>
        <thead>
          <tr>
            {columns?.map(({header, accessorKey}, index: number) => {
              return (
                // <div>
                  <th key={`${isBaesline ? 'baseline' : 'setting'}${index}`}>{header}</th>
                // </div>
              )
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
                            onChangeHanlder(
                              {
                                ...settingItem,
                                key: 'typeValueCurrent',
                                value: e.target.value,
                                isDropDown: true,
                              }
                            )
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
                      <div>
                        {switchValue}
                      </div>
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
                            onChangeHanlder(
                              {
                                ...settingItem,
                                key: 'currentValue',
                                value: e.target.value,
                                isDropDown: true,
                              }
                            )
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
                          onKeyDown={handleKeyDown}
                          onChange={(e) => {

                            onChangeHanlder(
                              {
                                ...settingItem,
                                key: 'currentValue',
                                value: e.target.value
                              }
                            )
                          }}
                          placeholder="Current Value"
                        />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            )})}
        </tbody>
      </table>
      <div className='modal-footer'>
        <Button className='btn-gray-outline mr-10'>Cancel</Button>
        <Button className='btn-primary'>Save</Button>
      </div>
    </div>
  );

}

export default DyanamicTable
