import React from "react";
import { Pencil, PlusCircle, Trash } from "asset";
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
  modalOn: (num:number, index:number)=> void
  deleteSections:(id:number)=> void
  addClasses: (id: number)=> void
  deleteClasses: (num:number, index: number) =>void
  changeTitles: (e:React.KeyboardEvent<HTMLInputElement>, id:number)=>void
  onTitleWrites: (id:number) => void
}

const CurriculumSection:React.FC<TestType> = ({item, modalOn, deleteSections, addClasses, changeTitles, onTitleWrites, deleteClasses}) => {
  console.log(item)
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
          <h4>섹션{item.num}. 
            <input 
              type="text" 
              placeholder="작성 후 엔터키 입력" 
              readOnly={item.isReadOnly} 
              onKeyDown={(event)=>changeTitles(event, item.num)} 
              // value={item.title} 
              />
          </h4>
          <div>
            <button onClick={()=>addClasses(item.num)}>
              <PlusCircle/>
              수업 추가하기
            </button>
            <Pencil onClick={()=>onTitleWrites(item.num)}/>
            <Trash onClick={()=>deleteSections(item.num)}/>
          </div>
      </St.CurriculumHeader>
      {
        item.subTitle.map((list:any, index:number)=>(
          <St.CurriculumMain key={index}>
            <div>
              <p>제목</p>
              <input type="text" name="title" placeholder="예)변수 let, const 수업" readOnly style={{width:'600px'}} /> 
              <p>URL</p>
              <input type="text" name="url" placeholder="예)변수 let, const 수업" readOnly style={{width:'600px'}} /> 
            </div>
            <St.FlexLine>
              <Pencil onClick={()=>modalOn(item.num, index)}/>
              <Trash onClick={()=>deleteClasses(item.num, list.subNum)} />
            </St.FlexLine>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
