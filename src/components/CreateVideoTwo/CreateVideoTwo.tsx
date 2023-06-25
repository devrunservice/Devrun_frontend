import React, { useState } from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import { PlusCircle } from 'asset';
import * as St from '../CreateNewVideo/style'

const CreateVideoTwo = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [section, setSection] = useState<any>([
    {
      num: 1,
    },
  ])
  const sectionPlus = () => {
    setSection([...section, section.num+=1])
  }
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
          <span>커리큘럼 등록</span>
          <button onClick={sectionPlus}>
            <PlusCircle/>섹션추가하기
          </button>
        </St.ArticleTitle>
        {
          section.map((list:any,index:number)=>(
            <CurriculumSection key={index} />
          ))
        }
        <St.NextCreateBtn>등록</St.NextCreateBtn>
      </St.CreateVideoArticle>
    </St.CreateVideoWrap>
  )
}

export default CreateVideoTwo;