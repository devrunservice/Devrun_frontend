import { createSlice, /* PayloadAction */ } from "@reduxjs/toolkit";
import { CreateLectureType } from "types";

const initialState:CreateLectureType = {
  lectureName: '',
  lecturePrice: '',
  imageUrl: '',
  lectureCategory: '',
  lectureTag: [],
  lectureExplane: '',
  lectureIntroduce: '',
}

const createVideoSlice = createSlice({
  name: 'createVideo',
  initialState,
  reducers: {
    // createVideo: (state: CreateLectureType, action: PayloadAction<string>) => {
    //   ...state,
    //   retu
    //   // state.lectureName = action.payload
    // }
  }
})

// export const {createVideo} = createVideoSlice.actions
export const createVideoReducer = createVideoSlice.reducer