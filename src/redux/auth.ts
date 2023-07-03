import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  pwd: string;
  name: string;
  email: string;
  bday: string;
  phoneNumber: string;
}

const initialState: User = {
  id: "",
  pwd: "",
  name: "",
  email: "",
  bday: "",
  phoneNumber: "",
};

// const authReducer = createSlice({
//   name: "authReducer",
//   initialState,
//   //   reducer: {},
//   extraReducers(builder) {},
// });

// export default authReducer.reducer;
