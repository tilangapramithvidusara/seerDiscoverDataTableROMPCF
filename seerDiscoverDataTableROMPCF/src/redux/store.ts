import { configureStore } from '@reduxjs/toolkit'

import userSlice from './user/userSlice'
import reportSlice from './report/reportSlice';
// import sidePaneSlice  from './sidePane/taskSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    report: reportSlice,
    // sidePane: sidePaneSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch