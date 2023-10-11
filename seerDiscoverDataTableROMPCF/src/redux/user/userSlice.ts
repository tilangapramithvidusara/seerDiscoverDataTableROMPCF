import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  currentUser: object | null,
  error: string | null,
  loading: boolean,
}

const initialState: UserState = {
  currentUser: null,
  error: null,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload,
      state.loading = false,
      state.error = null
    },
    signinFailure: (state, action) => {
      state.error = action.payload,
      state.currentUser = null,
      state.loading = false
    }

  },
})

// Action creators are generated for each case reducer function
export const { 
  signinStart,
  signinSuccess,
  signinFailure,
} = userSlice.actions

export default userSlice.reducer;