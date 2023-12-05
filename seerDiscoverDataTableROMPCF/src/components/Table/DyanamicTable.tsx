import * as React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { parameterSettingColumns, parameterBaseSettingColumns } from '../../Constants/parametersSetting';
import { setSettingParameters } from '../../redux/snapshotReport/snapshotReportSlice';

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
]

const DyanamicTable = () => {
  const dispatch = useDispatch();  

  // const columns = [
  //   { header: 'ID', accessorKey: 'id' },
  //   { header: 'Name', accessorKey: 'name' },
  //   { header: 'Age', accessorKey: 'age' },
  // ];

  const [employeeData, setEmployeeData] = useState(data)
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(parameterSettingColumns);
  const settingParameters = useSelector((state: any) => state?.snapshot?.settingParameters || []);

  const onChangeInput = (e: any, id: number) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }

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
          {data.map(({ id, name, age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e, id)}
                  placeholder="Type Name"
                />
              </td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default DyanamicTable
