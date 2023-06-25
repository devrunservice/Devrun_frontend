import React, { useState } from "react";
import { Pencil, PlusCircle, Trash } from "asset";
import * as St from "./style";
// import * as Dst from "../CreateNewVideo/style";

const CurriculumSection = () => {
  const [classState, setClassState] = useState<any>([
    {
      num:1
    }
  ])
  const addClass = () => {
    setClassState([...classState, classState.num += 1])
  }
  return(
    <St.CurriculumSectionWrap>
      <St.CurriculumHeader>
        <h4>섹션 0. 개요</h4>
        <div>
          <button onClick={addClass}>
            <PlusCircle />
            수업 추가하기
          </button>
          <Pencil />
          <Trash />
        </div>
      </St.CurriculumHeader>

      {
        classState.map((list:object, index:number)=>(
          <St.CurriculumMain key={index}>
            <div>asd</div>
            <div>
              <Pencil />
              <Trash />
            </div>
          </St.CurriculumMain>
        ))
      }
    </St.CurriculumSectionWrap>
  )
};

export default CurriculumSection;
