import React, { useState } from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import Modal from 'components/Modal/Modal';
import { PlusCircle } from 'asset';
import * as St from '../CreateNewVideo/style'



const CreateVideoTwo = ({PrevPage}:{PrevPage:any}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [section, setSection] = useState<any>([
    {
      num: 1,
      title: '',
      isReadOnly: false,
      subTitle: [
        {
          subNum:1,
          className: '',
          url:'',
          isReadOnly: false,
        }
      ],
    },
  ])
  const addSection = () => {
    const newNum = section.length + 1; 
    const newSectionState = [...section, {
      num: newNum,
      title: '',
      isReadOnly: false,
      subTitle: [
        {
          subNum:1,
          className: '',
          url:'',
          isReadOnly: false,
        }
      ],
    }];
    setSection(newSectionState); 
  }
  const addClass = () => {
    const newNum = section.subTitle.length
    
    setSection([...section, {
      subNum: newNum
    }])
  }

  const [onModal, setOnModal] = useState<boolean>(false)
  const modalOn = () => {
    setOnModal(true)
  }
  // const deleteSection = (num: any) => {
  //   setSection(...section, section.filter((list:any) => list.num !==num.num))
  // }
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
        <button onClick={()=>PrevPage()} type="button">이전</button>
          <span>커리큘럼 등록</span>
          <button onClick={addSection}>
            <PlusCircle/>섹션추가하기
          </button>
        </St.ArticleTitle>
        {
          section.map((list: any,index:number)=>(
            <CurriculumSection item={list} key={index} modalOn={modalOn} />
          ))
        }
        <div>
          <St.NextCreateBtn>등록</St.NextCreateBtn>
        </div>
      </St.CreateVideoArticle>
      {
        onModal && <Modal />
      }
      {/* <Modal /> */}
    </St.CreateVideoWrap>
  )
}

export default CreateVideoTwo;