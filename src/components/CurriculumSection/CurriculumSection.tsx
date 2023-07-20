import React from "react";
import { /* Pencil, */ PlusCircle, Trash } from "asset";
import * as St from "./style";
// import * as Dst from "../CreateNewVideo/style";

/* interface ClassItem {
  num:number
} */

interface ListType  {
  num: number,
  title: string,
  isReadOnly: boolean,
  subTitle: Array<SubTitleType>
}
interface SubTitleType  {
  subNum: number,
  className: string,
  url: string,
  isReadOnly: boolean
}
interface TestType {
  item: ListType,
  // modalOn: (num:number, index:number)=> void
  deleteSections:(id:number)=> void
  addClasses: (id: number)=> void
  deleteClasses: (num:number, index: number) =>void
  changeTitles: (e:React.ChangeEvent<HTMLInputElement>, id:number)=>void
  onTitleWrites: (id:number) => void
  changeSubTitle: (e:React.ChangeEvent<HTMLInputElement>, num:number, index:number) => void
}

const CurriculumSection:React.FC<TestType> = ({item, /* modalOn, */changeSubTitle, deleteSections, addClasses, changeTitles, /* onTitleWrites, */ deleteClasses}) => {
  console.log(item)
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
          <h4>섹션{item.num}. 
          {/* readOnly={item.isReadOnly}  */}
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
            {/* <Pencil onClick={()=>onTitleWrites(item.num)}/> */}
            <Trash onClick={()=>deleteSections(item.num)}/>
          </div>
      </St.CurriculumHeader>
      {
        item.subTitle.map((list:any, index:number)=>(
          <St.CurriculumMain key={index}>
            <div>
              <p>제목</p>
              <input type="text" value={list.className} onChange={(event)=>changeSubTitle(event, item.num, index)} name="title" placeholder="제목입력"  style={{width:'600px'}} /> 
              <p>URL</p>
              <input type="text" value={list.url} onChange={(event)=>changeSubTitle(event, item.num, index)} name="url" placeholder="url주소 입력"  style={{width:'600px'}} /> 
            </div>
            <St.FlexLine>
              {/* <Pencil onClick={()=>modalOn(item.num, index)}/> */}
              <Trash onClick={()=>deleteClasses(item.num, list.subNum)} />
            </St.FlexLine>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
