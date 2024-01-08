import { createSlice, current } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ReportState } from '../../types/reducer.types';

const parameterModel = [
  {
      "account": {
          "id": "b388d7ee-bd7e-ec11-8d21-6045bd0e691e",
          "name": "Seer BC"
      },
      "accountName": {
          "attributeLogicalName": "name",
          "entityLogicalName": "account",
          "value": "SMB ROM"
      },
      "changeManager": 0.0000000000,
      "changeManagerType": 100000001,
      "cloudDeploymentManagement": 0.0000000000,
      "cloudDeploymentManagementType": 100000001,
      "collateRequirment": 0.0000000000,
      "collateRequirmentType": 100000001,
      "conferenceRoomPilot": 0.0000000000,
      "conferenceRoomPilotType": 100000001,
      "currency": {
          "id": "4171fc12-5ec6-eb11-8235-000d3ad5fbfe",
          "name": "British Pound"
      },
      "currencysymbol": {
          "attributeLogicalName": "currencysymbol",
          "entityLogicalName": "transactioncurrency",
          "value": "£"
      },
      "isocurrencycode": {
          "attributeLogicalName": "isocurrencycode",
          "entityLogicalName": "transactioncurrency",
          "value": "GBP"
      },
      "dataMigration": 10.0000000000,
      "dataMigrationType": 100000001,
      "deployProd": 5.0000000000,
      "deployProdType": 100000001,
      "deployUat": 10.0000000000,
      "deployUatType": 100000001,
      "designReview": 20.0000000000,
      "designReviewType": 100000001,
      "endUserTraining": 5.0000000000,
      "endUserTrainingUsers": 10.0000000000,
      "hourlyRate": {
          "value": 100.0000000000
      },
      "hoursPerday": 8.0000000000,
      "parameterSetName": "Seer BC",
      "parametersId": "bc26a6f3-bd7e-ec11-8d21-0022483f6a81",
      "licencePriceSheet": {
          "id": "e69b724b-1809-ee11-8f6e-6045bdd2c97f",
          "name": "Seer BC June 2023"
      },
      "postGoLiveSupport": 20.0000000000,
      "postGoLiveSupportType": 100000001,
      "projectManagement": 20.0000000000,
      "projectManagementType": 100000001,
      "programmeManager": 0.0000000000,
      "programmeManagerType": 100000001,
      "projectSupport": 0.0000000000,
      "projectSupportType": 100000001,
      "reporting": 10.0000000000,
      "reportingType": 100000001,
      "riskFormula": "=IF($G$43=0,0%,IF($G$43>=70,5%,IF(AND($G$43>=50,$G$43<70),10%,IF(AND($G$43>=30,$G$43<50),15%,IF($G$43<30,20%)))))",
      "romComplexityHigh": 20,
      "romComplexityLow": 10,
      "romComplexityMedium": 15,
      "romComplexityNone": 0,
      "solutionArchitecture": 1.0000000000,
      "solutionArchitectureType": 100000001,
      "supportHandOver": 1.0000000000,
      "supportHandOverType": 100000001,
      "technicalArchitect": 0.0000000000,
      "technicalArchitectType": 100000001,
      "testing": 10.0000000000,
      "testingType": 100000001,
      "trainTheTrainer": 25.0000000000,
      "trainTheTrainerType": 100000001,
      "uatSupport": 25.0000000000,
      "uatSupportType": 100000001,
      "totalLicenceCount": 101
  }
]

const initialState: any = {
  isSnapshotModeEnable: false,
  settingRated: null,
  currentEditingData: null,
  hasLoadedData: false,
  loadedSnapshotData: null,
  isLoadingSnapshot: false,
  snapshotsList: null,
  selectedSnapshot: null,
  baseJson: null,
  snapshotSettingParameters: null,
  settingParameters: null,
  recordId: null,
}

const snapshotSlice: any = createSlice({
  name: 'snapshot',
  initialState,
  reducers: {
    setStateSnapshot: (state, action) => {
      state.isSnapshotModeEnable = action.payload
    },
    setSnapshotList: (state, action) => {
      state.snapshotsList = action.payload
    },
    setSnapshotLoading: (state, action) => {
      state.isLoadingSnapshot = action.payload
    },
    setSelectSnapshot: (state, action) => {
      state.selectedSnapshot = action.payload
    },
    setCurrentSnapshot: (state, action) => {
      state.currentEditingData = action.payload
    },
    setLoadedSnapshot: (state, action) => {
      state.loadedSnapshotData = action.payload
    },
    setHasLoadedData: (state, action) => {
      state.hasLoadedData = action.payload
    },
    setSettingParameters: (state, action) => {
      console.log('lloo ===--0 => ', action);
      // const userIndex = state.settingParameters.findIndex((item: any) => item.name === action?.payload?.name);
      // if (userIndex !== -1) {
      //   // Use spread operator to create a new object with updated properties
      //   // const updatedUser = { ...state.settingParameters[userIndex], name: newName, role: newRole };
    
      //   // // Update the array with the new object
      //   // state.settingParameters = [
      //   //   ...state.settingParameters.slice(0, userIndex),
      //   //   updatedUser,
      //   //   ...state.settingParameters.slice(userIndex + 1),
      //   // ];
    
      //   // console.log('User edited successfully:', updatedUser);
      // }
    
      state.settingParameters = action.payload
      state.snapshotSettingParameters = action.payload;
    },
    setSettingParameterAttributes: (state, action) => {
      console.log('qaqa lloo ===--02 => ', action);
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      // const parameterValues = stateValue?.settingParameters?.formattedData;
      const parameterValues = stateValue?.snapshotSettingParameters?.formattedData;
      console.log('ee',stateValue?.settingParameters);
      
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      console.log('paramerterIndex', paramerterIndex);
      
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };

        console.log('updatedPrameter => ', updatedPrameter);
        
    
        // // Update the array with the new object
        state.settingParameters.formattedData = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
    
        console.log('User edited successfully:', state.settingParameters);
      }
    },
    setRecordId: (state, action) => {
      state.recordId = action.payload
    },
    setBaseJson: (state, action) => {
      state.baseJson = action.payload
    }
  }
  
});

export const {
  setStateSnapshot,
  setSnapshotLoading,
  setSelectSnapshot,
  setCurrentSnapshot,
  setLoadedSnapshot,
  setSnapshotList,
  setSettingParameters,
  setSettingParameterAttributes,
  setRecordId,
  setBaseJson,
} = snapshotSlice.actions;



export default snapshotSlice.reducer