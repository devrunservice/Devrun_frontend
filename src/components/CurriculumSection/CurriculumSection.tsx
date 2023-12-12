import React from "react";
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { PlusCircle, Trash } from "asset";
import { SectionType } from "types";
import * as St from "./style";

interface curriculumPropsType {
  list: SectionType,
  index: number,
  deleteSections:(index:number)=> void
  addClasses: (id: number)=> void
  deleteClasses: (id:number) =>void
  changeTitles: (e:React.ChangeEvent<HTMLInputElement>, id:number)=>void
  changeVideoFiles: (e:React.ChangeEvent<HTMLInputElement>, id:number) => void
  changeClassTitles: (e:React.ChangeEvent<HTMLInputElement>, id:number) => void
}

const CurriculumSection:React.FC<curriculumPropsType> = ({list, index, changeClassTitles, changeVideoFiles, changeTitles, deleteSections, deleteClasses, addClasses}) => {
  const videoStore = useSelector((state:RootState)=>state.createVideoSlice)
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
          <h4>섹션{index}.
            <input 
              type="text" 
              placeholder="목차 입력" 
              onChange={(event)=>changeTitles(event, list.lectureSectionId)} 
              value={list.sectionTitle}
            />
          </h4>
          <div>
            <button onClick={()=>addClasses(list.lectureSectionId)}>
              <PlusCircle/>
              수업 추가하기
            </button>
            <Trash onClick={()=>deleteSections(index)}/>
          </div>
      </St.CurriculumHeader>
      {
        videoStore.videoList?.map((item)=>(
          item.lectureSectionId === list.lectureSectionId ? (
          <St.CurriculumMain key={item.videoNo}>
            <div>
              <p>제목</p>
              <input 
                type="text" 
                placeholder="수업 제목"
                value={item.videoTitle||''}
                onChange={(event)=>changeClassTitles(event, item.videoNo)}
              />
              <p>URL</p>
              <St.FileInput 
                onChange={(event:any)=>changeVideoFiles(event, item.videoNo)} 
                id="video-url" 
                type="file" 
                name="url" 
                accept="video/*"
              /> 
            </div>
            <St.FlexLine>
              <Trash onClick={()=>deleteClasses(item.videoNo)} />
            </St.FlexLine>
          </St.CurriculumMain>
          ) : null
        ))      
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
