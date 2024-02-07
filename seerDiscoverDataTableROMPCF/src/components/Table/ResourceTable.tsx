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
  setStateSnapshot
} from '../../redux/snapshotReport/snapshotReportSlice';
import { Parameter } from '../../Utils/setting.values.convertor.utils';
import { fteDropdown } from '../../Constants/dropdownConstants';
import {
  saveInitialSnapshotRecordAsync,
  saveSnapshotAsync
} from '../../redux/snapshotReport/snapshoAsync';
import { convertBase64ToJson, convertJsonToBase64 } from '../../Utils/commonFunc.utils';

const ResourceTable = ({ handleClose, tableNumber }: { handleClose: any, tableNumber?: number }) => {
  const dispatch = useDispatch();
  const baseJson = useSelector((state: any) => state?.snapshot?.baseJson)
  const [isBaesline, setIsBaseline] = useState(false);
  const [columns, setColumns] = useState(resourceParameterColumn);
  const resourceModelDataParameters = useSelector((state: any) => state?.snapshot?.resourceModelDataParameters || []);
  const snapshotResourceModelDataParameters = useSelector((state: any) => state?.snapshot?.snapshotResourceModelDataParameters || []);
  const [showSnapshotForm, setShowSnapshotForm] = useState(false);
  const [submitFormData, setSubmitFormData] = useState<any>();

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log('Sentence changed:');
      dispatch(setStateSnapshot(true));
    }
  };


  const onChangeHanlder = useCallback(
    (info) => {
      dispatch(setResourceModelDataParameterAttributes(info));
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
      dispatch(setResourceModelDataParameters(info));
    },
    [dispatch]
  );

  // const saveHandler = useCallback((info: any) => {
  //   saveSnapshotAsync(info);
  //   setShowSnapshotForm(true);
  // }, [dispatch])

  const saveHandler = () => {
    // saveSnapshotAsync(info);
    console.log('2222222222111 ===> ');
    
    setShowSnapshotForm(true);
    console.log('22222222221112222 ===> ');
    dispatch(setShowSaveParameters(true))
    dispatch(setStateSnapshot(true))
    console.log('22222222221113333 ===> ');
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
          snapshotData: convertJsonToBase64(snapshotResourceModelDataParameters),
          seerDescription: submitFormData?.description
        }))
      }
}

const onClose = () => {
  setShowSnapshotForm(false);
  setSubmitFormData({});
};

const objct = {
  "resourceId": "83b5886a-a5dd-ec11-bb3c-000d3a7f3b87",
  "name": "Cloud Deployment Manager",
  "hourlyRate": 125.0000000000,
  "hourlyCost": 50.0000000000
}


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
          {snapshotResourceModelDataParameters?.map((settingItem: any, id: number) => {            
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
                      placeholder="HourlyRate"
                    />
                  </div>
                </td>
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
                      placeholder="HourlyCost"
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
        <Button className="btn-primary mr-10" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button className="btn-primary" onClick={() => saveHandler()}>
          Save
        </Button>
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

export default ResourceTable;
