import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface ReportState {
  initialFetchData: object | null,
  error: string | null,
  loading: boolean,
}

const initialState: ReportState = {
  initialFetchData: null,
  error: null,
  loading: false
}

const reportSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialFetchStart: (state) => {
      state.loading = true;
    },
    initialFetchSuccess: (state, action) => {
      state.initialFetchData = action.payload,
      state.loading = false,
      state.error = null
    },
    initialFetchFailure: (state, action) => {
      state.error = action.payload,
      state.initialFetchData = null,
      state.loading = false
    }

  },
})

// Action creators are generated for each case reducer function
export const { 
  initialFetchStart,
  initialFetchSuccess,
  initialFetchFailure,
} = reportSlice.actions;

export default reportSlice.reducer;