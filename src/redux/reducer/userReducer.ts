import { createSlice, createAction } from "@reduxjs/toolkit";
import { ITmi } from "types";


export const fetchUserTmi = createAction<string>("userReducer/fetchUserTmi");

const initialState: ITmi = {
  data: {
    id: "",
    email: "",
    name: "",
    phonenumber:0,
  },
  error: null,
  loading: false,
};

const userTmiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userTmiPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    userTmiFulfilled: (state, action) => {
      state.loading = false;
      state.data.id = action.payload.id;
      state.data.email = action.payload.email;
      state.data.name = action.payload.name;
      state.data.phonenumber = action.payload.phonenumber;
    },
    userTmiRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userTmiPending, userTmiFulfilled, userTmiRejected } =
  userTmiSlice.actions;
export default userTmiSlice.reducer;
