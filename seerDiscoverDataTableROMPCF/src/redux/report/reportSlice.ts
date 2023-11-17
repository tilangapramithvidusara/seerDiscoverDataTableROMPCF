import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ReportState {
  initialFetchData: object | null,
  error: string | null,
  loading: boolean,
  analysisAndDesign: object | null,
  imageUrl: any,
  currency: string,
  estimateAverageRateStoreData: {
    analysisAndDesign: {
      M: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
      MS: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
      MSC: {
        value: number;
        hourlyRate: number;
        hoursPerday: number;
        subValue: number;
        logic: string;
        shown: string;
      };
    }
    
    customisationDesign: null | object;
    customRequirementDesign: null | object;
    documentation: null | object;
    designReview: null | object;
    configuration: null | object;
    integration: null | object;
    customisationBuild: null | object;
    customRequirementBuild: null | object;
    documentLayout: null | object;
    reporting: null | object;
    dataMigration: null | object;
    crp: null | object;
    testing: null | object;
    trainTheTrainer: null | object;
    uatEnvPrep: null | object;
    uatSupport: null | object;
    prodEnvPrep: null | object;
    supportHandoever: null | object;
    endUserTraining: null | object;
    postGoLiveSupport: null | object;
    subTotal: null | object;
    projectManager: null | object;
  },
  estimateAverageRateMilestoneStoreData: object | null,
  estimateResourceStoreData: object | null,
  estimateResourceMilestoneStoreData: object | null
}

const initialState: ReportState = {
  initialFetchData: null,
  error: null,
  loading: false,
  analysisAndDesign: null,
  imageUrl: null,
  currency: 'GBP',
  estimateAverageRateStoreData: {
    analysisAndDesign: {
      M: {
        value: 0,
        hourlyRate: 0,
        hoursPerday: 0,
        subValue: 0,
        logic: '',
        shown: ''
      },
      MS: {
        value: 0,
        hourlyRate: 0,
        hoursPerday: 0,
        subValue: 0,
        logic: '',
        shown: ''
      },
      MSC: {
        value: 0,
        hourlyRate: 0,
        hoursPerday: 0,
        subValue: 0,
        logic: '',
        shown: ''
      }
    },
    customisationDesign: null,
    customRequirementDesign: null,
    documentation: null,
    designReview: null,
    configuration: null,
    integration: null,
    customisationBuild: null,
    customRequirementBuild: null,
    documentLayout: null,
    reporting: null,
    dataMigration: null,
    crp: null,
    testing: null,
    trainTheTrainer: null,
    uatEnvPrep: null,
    uatSupport: null,
    prodEnvPrep: null,
    supportHandoever: null,
    endUserTraining: null,
    postGoLiveSupport: null,
    subTotal: null,
    projectManager: null
  },
  estimateAverageRateMilestoneStoreData: {
    
  },
  estimateResourceStoreData: {
    analysisAndDesign: null,
    customisationDesign: null,
    customRequirementDesign: null,
    documentation: null,
    designReview: null,
    configuration: null,
    integration: null,
    customisationBuild: null,
    customRequirementBuild: null,
    documentLayout: null,
    reporting: null,
    dataMigration: null,
    crp: null,
    testing: null,
    trainTheTrainer: null,
    uatEnvPrep: null,
    uatSupport: null,
    prodEnvPrep: null,
    supportHandoever: null,
    endUserTraining: null,
    postGoLiveSupport: null,
    subTotal: null,
    projectManager: null
  },
  estimateResourceMilestoneStoreData: null,
}

const reportSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialFetchStart: (state) => {
      state.loading = true;
    },
    initialFetchSuccess: (state, action) => {
      state.initialFetchData = action.payload,
      state.loading = false,
      state.error = null,
      state.currency = action?.payload?.parameterModel[0]?.isocurrencycode?.isocurrencycode || 'GBP'
    },
    initialFetchFailure: (state, action) => {
      state.error = action.payload,
      state.initialFetchData = null,
      state.loading = false,
      state.currency = initialState.currency
    },
    setAnalysisAndDesign: (state, action) => {
      state.analysisAndDesign = action?.payload
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload
    },
    setEstimateAveRateAnalysisDesign: (state, action) => {
      state.estimateAverageRateStoreData.analysisAndDesign = action.payload
    },
    setEstimateAveRateCusomisationDesign: (state, action) => {
      state.estimateAverageRateStoreData.customisationDesign = action.payload
    },
    setEstimateAveRateCustomerRequirementDesign: (state, action) => {
      state.estimateAverageRateStoreData.customRequirementDesign = action.payload
    },
    setEstimateAveRateDocumentation: (state, action) => {
      state.estimateAverageRateStoreData.documentation = action.payload
    },
    setEstimateAveRateDesignReview: (state, action) => {
      state.estimateAverageRateStoreData.designReview = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  initialFetchStart,
  initialFetchSuccess,
  initialFetchFailure,
  setImageUrl,
  setEstimateAveRateAnalysisDesign,
  setEstimateAveRateCusomisationDesign,
  setEstimateAveRateCustomerRequirementDesign,
  setEstimateAveRateDocumentation,
  setEstimateAveRateDesignReview,
} = reportSlice.actions;

export default reportSlice.reducer;