// import { baseAxios } from "api/instance";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { IReactSlice } from "types";


// export const __postAuth = createAsyncThunk("postAuth", async () => {
//   try {
//     const response = await baseAxios.post("/signup/auth");
//     const data = await response.data;
//     return data;
//   } catch (error: any) {
//     return new Error(error.response.data.message);
//   }
// });

// const initialState: IReactSlice = {
//   data: [],
//   error: null,
//   loading: false,
// };
// export const postAuthSlice = createSlice({
//   name: "sign",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(__postAuth.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(__postAuth.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(__postAuth.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message as string;
//       });
//   },
// });

// export default postAuthSlice.reducer;
export {};