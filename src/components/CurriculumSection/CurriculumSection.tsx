import React from "react";
import { PlusCircle, Trash } from "asset";
import * as St from "./style";

interface ListType  {
  num: number,
  title: string,
  subTitle: Array<SubTitleType>
}
interface SubTitleType  {
  subNum: number,
  className: string,
  url: string,
}
interface TestType {
  item: ListType,
  indexNum: number,
  deleteSections:(id:number)=> void
  addClasses: (id: number)=> void
  deleteClasses: (num:number, index: number) =>void
  changeTitles: (e:React.ChangeEvent<HTMLInputElement>, id:number)=>void
  changeSubTitle: (e:React.ChangeEvent<HTMLInputElement>, num:number, index:number) => void
}

const CurriculumSection:React.FC<TestType> = ({item, indexNum,changeSubTitle, deleteSections, addClasses, changeTitles, deleteClasses}) => {
  console.log(indexNum)
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
          <h4>섹션{indexNum}. 
            <input 
              type="text" 
              placeholder="목차 입력" 
              onChange={(event)=>changeTitles(event, item.num)} 
              value={item.title} 
              />
          </h4>
          <div>
            <button onClick={()=>addClasses(item.num)}>
              <PlusCircle/>
              수업 추가하기
            </button>
            <Trash onClick={()=>deleteSections(item.num)}/>
          </div>
      </St.CurriculumHeader>
      {
        item.subTitle.map((list:any, index:number)=>(
          <St.CurriculumMain key={index}>
            <div>
              <p>제목1</p>
              <input 
                type="text" 
                value={list.className}
                onChange={(event)=>changeSubTitle(event, item.num, index)} 
                name="title" 
                placeholder="제목입력"  
                style={{width:'600px'}} 
              /> 
              <p>URL</p>
              <St.FileInput 
              onChange={(event:any)=>changeSubTitle(event, item.num, index)} 
                id="video-url" 
                type="file" 
                name="url" 
                placeholder="파일 업로드하기" 
                style={{width:'600px'}} 
                // value={list.url}
              /> 
              <label htmlFor="video-url">파일선택</label>
            </div>
            <St.FlexLine>
              <Trash onClick={()=>deleteClasses(item.num, list.subNum)} />
            </St.FlexLine>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
