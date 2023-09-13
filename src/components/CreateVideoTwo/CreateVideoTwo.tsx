import React from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import { PlusCircle } from 'asset';
import { RootState } from 'redux/store';
// import {createVideo} from 'api'
import { useDispatch, useSelector } from 'react-redux';
// import { CreateLectureType } from 'types';
import axios from 'axios';
import {  addClass, addSection, changeTitle, setClass,  deleteClass, deleteSection, changeVideoFile, changeClassTitle } from '../../redux/reducer/createVideoSlice';
import * as St from '../CreateNewVideo/style'

const CreateVideoTwo = ({PrevPage}:{PrevPage:any}) => {
  const dispatch = useDispatch()
  const videoStore = useSelector((state:RootState)=>state.createVideoSlice)
  
  /* 강의 수업추가 */
  const addClasses = (id: number) => {
    if(videoStore.videoList) {
      const maxSectionId = videoStore.videoList.reduce((max, section) =>
        section.videoNo > max ? section.videoNo : max,
        -1
      );
      dispatch(addClass({videoNo:maxSectionId + 1, lectureSectionId:id}))
    }
  };

  /* 강의 섹션추가 */
  const addSections = () => {
    const maxSectionId = videoStore.lectureSectionList.reduce((max, section) =>
      section.lectureSectionId > max ? section.lectureSectionId : max,
      -1
    );
    dispatch(addSection({ lectureSectionId: maxSectionId + 1, sectionTitle: '' }));
    addClasses(Number(maxSectionId + 1));
  };

  /* 강의 섹션삭제 */
  const deleteSections = (listIndex: number) => {
    dispatch(setClass(
      videoStore.videoList?.filter(list=> list.lectureSectionId !== listIndex + 1)
    ))
    dispatch(deleteSection(
      videoStore.lectureSectionList.filter((_list:any, index:number)=>index !== listIndex)
    ))
  }

  /* 강의 수업삭제 */
  const deleteClasses = (id:number) => {
    dispatch(deleteClass(
      videoStore.videoList?.filter(list=>list.videoNo !== id)
    ))
  }

  /* 섹션 제목 변경 */
  const changeTitles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    dispatch(changeTitle({id, value: e.target.value}))
  }

  /* 수업 제목 변경 */
  const changeClassTitles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    dispatch(changeClassTitle({id, value:e.target.value}))
  }
  /* 비디오 추가 */
  const changeVideoFiles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    const {files} = e.target
    if (files && files.length > 0) {
      const file = files[0];
      dispatch(changeVideoFile({
        file,
        id
      }))
    }
  }

  /* 등록하기 */
  const postVideo = () => {
    console.log('videoStore',videoStore)
    if (
      videoStore.lectureName === '' || 
      videoStore.lectureThumbnail === '' ||
      videoStore.lectureThumbnailUrl === '' ||
      videoStore.lectureSectionList[0].sectionTitle === '')
      {
        return alert('모든 항목을 채워주세요')
      } 

    const url = 'https://devrun.site/lectureregist'
    const formData = new FormData();
    formData.append('lectureName', videoStore.lectureName)
    formData.append('lecturePrice', videoStore.lecturePrice.toString())
    formData.append('lectureCategory', JSON.stringify(videoStore.lectureCategory))
    formData.append('lectureTag', JSON.stringify(videoStore.lectureTag))
    formData.append('lectureIntro', videoStore.lectureIntro)
    formData.append('lectureSectionList', JSON.stringify(videoStore.lectureSectionList))
    formData.append('image', videoStore.lectureThumbnail)
    videoStore.videoList?.forEach(list=> {
      formData.append('videoFileList', JSON.stringify(list))
    })
    axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log('err',err)
    })
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
          videoStore.lectureSectionList.map((list: any, index:number)=>(
            <CurriculumSection 
              list={list} key={list.lectureSectionId}
              index={index}
              deleteSections={deleteSections}
              addClasses={addClasses}
              deleteClasses={deleteClasses}
              changeTitles={changeTitles}
              changeVideoFiles={changeVideoFiles}
              changeClassTitles={changeClassTitles}
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