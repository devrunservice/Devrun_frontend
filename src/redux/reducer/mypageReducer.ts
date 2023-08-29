/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {MypageType} from 'types';

export interface MypageReducerType {
  loading: boolean;
  data: MypageType;
  error: Error | null;
}

const initialState: MypageReducerType = {
  loading: false,
  data: {
    id: '',
    name: '',
    email: '',
    birthday: '',
    phonenumber: '',
    profileImage: undefined,
    profilePreview: '',
  },
  error: null,
};

const mypageReduer = createSlice({
  name: 'mypageReducer',
  initialState,
  reducers: {
    getDataLoading: (state, action) => {
      console.log('Try to get user data');
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      console.log('Success to get user data');
      state.loading = false;
      state.data.id = action.payload.data.id;
      state.data.name = action.payload.data.name;
      state.data.email = action.payload.data.email;
      state.data.birthday = action.payload.data.birthday.split('T')[0];
      state.data.phonenumber = action.payload.data.phonenumber;
      state.data.profilePreview = action.payload.data.profileimgsrc;
    },
    getDataFail: (state, action) => {
      console.log('Fail to get user data');
      state.loading = false;
      state.error = action.payload;
    },
    updateEmailLoading: (state, action) => {
      state.loading = true;
    },
    updateEmailSuccess: (state, action) => {
      state.loading = false;
      state.data.email = action.payload.data.email;
      state.error = null;
    },
    updateEmailFail: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    },
    updatePhonenumberLoading: (state, action) => {
      state.loading = true;
    },
    updatePhonenumberSuccess: (state, action) => {
      state.loading = false;
      state.data.phonenumber = action.payload.data.phonenumber;
    },
    updatePhonenumberFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileImageLoading: (state, action) => {
      console.log('이미지 수정 리듀서 시작');
      state.loading = true;
    },
    updateProfileImageSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data.profileImage = action.payload.data.profileimg;
    },
    updateProfileImageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getDataLoading,
  getDataSuccess,
  getDataFail,
  updateEmailLoading,
  updateEmailSuccess,
  updateEmailFail,
  updatePhonenumberLoading,
  updatePhonenumberSuccess,
  updatePhonenumberFail,
  updateProfileImageLoading,
  updateProfileImageSuccess,
  updateProfileImageFail,
} = mypageReduer.actions;

export default mypageReduer.reducer;
