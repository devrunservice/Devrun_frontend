import React, { useState } from "react";
import { Pencil, PlusCircle, Trash } from "asset";
import * as St from "./style";
// import * as Dst from "../CreateNewVideo/style";

/* interface ClassItem {
  num:number
} */

interface SubTitleType  {
  subNum: number,
  className: string,
  url: string,
  isReadOnly: boolean
}
interface ListType  {
  num: number,
  title: string,
  isReadOnly: boolean,
  subTitle: SubTitleType
}
interface TestType {
  item: ListType,
  key: number,
  modalOn: ()=> void
}

const CurriculumSection:React.FC<TestType> = ({item, key, modalOn}) => {
  console.log(key)
  const [classState, setClassState] = useState<any>([
    {
      num:1,
      subTitle: '',
    }
  ])
  const addClass = () => {
    const newNum = classState.length + 1; 
    const newClassState = [...classState, { num: newNum }];
    setClassState(newClassState);
  }
  const deleteClass = (num: any) => {
    const updatedState = classState.filter((list: any) => list.num !== num.num);
    setClassState(updatedState);
  }
  /* const changeSubTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setClassState([...classState, {subTitle: value}])
  } */
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
          <h4>섹션{item.num}. <input type="text" placeholder="예)개요, 강의소개" /></h4>
          <div>
            <button onClick={addClass}>
              <PlusCircle/>
              수업 추가하기
            </button>
            <Pencil />
            <Trash />
          </div>
      </St.CurriculumHeader>
    
      {
        [item].map((list:any, index:number)=>(
          <St.CurriculumMain key={index}>
            <div>{/* {list.num} */} 
              <input type="text"/*  onChange={changeSubTitle} */ placeholder="예)변수 let, const 수업" style={{width:'600px'}} /> 
            </div>
            <div>
              <Pencil onClick={modalOn}/>
              <Trash onClick={()=>deleteClass(list)} />
            </div>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
