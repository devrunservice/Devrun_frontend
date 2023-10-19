import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleLogin: false,
  googleToken: ''
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
    }
  }
})
export const { setGoogleLogin, getGoogleToken} = googleLoginSlice.actions
export default googleLoginSlice.reducer