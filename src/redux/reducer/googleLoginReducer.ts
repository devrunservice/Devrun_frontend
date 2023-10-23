import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleLogin: false,
  googleToken: '',
  urlToken: ''
}

const googleLoginSlice = createSlice({
  name: 'googleLogin',
  initialState,
  reducers: {
    setGoogleLogin: (state, action) => {
      state.googleLogin = action.payload
    },
    getGoogleToken: (state, action) => {
      state.googleToken = action.payload
      console.log('goo t',action.payload)
    },
    setUrlToken: (state, action) => {
      state.urlToken = action.payload
    }
  }
})
export const { setGoogleLogin, getGoogleToken, setUrlToken} = googleLoginSlice.actions
export default googleLoginSlice.reducer