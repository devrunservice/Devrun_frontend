import { createSlice } from "@reduxjs/toolkit";

interface createLectureType {
  lectureName: string,
  lecturePrice: string,
  imageUrl: string,
  lectureCategory: string,
  lectureTag: Array<string>,
  lectureExplane: string,
  lectureIntroduce: string
}

const initialState:createLectureType = {
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
    createLecture:(state, action) => {
      
    }
  }
})

export default createVideoSlice 