import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ReportState } from '../../types/reducer.types';

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
  accountId: null,
  contactId: null
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
    },
    setEstimateAveRateConfiguration: (state, action) => {
      state.estimateAverageRateStoreData.configuration = action.payload
    },
    setEstimateAveRateIntegration: (state, action) => {
      state.estimateAverageRateStoreData.integration = action.payload
    },
    setEstimateAveRateCustomisationBuild : (state, action) => {
      state.estimateAverageRateStoreData.customisationBuild = action.payload
    },
    setEstimateAveRateCustomRequirementBuild : (state, action) => {
      state.estimateAverageRateStoreData.customRequirementBuild = action.payload
    }, // estimageAveRateDocumentLayoutSidePane
    setEstimateAveRateDocumentLayout : (state, action) => {
      state.estimateAverageRateStoreData.documentLayout = action.payload
    }, 
    setAccountId: (state, action) => {
      state.accountId = action.payload;
    },
    setContactId: (state, action) => {
      state.contactId = action.payload;
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
  setEstimateAveRateConfiguration,
  setEstimateAveRateIntegration,
  setEstimateAveRateCustomisationBuild,
  setEstimateAveRateCustomRequirementBuild,
  setEstimateAveRateDocumentLayout,
  setAccountId,
  setContactId,
} = reportSlice.actions;

export default reportSlice.reducer;