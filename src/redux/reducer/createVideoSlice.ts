// import React from "react";
// import { useRef } from "react";
import { createSlice, /* PayloadAction */ } from "@reduxjs/toolkit";
// import { CreateLectureType } from "types";
interface CreateLectureType {
  lectureName: string;
  lecturePrice: string;
  imageUrl: string;
  lectureCategory: string;
  lectureTag: Array<string>;
  lectureExplane: string;
  lectureIntroduce: string;
  section: Array<SectionType>
}
interface SectionType {
  // num:React.MutableRefObject<number>,
  num:number,
  title: string;
  isReadOnly: boolean;
  subTitle: Array<SubTitleType>
}
interface SubTitleType {
  subNum:number;
  // subNum:React.MutableRefObject<number>;
  className: string;
  url: string;
  isReadOnly: boolean;
}

const initialState:CreateLectureType = {
  lectureName: '',
  lecturePrice: '',
  imageUrl: '',
  lectureCategory: '',
  lectureTag: [],
  lectureExplane: '',
  lectureIntroduce: '',
  section: [
    {
      // num: nextId,
      num: 0,
      title: '',
      isReadOnly: false,
      subTitle: [
        {
          subNum:0,
          className: '',
          url:'',
          isReadOnly: false,
        }
      ],
    }
  ]
}
const createVideoSlice = createSlice({
  name: 'createVideoSlice',
  initialState,
  reducers: {
    addSection:(state, action) => {
      state.section = state.section.concat(action.payload)
    },
    deleteSection: (state, action) => {
      if(state.section.length === 1) {
        return
      }
      state.section = action.payload
    },
    addClass:(state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.id)
      state.section[index].subTitle = state.section[index].subTitle.concat(action.payload)
    },
    deleteClass:(state, action) => {
      state.section = action.payload
    },
    changeTitle:(state, action) => {
      console.log(action)
      const index = state.section.findIndex(list=>list.num === action.payload.id)
      state.section[index].title = action.payload.value
      state.section[index].isReadOnly = true
    },
    onTitleWrite:(state, action) => {
      console.log(state, action)
      const index = state.section.findIndex(list=>list.num === action.payload.id)
      if(state.section[index].isReadOnly === true) {
        state.section[index].isReadOnly = action.payload.isReadOnly
      }
    }
  }
})

export const {addSection, deleteSection, addClass, deleteClass, changeTitle, onTitleWrite} = createVideoSlice.actions
export default createVideoSlice.reducer