/* eslint-disable no-param-reassign */
import { baseAxios } from "api/instance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITmi, LoginFormType } from "types";


export const userTmi = createAsyncThunk(
  "userTmi",
  async (payload: LoginFormType, thunkAPI) => {
    try {
      const response = await baseAxios.get(`/tmi/${payload.id}`);
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState: ITmi = {
  data: [],
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
      state.data = action.payload;
    },
    userTmiRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload 
    },
  }
});

export const { userTmiPending, userTmiFulfilled, userTmiRejected } =
  userTmiSlice.actions;
export default userTmiSlice.reducer;
/* eslint-disable no-param-reassign */