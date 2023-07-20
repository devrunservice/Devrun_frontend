import React, { /* MouseEventHandler, */ useRef, useState } from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
// import Modal from 'components/Modal/Modal';
import { PlusCircle } from 'asset';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { SectionType } from 'types';
import { /* connectModal, */ addClass, addSection, changeTitle, deleteClass, deleteSection, onSubTitle, onTitleWrite } from '../../redux/reducer/createVideoSlice';
// import { deleteSection } from '../../redux/reducer/createVideoSlice';
import * as St from '../CreateNewVideo/style'



const CreateVideoTwo = ({PrevPage}:{PrevPage:any}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const dispatch = useDispatch()
  const createVideoSlice = useSelector((state:RootState)=>state.createVideoSlice.section)
  console.log(createVideoSlice)
  const nextId = useRef<number>(1)
  const nextSubId = useRef<number>(1)
  const [section, setSection] = useState<SectionType>(
    {
      num: nextId,
      title: '',
      isReadOnly: false,
      subTitle: [
        {
          subNum:0,
          className: '',
          url:'',
          isReadOnly: false,
        }
      ],
    },
  )
  
  const addSections = () => {
    dispatch(addSection({...section, num:nextId.current}))
    nextId.current+=1
  }
  const deleteSections = (id: number) => {
    dispatch(deleteSection(
      createVideoSlice.filter((list:any)=>list.num !== id)
    ))
  }
  const addClasses = (id: number) => {
    dispatch(addClass({
      id,
      subNum:nextSubId.current,
      className: '',
      url:'',
      isReadOnly: false,
    }))
    nextSubId.current += 1
  };
  const deleteClasses = (num:number, index:number) => {
    dispatch(deleteClass({num,index}))}

  const changeTitles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    // if(e.key === 'Enter') {
      dispatch(changeTitle({id, value: e.target.value}))
    // }
  }

  const onTitleWrites = (id: number) => {
    dispatch(onTitleWrite({id, isReadOnly: false}))
  }
  const changeSubTitle = (e:React.ChangeEvent<HTMLInputElement>, num:number, index:number) => {
    const {name, value} = e.target
    console.log(name === 'title')
    // if(name === 'title') {
      dispatch(onSubTitle({
        num,
        index,
        name,
        value
      }))
    // } 
    // else {
    //   dispatch(onSubTitle({
    //     num,
    //     index,
    //     name,
    //     value
    //   }))
    // }
  }
  // const [onModal, setOnModal] = useState<boolean>(false)

  // const modalOn = (num:number, index: number) => {
  //   setOnModal(true)

  //   // dispatch(connectModal({num, index}))
  // }
  
  // const [modalNum, setModalNum] = useState(0)
  // const modalClose = () => {
  //   setOnModal(false)
  // }
  // const onSubTitleWrites = () => {

  // }
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
        {/* <button onClick={()=>PrevPage()} type="button">이전</button> */}
          <span>커리큘럼 등록</span>
          <button onClick={addSections}>
            <PlusCircle/>섹션추가하기
          </button>
        </St.ArticleTitle>
        {
          createVideoSlice.map((list: any,index:number)=>(
            <CurriculumSection 
              item={list} key={index} 
              // modalOn={modalOn} 
              deleteSections={deleteSections}
              addClasses={addClasses}
              deleteClasses={deleteClasses}
              changeTitles={changeTitles}
              onTitleWrites={onTitleWrites}
              changeSubTitle={changeSubTitle}
            />
          ))
        }
        <div>
          <St.OtherBtn onClick={()=>PrevPage()} type="button">이전</St.OtherBtn>
          <St.NextCreateBtn>등록</St.NextCreateBtn>
        </div>
      </St.CreateVideoArticle>
      {/* {
        onModal && <Modal />
        // modalClose={modalClose}
      } */}
    </St.CreateVideoWrap>
  )
}

export default CreateVideoTwo;