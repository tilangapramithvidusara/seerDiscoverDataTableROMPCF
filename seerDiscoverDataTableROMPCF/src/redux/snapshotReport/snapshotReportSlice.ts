import { createSlice, current } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ReportState } from '../../types/reducer.types';
import { snapshotAPIConstants } from '../../Constants/snapshotConstants';

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
  selectedSnapshotFromDB: null,
  showSaveParameters: false,
  showLoadedParameters: false,
  isLiveModeEnable: true,
  snapshotResourceModelDataParameters: null,
  resourceModelDataParameters: null,
  snapshotProjectTasktModelParameters: null,
  projectTasktModelParameters: null,

  // NEW STATES

  // new booleans
  isSnapshotLoading: false,
  isLive: true,
  isSnapshotEnable: false,
  doCalculation: true,
  showLiveBase: true,
  showLoadedSnapshotBase: false,
  showLivePametersNRates: true,
  showCurrentSavedPametersNRates: false,
  showLoadedSnapshotPametersNRates: false,

  // base data
  liveBase: null,
  snapshotBase: null,

  // parameters
  liveParameters: null,
  currentSavedParameters: null,
  currentChangingParameters: null,
  snapshotParameters: null,
  baseSnapshotParameters: null,

  // resources
  liveResources: null,
  currentSavedResources: null,
  currentChangingResources: null,
  snapshotResources: null,
  baseSnapshotResources: null,

  // projectTasks
  liveProjectTasks: null,
  currentSavedProjectTasks: null,
  currentChangingProjectTasks: null,
  snapshotProjectTasks: null,
  baseSnapshotProjectTasks: null,

  // snapshot
  loadedSnapshotId: null,
  loadedSnapshotDetails: null,
  latestChanges: {
    parameterChanged: false,
    resourceChanged: false,
    projectTaskChanged: false,
  },
  latestChangesTime: {
    parameterChangedTime: null,
    resourceChangedTime: null,
    projectTaskChangedTime: null,
  }
}

