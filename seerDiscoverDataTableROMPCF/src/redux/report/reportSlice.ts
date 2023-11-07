import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ReportState {
  initialFetchData: object | null,
  error: string | null,
  loading: boolean,
  analysisAndDesign: object | null,
  imageUrl: any,
  currency: string
}

const initialState: ReportState = {
  initialFetchData: null,
  error: null,
  loading: false,
  analysisAndDesign: null,
  imageUrl: null,
  currency: 'GBP',
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  initialFetchStart,
  initialFetchSuccess,
  initialFetchFailure,
  setImageUrl,
} = reportSlice.actions;

export default reportSlice.reducer;