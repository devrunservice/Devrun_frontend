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

const profileReduer = createSlice({
  name: 'profileReducer',
  initialState,
  reducers: {
    myInfoLoading: (state, action) => {
      state.loading = true;
    },
    myInfoSuccess: (state, action) => {
      state.loading = false;
      state.data.id = action.payload.data.id;
      state.data.name = action.payload.data.name;
      state.data.email = action.payload.data.email;
      state.data.birthday = action.payload.data.birthday.split('T')[0];
      state.data.phonenumber = action.payload.data.phonenumber;
      state.data.profilePreview = action.payload.data.profileimgsrc;
    },
    myInfoFail: (state, action) => {
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
      state.loading = true;
    },
    updateProfileImageSuccess: (state, action) => {
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
  myInfoLoading,
  myInfoSuccess,
  myInfoFail,
  updateEmailLoading,
  updateEmailSuccess,
  updateEmailFail,
  updatePhonenumberLoading,
  updatePhonenumberSuccess,
  updatePhonenumberFail,
  updateProfileImageLoading,
  updateProfileImageSuccess,
  updateProfileImageFail,
} = profileReduer.actions;

export default profileReduer.reducer;
