import { createSlice } from "@reduxjs/toolkit";

interface CreateLectureType {
  lectureName: string;
  lecturePrice: number;
  categoryType: string,
  imageUrl: string;
  // lectureBigCategory: string,
  lectureCategory: string;
  lectureTag: Array<string>;
  lectureExplane: string;
  // lectureIntroduce: string;
  section: Array<SectionType>
}
interface SectionType {
  num:number,
  title: string;
  subTitle: Array<SubTitleType>
}
interface SubTitleType {
  subNum:number;
  className: string;
  url: string;
}

const initialState:CreateLectureType = {
  lectureName: '', 
  lecturePrice: 0, 
  imageUrl: '', 
  categoryType: 'front', 
  lectureCategory: 'html',
  lectureTag: [], 
  lectureExplane: '', 
  section: [ 
    {
      num: 0, 
      title: '', 
      subTitle: [
        {
          subNum:0, 
          className: '', 
          url:'', 
        }
      ],
    }
  ]
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
    onImageUrl: (state,action) => {
      state.imageUrl = action.payload
    },
    onCategoryType: (state, action) => {
      state.categoryType = action.payload
    },
    onLectureCategory: (state, action) => {
      state.lectureCategory = action.payload
    },
    onLectureTag: (state, action) => {
      state.lectureTag = state.lectureTag.concat(action.payload)
    },
    deleteTag:(state, action) => {
      state.lectureTag = state.lectureTag.filter(list=>list !== action.payload)
    },
    onLectureExplane: (state, action) => {
      state.lectureExplane = action.payload
    },
    // onLectureIntroduce: (state, action) => {
    //   state.lectureIntroduce = action.payload
    // },
    addSection:(state, action) => {
      console.log('addSection',action.payload)
      state.section = state.section.concat(action.payload)
    },
    deleteSection: (state, action) => {
      if(state.section.length === 1) return
      state.section = action.payload
    },
    addClass:(state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.id)
      state.section[index].subTitle = state.section[index].subTitle.concat(action.payload)
    },
    deleteClass:(state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.num)
      if(state.section[index].subTitle.length === 1) return
      state.section[index].subTitle = state.section[index].subTitle.filter(list=>list.subNum !== action.payload.index)
    },
    changeTitle:(state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.id)
      state.section[index].title = action.payload.value
    },
    onSubTitle:(state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.num)
      if(action.payload.name === 'title') {
        state.section[index].subTitle[action.payload.index].className = action.payload.value
      } else {
        state.section[index].subTitle[action.payload.index].url = action.payload.url
      }
    },
    changeUrl: (state, action) => {
      const index = state.section.findIndex(list=>list.num === action.payload.num)
      state.section[index].subTitle[action.payload.index].url = action.payload
    }
  }
})

export const {addSection, changeUrl, onSubTitle, deleteSection, addClass, deleteClass, deleteTag, changeTitle,onCategoryType, onLectureName, onLecturePrice, onImageUrl, onLectureCategory, onLectureTag, onLectureExplane,  /* onLectureIntroduce */} = createVideoSlice.actions
export default createVideoSlice.reducer