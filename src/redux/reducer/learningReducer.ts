/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {LearningType} from 'types';

export interface LearningReducerType {
  loading: boolean;
  data: LearningType[];
  error: Error | null;
}

const initialState: LearningReducerType = {
  loading: false,
  data: [],
  error: null,
};

const learningReducer = createSlice({
  name: 'learningReducer',
  initialState,
  reducers: {
    learningLoading: (state, action) => {
      state.loading = true;
    },
    learningSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    learningFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {learningLoading, learningSuccess, learningFail} =
  learningReducer.actions;

export default learningReducer.reducer;
