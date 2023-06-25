import {configureStore} from '@reduxjs/toolkit';
import createSlice from './slices/createVideoSlice'
const store = configureStore({
  reducer: {
    createVideo: createSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
