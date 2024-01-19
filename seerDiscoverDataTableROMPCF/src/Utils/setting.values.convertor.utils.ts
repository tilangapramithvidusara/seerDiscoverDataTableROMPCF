import { currencyDropdown, fteDropdown } from "../Constants/dropdownConstants";

interface ParameterObject {
  hoursPerday?: number;
  hourlyRate?: {
    value: number;
  };
  isocurrencycode?: {
    value: string;
  };
  // Add other properties as needed based on your application
}

export interface Parameter {
  name: string;
  switch: string | null;
  currentValue: string | number;
  baslineValue: string | number | null;
  type: 'dropdown' | 'string' | null;
  dropdownValues: string[]; // Add actual type for dropdown values
  currentValueType?: string | null;
  typeValueCurrent?: string | null;
  typeValueBasline?: string | null;
  currentValueDropdownValues?: string[];
  colorName?: string | null;
  colorSwitch?: string | null;
  colorCurrentValue?: string | null;
  colorCurrentValueBorder?: string | null;
}


export const parameterModelConvertToTableJson = (parameterModel: any) => {
  let parameterObject = parameterModel[0];
  parameterObject = {
    ...parameterObject,
    changeManagerCurrent: parameterObject?.changeManager,
    changeManagerTypeCurrent: parameterObject?.changeManagerType,
    cloudDeploymentManagementCurrent: parameterObject?.cloudDeploymentManagement,
    cloudDeploymentManagementTypeCurrent: parameterObject?.cloudDeploymentManagementType,
    collateRequirmentCurrent: parameterObject?.collateRequirment,
    collateRequirmentTypeCurrent: parameterObject?.collateRequirmentType,
    conferenceRoomPilotCurrent: parameterObject?.conferenceRoomPilot,
    conferenceRoomPilotTypeCurrent: parameterObject?.conferenceRoomPilotType,
    isocurrencycodeCurrent: parameterObject?.isocurrencycode?.value,
    dataMigrationCurrent: parameterObject?.dataMigration,
    dataMigrationTypeCurrent: parameterObject?.dataMigrationType,
    deployProdCurrent: parameterObject?.deployProd,
    deployProdTypeCurrent: parameterObject?.deployProdType,
    deployUatCurrent: parameterObject?.deployUat,
    deployUatTypeCurrent: parameterObject?.deployUatType,
    designReviewCurrent: parameterObject?.designReview,
    designReviewTypeCurrent: parameterObject?.designReviewType,
    endUserTrainingCurrent: parameterObject?.endUserTraining,
    endUserTrainingUsersCurrent: parameterObject?.endUserTrainingUsers,
    hourlyRateCurrent: parameterObject?.hourlyRate?.value,
    hoursPerdayCurrent: parameterObject?.hoursPerday,
    postGoLiveSupportCurrent: parameterObject?.postGoLiveSupport,
    postGoLiveSupportTypeCurrent: parameterObject?.postGoLiveSupportType,
  }

  const formattedData: Parameter[] = [
    { // NOT FINISH YET
      name: 'FTE Base Calculation',
      switch: '%',
      currentValue: 10/100,
      baslineValue: '',
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#E6BB27',
      colorSwitch: '#E6BB27',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Hours Per Day',
      switch: null,
      currentValue: parameterObject?.hoursPerday,
      baslineValue: parameterObject?.hoursPerday,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Hourly Rate',
      switch: null,
      currentValue: parameterObject?.hourlyRate?.value,
      baslineValue: parameterObject?.hourlyRate?.value,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Currency',
      switch: '%',
      currentValue: parameterObject?.isocurrencycode ? parameterObject.isocurrencycode?.value : 'GBP',
      baslineValue: parameterObject?.isocurrencycode ? parameterObject.isocurrencycode?.value : 'GBP',
      currentValueType: 'dropdown', // dropdown | string | null
      currentValueDropdownValues: currencyDropdown, // add currency mapping
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorSwitch: '#444444',
      colorCurrentValue: '#008FB5'
    },
    { // NOT FINISH YET = Total license count
      name: 'Users',
      switch: null,
      currentValue: parameterObject?.totalLicenceCount,
      baslineValue: parameterObject?.totalLicenceCount,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'High',
      switch: '%',
      currentValue: parameterObject?.romComplexityHigh,
      baslineValue: parameterObject?.romComplexityHigh,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#444444',
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Medium',
      switch: '%',
      currentValue: parameterObject?.romComplexityMedium,
      baslineValue: parameterObject?.romComplexityMedium,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#444444',
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Low',
      switch: '%',
      currentValue: parameterObject?.romComplexityLow,
      baslineValue: parameterObject?.romComplexityLow,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#444444',
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'None',
      switch: '%',
      currentValue: parameterObject?.romComplexityNone,
      baslineValue: parameterObject?.romComplexityNone,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#444444',
      colorSwitch: '#444444',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Documentation',
      switch: null,
      currentValue: parameterObject?.collateRequirment,
      baslineValue: parameterObject?.collateRequirment,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.collateRequirmentType,
      typeValueBasline: parameterObject?.collateRequirmentType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'

    },
    {
      name: 'Design Review',
      switch: null,
      currentValue: parameterObject?.designReview,
      baslineValue: parameterObject?.designReview,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.designReviewType,
      typeValueBasline: parameterObject?.designReviewType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Reporting',
      switch: null,
      currentValue: parameterObject?.reporting,
      baslineValue: parameterObject?.reporting,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.reportingType,
      typeValueBasline: parameterObject?.reportingType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Data Migration',
      switch: null,
      currentValue: parameterObject?.dataMigration,
      baslineValue: parameterObject?.dataMigration,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.dataMigrationType,
      typeValueBasline: parameterObject?.dataMigrationType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'CRP',
      switch: null,
      currentValue: parameterObject?.conferenceRoomPilot,
      baslineValue: parameterObject?.conferenceRoomPilot,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.conferenceRoomPilotType,
      typeValueBasline: parameterObject?.conferenceRoomPilotType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Testing',
      switch: null,
      currentValue: parameterObject?.testing,
      baslineValue: parameterObject?.testing,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.testingType,
      typeValueBasline: parameterObject?.testingType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Train-The-Trainer',
      switch: null,
      currentValue: parameterObject?.trainTheTrainer,
      baslineValue: parameterObject?.trainTheTrainer,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.trainTheTrainerType,
      typeValueBasline: parameterObject?.trainTheTrainerType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'UAT Environment Preparation',
      switch: null,
      currentValue: parameterObject?.deployUat,
      baslineValue: parameterObject?.deployUat,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.deployUatType,
      typeValueBasline: parameterObject?.deployUatType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'PROD Environment Preparation',
      switch: null,
      currentValue: parameterObject?.deployProd,
      baslineValue: parameterObject?.deployProd,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.deployProdType,
      typeValueBasline: parameterObject?.deployProdType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'UAT Support',
      switch: null,
      currentValue: parameterObject?.uatSupport,
      baslineValue: parameterObject?.uatSupport,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.uatSupportType,
      typeValueBasline: parameterObject?.uatSupportType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Support Handover',
      switch: null,
      currentValue: parameterObject?.supportHandOver,
      baslineValue: parameterObject?.supportHandOver,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.supportHandOverType,
      typeValueBasline: parameterObject?.supportHandOverType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Post Go-Live Support',
      switch: null,
      currentValue: parameterObject?.postGoLiveSupport,
      baslineValue: parameterObject?.postGoLiveSupport,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.postGoLiveSupportType,
      typeValueBasline: parameterObject?.postGoLiveSupportType,
      dropdownValues: fteDropdown,
      // "endUserTraining": 5.0000000000,
      // "endUserTrainingUsers": 10.0000000000,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Project Manager',
      switch: null,
      currentValue: parameterObject?.projectManagement,
      baslineValue: parameterObject?.projectManagement,
      type: 'dropdown', // dropdown | string | null
      typeValueCurrent: parameterObject?.projectManagementType,
      typeValueBasline: parameterObject?.projectManagementType,
      dropdownValues: fteDropdown,
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Training Hours',
      switch: null,
      currentValue: parameterObject?.endUserTraining,
      baslineValue: parameterObject?.endUserTraining,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#E6BB27',
      colorSwitch: '#008FB5',
      colorCurrentValueBorder: '#007FFF'
    },
    {
      name: 'Training Users',
      switch: null,
      currentValue: parameterObject?.endUserTrainingUsers,
      baslineValue: parameterObject?.endUserTrainingUsers,
      type: null, // dropdown | string | null
      dropdownValues: [],
      colorName:'#E6BB27',
      colorSwitch: '#007FFF',
      colorCurrentValueBorder: '#007FFF'
    },
  ];
  return {formattedData, parameterObject}
}

