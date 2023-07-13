import React, { /* MouseEventHandler, */ useState } from "react";
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
  // key: number,
  modalOn: (index:number)=> void,
  // deleteSections:(id:MouseEventHandler<SVGAElement>)=> void
  deleteSections:(id:number)=> void,
  addClasses: (id: number)=> void
  changeTitles: (e:React.KeyboardEvent<HTMLInputElement>, id:number)=>void
  onTitleWrites: (id:number) => void
}

const CurriculumSection:React.FC<TestType> = ({item, modalOn, deleteSections, addClasses, changeTitles, onTitleWrites}) => {
  const [classState, setClassState] = useState<any>([
    {
      num:1,
      subTitle: '',
    }
  ])
  /* const addClass = () => {
    const newNum = classState.length + 1; 
    const newClassState = [...classState, { num: newNum }];
    setClassState(newClassState);
  } */
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
              <input type="text" placeholder="예)변수 let, const 수업" style={{width:'600px'}} /> 
            </div>
            <div>
              <Pencil onClick={()=>modalOn(index)}/>
              <Trash onClick={()=>deleteClass(list)} />
            </div>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
