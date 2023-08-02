import React, { /* ChangeEvent, */ useRef, useState } from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import { PlusCircle } from 'asset';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { SectionType } from 'types';
import {  addClass, addSection, changeTitle, /* changeUrl, */ deleteClass, deleteSection, onSubTitle } from '../../redux/reducer/createVideoSlice';
import * as St from '../CreateNewVideo/style'

const CreateVideoTwo = ({PrevPage}:{PrevPage:any}) => {
  const dispatch = useDispatch()
  const createVideoSlice = useSelector((state:RootState)=>state.createVideoSlice)
  // const [nextId, setNextId] = useState<number>(createVideoSlice.section.length)
  console.log('leng',createVideoSlice.section.length)
  const nextSubId = useRef<number>(1)
  const [section, setSection] = useState<SectionType>(
    {
      num: createVideoSlice.section.length,
      // num: createVideoSlice.section.length,
      // num: nextId,
      title: '',
      subTitle: [
        {
          subNum:0,
          className: '',
          url:'',
        }
      ],
    },
  )
  
  const addSections = () => {
    setSection({...section, num:createVideoSlice.section.length + 1})
    dispatch(addSection({...section}))
    console.log('ser',section)
    // nextId.current+=1
    console.log('createVideoSlice',createVideoSlice)
  }
  const deleteSections = (id: number) => {
    dispatch(deleteSection(
      createVideoSlice.section.filter((list:any)=>list.num !== id)
    ))
  }
  const addClasses = (id: number) => {
    dispatch(addClass({
      id,
      subNum:nextSubId.current,
      className: '',
      url:'',
    }))
    nextSubId.current += 1
  };
  const deleteClasses = (num:number, index:number) => {
    dispatch(deleteClass({num,index}))}

  const changeTitles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    dispatch(changeTitle({id, value: e.target.value}))
  }

  const changeSubTitle = (e:React.ChangeEvent<HTMLInputElement>, num:number, index:number) => {
    const {name, value, files} = e.target
    if (name === 'url' && files instanceof FileList) {
      const fileList = files?.[0];
      const url = URL.createObjectURL(fileList);
      url.toString()
      dispatch(onSubTitle({
        num,
        index,
        name,
        url,
      }))
    } else {
      dispatch(onSubTitle({
        num,
        index,
        name,
        value
      }))
    }
  }
  // const changeUrls = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { files } = e.target
  //   const file = files[0]
  //   dispatch(changeUrl({
  //     num,
  //     index,
  //     file
  //   }))
  // }
  /* 등록하기 */
  const postVideo = () => {
    console.log(createVideoSlice)
    if(createVideoSlice.lectureName === '') {
      return alert('강좌명을 입력해 주세요.')
    }
    if(createVideoSlice.imageUrl === '') {
      return alert('강좌 이미지를 업로드해 주세요.')
    }
    if(createVideoSlice.lectureTag.length === 0) {
      return alert('태그를 하나 이상 이렵해 주세요.')
    }
    if(createVideoSlice.lectureExplane === '') {
      return alert('강좌 한줄설명을 입력해 주세요.')
    }
    
    const params = {
      lecturename: createVideoSlice.lectureName,
      lectureprice: createVideoSlice.lecturePrice,
      lectureThumbnail: createVideoSlice.imageUrl,
      lectureBigCategory: createVideoSlice.categoryType,
      lectureMidCategory: createVideoSlice.lectureCategory,
      lectureTag: createVideoSlice.lectureTag,
      LecutreIntro: createVideoSlice.lectureExplane,
      lectureSection: createVideoSlice.section
    }
    console.log(params)
    // const res = createLecture.createLectures
    // console.log(res)
  }

  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
          <span>커리큘럼 등록</span>
          <button onClick={addSections}>
            <PlusCircle/>섹션추가하기
          </button>
        </St.ArticleTitle>
        {
          createVideoSlice.section.map((list: any,index:number)=>(
            <CurriculumSection 
              item={list} key={index}
              indexNum={index}
              deleteSections={deleteSections}
              addClasses={addClasses}
              deleteClasses={deleteClasses}
              changeTitles={changeTitles}
              changeSubTitle={changeSubTitle}
            />
          ))
        }
        <div>
          <St.OtherBtn onClick={()=>PrevPage()} type="button">이전</St.OtherBtn>
          <St.NextCreateBtn onClick={postVideo}>등록</St.NextCreateBtn>
        </div>
      </St.CreateVideoArticle>
    </St.CreateVideoWrap>
  )
}

export default CreateVideoTwo;