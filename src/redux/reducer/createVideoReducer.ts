import { createSlice } from "@reduxjs/toolkit";
import { CreateLectureType } from "types";

const initialState:CreateLectureType = {
  lectureName: '', 
  lecturePrice: 0, 
  lectureThumbnail: '', 
  lectureThumbnailUrl: '',
  lectureCategory: {
    lectureBigCategory: 'front',
    lectureMidCategory: 'html'
  },
  lectureTag: [], 
  lectureIntro: '', 
  lectureSectionList: [{lectureSectionId:1, sectionTitle:''}],
  videoList:[{lectureSectionId:1, file:null, videoNo:1, videoTitle:''}]
}
const createVideoSlice = createSlice({
  name: 'createVideoSlice',
  initialState,
  reducers: {
    onLectureName: (state,action) => {
      state.lectureName = action.payload
    },
    onLecturePrice: (state,action) => {
      state.lecturePrice = action.payload
    },
    onImageFile: (state,action)=> {
      state.lectureThumbnail = action.payload
    },
    onImageUrl: (state,action) => {
      state.lectureThumbnailUrl = action.payload
    },
    onCategoryType:(state, action) => {
      state.lectureCategory.lectureBigCategory = action.payload
    },
    onLectureCategory: (state, action) => {
      state.lectureCategory.lectureMidCategory = action.payload
    },
    onLectureTag: (state, action) => {
      state.lectureTag = state.lectureTag.concat(action.payload)
    },
    deleteTag:(state, action) => {
      state.lectureTag = state.lectureTag.filter(list=>list !== action.payload)
    },
    onLectureIntro: (state, action) => {
      state.lectureIntro = action.payload
    },
    addSection:(state, action) => {
      state.lectureSectionList = state.lectureSectionList.concat(action.payload)
    },
    addClass:(state,action) => {
      if(state.videoList) {
        state.videoList = state.videoList.concat(action.payload)
      }
    },
    deleteSection: (state, action) => {
      if(state.lectureSectionList.length === 1) return
      state.lectureSectionList = action.payload
    },
    setSection: (state) => {
      state.lectureSectionList.forEach((section, index)=> {
        section.lectureSectionId = index + 1
      })
    },
    setClass: (state,action) => {
      state.videoList = action.payload
    },
    deleteClass:(state, action) => {
      state.videoList = action.payload
    },
    changeTitle:(state, action) => {
      const index = state.lectureSectionList.findIndex(list=>list.lectureSectionId === action.payload.id)
      state.lectureSectionList[index].sectionTitle = action.payload.value
    },
    changeClassTitle:(state, action) => {
      if(state.videoList) {
        const index = state.videoList.findIndex(list=>list.videoNo === action.payload.id)
        state.videoList[index].videoTitle = action.payload.value
      }
    },
    changeVideoFile:(state, action) => {
      if(state.videoList) {
        const index = state.videoList.findIndex(list=>list.videoNo === action.payload.id)
        state.videoList[index].file = action.payload.file
      }
    },
  }
})

export const {addSection, changeClassTitle, addClass, deleteClass, changeTitle, changeVideoFile, setSection, setClass, deleteSection, deleteTag, onCategoryType, onImageFile, onLectureName, onLecturePrice, onImageUrl, onLectureCategory, onLectureTag, onLectureIntro} = createVideoSlice.actions
export default createVideoSlice.reducer