export const tableJsonConvertToparameterModel = (formattedData: Parameter[], currentParameterModel: any) => {
  let parameterObject = currentParameterModel[0];
  parameterObject = {
    ...parameterObject,
    changeManager: parameterObject?.changeManager,
    changeManagerType: parameterObject?.changeManagerType,
    cloudDeploymentManagement: parameterObject?.cloudDeploymentManagement,
    cloudDeploymentManagementType: parameterObject?.cloudDeploymentManagementType,
    collateRequirment: parameterObject?.collateRequirment,
    collateRequirmentType: parameterObject?.collateRequirmentType,
    conferenceRoomPilot: parameterObject?.conferenceRoomPilot,
    conferenceRoomPilotType: parameterObject?.conferenceRoomPilotType,
    isocurrencycode: parameterObject?.isocurrencycode?.value,
    dataMigration: parameterObject?.dataMigration,
    dataMigrationType: parameterObject?.dataMigrationType,
    deployProd: parameterObject?.deployProd,
    deployProdType: parameterObject?.deployProdType,
    deployUat: parameterObject?.deployUat,
    deployUatType: parameterObject?.deployUatType,
    designReview: parameterObject?.designReview,
    designReviewType: parameterObject?.designReviewType,
    endUserTraining: parameterObject?.endUserTraining,
    endUserTrainingUsers: parameterObject?.endUserTrainingUsers,
    hourlyRate: parameterObject?.hourlyRate?.value,
    hoursPerday: parameterObject?.hoursPerday,
    postGoLiveSupport: parameterObject?.postGoLiveSupport,
    postGoLiveSupportType: parameterObject?.postGoLiveSupportType,
  }
}


export const checkTypeParseInt = (value: any) => {
  if (typeof value == 'string') {
    return parseInt(value)
  }
  return value
}