const snapshotSlice: any = createSlice({
  name: 'snapshot',
  initialState,
  reducers: {
    setStateSnapshot: (state, action) => {
      state.isSnapshotModeEnable = action.payload
    },
    setIsLiveModeEnable: (state, action) => {
      state.isLiveModeEnable = action.payload
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
      state.settingParameters = action.payload
      if (!state.showSaveParameters) {
        state.snapshotSettingParameters = action.payload;
      }
      
    },
    setSettingParameterAttributes: (state, action) => {
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      // const parameterValues = stateValue?.settingParameters?.formattedData;
      const parameterValues = stateValue?.snapshotSettingParameters?.formattedData;      
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };
        // // Update the array with the new object
        state.snapshotSettingParameters.formattedData = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setRecordId: (state, action) => {
      state.recordId = action.payload
    },
    setBaseJson: (state, action) => {
      state.baseJson = action.payload
    },
    setShowSaveParameters: (state, action) => {      
      state.showSaveParameters = action.payload
    },
    setShowLoadedParameters: (state, action) => {
      state.showLoadedParameters = action.payload
    },
    setResourceModelDataParameters: (state, action) => {
      state.resourceModelDataParameters = action.payload
      if (!state.showSaveParameters) {
        state.snapshotResourceModelDataParameters = action.payload;
      }
      
    },
    setResourceModelDataParameterAttributes: (state, action) => {
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      const parameterValues = stateValue?.snapshotResourceModelDataParameters
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };
        state.snapshotResourceModelDataParameters = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setProjectTasktModelParameters: (state, action) => {
      state.projectTasktModelParameters = action.payload
      if (!state.showSaveParameters) {
        state.snapshotProjectTasktModelParameters = action.payload;
      }
    },
    setProjectTasktModelParameterAttributes: (state, action) => {
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      const parameterValues = stateValue?.snapshotProjectTasktModelParameters
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };
        state.snapshotProjectTasktModelParameters = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setSelectedSnapshotFromDB: (state, action) => {
      if (action.payload) {
        const snapshot = state?.snapshotsList?.find((snapshotItem: {
          seer_rominportalsnapshotid: string,
          seer_name: string,
        }) => snapshotItem?.seer_rominportalsnapshotid == action.payload);
        state.selectedSnapshotFromDB = snapshot;
      } else {
        state.selectedSnapshotFromDB = null;
      }
      
    },


    // NEW REDUCERS

    // new booleans
    setIsSnapshotLoading: (state, action) => {
      state.isSnapshotLoading = action.payload
    },
    setIsLive: (state, action) => {
      state.isLive = action.payload
    },
    setIsSnapshotEnable: (state, action) => {
      state.isSnapshotEnable = action.payload
    },
    setDoCalculation: (state, action) => {      
      state.doCalculation = action.payload
    },
    setShowLiveBase: (state, action) => {
      state.showLiveBase = action.payload
    },
    setShowLoadedSnapshotBase: (state, action) => {
      state.showLoadedSnapshotBase = action.payload;
    },
    setShowLivePametersNRates: (state, action) => {
      state.showLivePametersNRates = action.payload
    },
    setShowCurrentSavedPametersNRates: (state, action) => {
      state.showCurrentSavedPametersNRates = action.payload
    },
    setShowLoadedSnapshotPametersNRates: (state, action) => {
      state.showLoadedSnapshotPametersNRates = action.payload
    },

    // base data
    setLiveBase: (state, action) => {
      state.liveBase = action.payload
    },
    // when retrive snapshot then can assign
    setSnapshotBase: (state, action) => {
      state.snapshotBase = action.payload
    },

    // parameters
    setLiveParameters: (state, action) => {
      state.liveParameters = action.payload;
    },
    setCurrentSavedParameters: (state, action) => {      
      state.currentSavedParameters = action.payload;
    },
    setInitiallyCurrentChangingParameters: (state, action) => {
      state.currentChangingParameters = action.payload;
    },
    setCurrentChangingParameters: (state, action) => {
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      const parameterValues = stateValue?.currentChangingParameters?.formattedData;
      
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };        
    
        // // Update the array with the new object
        state.currentChangingParameters.formattedData = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setSnapshotParameters: (state, action) => {
      state.snapshotParameters = action.payload;
    },

    //resources
    setLiveResources: (state, action) => {
      state.liveResources = action.payload;
    },
    setCurrentSavedResources: (state, action) => {      
      state.currentSavedResources = action.payload;
    },
    setInitiallyCurrentChangingResources: (state, action) => {      
      state.currentChangingResources = action.payload;
    },
    setCurrentChangingResources: (state, action) => {
      const {payload: {key, value}} = action;
      const stateValue = current(state)
      const parameterValues = stateValue?.currentChangingResources;
      
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);
      
      if (paramerterIndex !== -1) {
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: value, 
        };        
    
        // // Update the array with the new object
        state.currentChangingResources = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setSnapshotResources: (state, action) => {
      state.snapshotResources = action.payload;
    },

    // projectTask
    setLiveProjectTasks: (state, action) => {
      state.liveProjectTasks = action.payload;
    },
    setCurrentSavedProjectTasks: (state, action) => {
      state.currentSavedProjectTasks = action.payload;
    },
    setInitiallyCurrentChangingProjectTasks: (state, action) => {
      state.currentChangingProjectTasks = action.payload;
    },
    setCurrentChangingProjectTasks: (state, action) => {
      const {payload: {key, value, selectedValue, isDropDown}} = action;
      
      const stateValue = current(state)
      const parameterValues = stateValue?.currentChangingProjectTasks;
      
      const paramerterIndex = parameterValues?.findIndex((item: any) => item.name === action?.payload?.name);      
      if (paramerterIndex !== -1) {
        let resourceItem
        if (isDropDown)
          resourceItem = state?.currentSavedResources?.find((item: any) => item?.resourceId == selectedValue);
        // Use spread operator to create a new object with updated properties
        const updatedPrameter = { 
          ...parameterValues[paramerterIndex], 
          [`${key}`]: isDropDown ? {
            id: resourceItem?.resourceId,
            name: resourceItem?.name
          } : value, 
        };
        // // Update the array with the new object
        state.currentChangingProjectTasks = [
          ...parameterValues.slice(0, paramerterIndex),
          updatedPrameter,
          ...parameterValues.slice(paramerterIndex + 1),
        ];
      }
    },
    setSnapshotProjectTasks: (state, action) => {
      state.snapshotProjectTasks = action.payload;
    },

    // snapshot
    setLoadedSnapshotId: (state, action) => {
      state.loadedSnapshotId = action.payload
    },
    setLoadedSnapshotDetailsWhenSave: (state, action) => {
      state.loadedSnapshotDetails = action.payload
    },
    setLoadedSnapshotDetails: (state, action) => {
      if (action.payload) {
        const stateValue = current(state)
        console.log("state?.snapshotsList ==> ", stateValue.snapshotsList, action.payload)
        const snapshot = stateValue.snapshotsList?.find((snapshotItem: {
          seer_rominportalsnapshotid: string,
          seer_name: string,
        }) => snapshotItem?.seer_rominportalsnapshotid == action.payload);
        console.log('snapshot ===> ', snapshot);
        
        state.loadedSnapshotDetails = snapshot;
        console.log('snapshot?.[snapshotAPIConstants?.UPDATED_DATES] ', snapshot?.[snapshotAPIConstants?.UPDATED_DATES], JSON.parse(snapshot?.[snapshotAPIConstants?.UPDATED_DATES]));
        
        state.latestChangesTime = JSON.parse(snapshot?.[snapshotAPIConstants?.UPDATED_DATES])
      } else {
        state.loadedSnapshotDetails = null;
      }
    },
    setLatestChanges: (state, action) => {
      state.latestChanges = action.payload
    },
    setLatestChangesTime: (state, action) => {
      state.latestChanges = action.payload
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
  setShowSaveParameters,
  setShowLoadedParameters,
  setIsLiveModeEnable,
  setResourceModelDataParameters,
  setResourceModelDataParameterAttributes,
  setProjectTasktModelParameters,
  setProjectTasktModelParameterAttributes,
  setSelectedSnapshotFromDB,
  // new states
  setIsSnapshotLoading,
  setIsLive,
  setIsSnapshotEnable,
  setDoCalculation,
  setShowLiveBase,
  setShowLoadedSnapshotBase,
  setShowLivePametersNRates,
  setShowCurrentSavedPametersNRates,
  setShowLoadedSnapshotPametersNRates,
  setLiveBase,
  setSnapshotBase,
  setLiveParameters,
  setCurrentSavedParameters,
  setInitiallyCurrentChangingParameters,
  setCurrentChangingParameters,
  setSnapshotParameters,
  setLiveResources,
  setCurrentSavedResources,
  setInitiallyCurrentChangingResources,
  setCurrentChangingResources,
  setSnapshotResources,
  setLiveProjectTasks,
  setCurrentSavedProjectTasks,
  setInitiallyCurrentChangingProjectTasks,
  setCurrentChangingProjectTasks,
  setSnapshotProjectTasks,
  setLoadedSnapshotId,
  setLoadedSnapshotDetails,
  setLoadedSnapshotDetailsWhenSave,
  setLatestChanges,
  setLatestChangesTime,
} = snapshotSlice.actions;



export default snapshotSlice.reducer