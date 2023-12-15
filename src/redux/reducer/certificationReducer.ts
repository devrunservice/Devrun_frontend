/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import * as I from 'types';

interface CertificationReducerType {
  loading: boolean;
  certificationList: I.CertificationWrapperType;
  certificationDetail: I.CertificationDetailType;
  error: Error | null;
}

const initialState: CertificationReducerType = {
  loading: false,
  certificationList: {
    dtolist: [],
    totalPages: 1,
  },
  certificationDetail: {
    birthday: '',
    end: '',
    lectureName: '',
    start: '',
    userName: '',
  },
  error: null,
};

const certificationReducer = createSlice({
  name: 'dashboardReducer',
  initialState,
  reducers: {
    certificationListLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    certificationListSuccess: (state, action) => {
      state.loading = false;
      state.certificationList = action.payload.data;
    },
    certificationListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    certificationDetailLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    certificationDetailSuccess: (state, action) => {
      state.loading = false;
      state.certificationDetail = action.payload.data;
    },
    certificationDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  certificationListLoading,
  certificationListSuccess,
  certificationListFail,
  certificationDetailLoading,
  certificationDetailSuccess,
  certificationDetailFail,
} = certificationReducer.actions;

export default certificationReducer.reducer;
