import React, { useState } from 'react';
import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import { PlusCircle } from 'asset';
import { RootState } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Spinner from 'components/Modal/DisableModal';
import DisableModal from 'components/Modal/DisableModal';
import { getCookie } from 'utils/cookies';
import { createVideo } from 'utils/api';
// import axios from 'axios';
import {  addClass, addSection, changeTitle, setClass,  deleteClass, deleteSection, changeVideoFile, changeClassTitle } from '../../redux/reducer/createVideoReducer';
import * as St from '../CreateNewVideo/style'
// import axios from 'axios';

const CreateVideoTwo = ({PrevPage}:{PrevPage:any}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const videoStore = useSelector((state:RootState)=>state.createVideoSlice)
  const googleStore = useSelector((state:RootState)=>state.googleLoginSlice)

  /* 로딩여부 */
  const [loading, setLoading] = useState(false)

  /* 모달창 커스텀 */
  const [modal, setModal] = useState(false)
  const [text, setText] = useState('')
  const [btNum, setBtNum] = useState (1)
  const [flag, setFlag] = useState('')

  /* 강의 수업추가 */
  const addClasses = (id: number) => {
    if (videoStore.videoList) {
      const maxSectionId = videoStore.videoList.reduce(
        (max, section) => (section.videoNo > max ? section.videoNo : max),
        -1
      );
      dispatch(addClass({ videoNo: maxSectionId + 1, lectureSectionId: id }));
    }
  };

  /* 강의 섹션추가 */
  const addSections = () => {
    const maxSectionId = videoStore.lectureSectionList.reduce(
      (max, section) =>
        section.lectureSectionId > max ? section.lectureSectionId : max,
      -1
    );
    dispatch(
      addSection({ lectureSectionId: maxSectionId + 1, sectionTitle: "" })
    );
    addClasses(Number(maxSectionId + 1));
  };

  /* 강의 섹션삭제 */
  const deleteSections = (listIndex: number) => {
    dispatch(
      setClass(
        videoStore.videoList?.filter(
          (list) => list.lectureSectionId !== listIndex + 1
        )
      )
    );
    dispatch(
      deleteSection(
        videoStore.lectureSectionList.filter(
          (_list: any, index: number) => index !== listIndex
        )
      )
    );
  };

  /* 강의 수업삭제 */
  const deleteClasses = (id: number) => {
    dispatch(
      deleteClass(videoStore.videoList?.filter((list) => list.videoNo !== id))
    );
  };

  /* 섹션 제목 변경 */
  const changeTitles = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    dispatch(changeTitle({ id, value: e.target.value }));
  };

  /* 수업 제목 변경 */
  const changeClassTitles = (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
    dispatch(changeClassTitle({id, value:e.target.value}))
  }

  /* 비디오 추가 */
  const changeVideoFiles = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      dispatch(
        changeVideoFile({
          file,
          id,
        })
      );
    }
  };

  /* 강의등록 */
  const postVideo = async() => {
    const token = getCookie('accessToken')
    if (
      videoStore.lectureName === '' || 
      videoStore.lectureThumbnail === '' ||
      videoStore.lectureThumbnailUrl === '' ||
      videoStore.lectureSectionList[0].sectionTitle === '')
      {
        setText('모든 항목을 채워주세요')
        setBtNum(1)
        setFlag('blank')
        setModal(true)
        return
      } 

    setLoading(true)
    setModal(true)
    console.log('store',videoStore)
    const formData = new FormData();
    formData.append("lectureName", videoStore.lectureName);
    formData.append("lectureIntro", videoStore.lectureIntro);
    formData.append("lecturePrice", videoStore.lecturePrice.toString());
    formData.append("lectureThumbnail", videoStore.lectureThumbnail);
    formData.append("lectureFullIntro", 'lectureFullIntrolectureFullIntrolectureFullIntro')
    const lectureTagString = videoStore.lectureTag.join(', ')
    formData.append("lectureTag", lectureTagString);
    formData.append("lectureCategory.lectureBigCategory", videoStore.lectureCategory.lectureBigCategory);
    formData.append("lectureCategory.lectureMidCategory", videoStore.lectureCategory.lectureMidCategory);
    formData.append("lectureCategory.categoryNo", videoStore.lectureCategory.categoryNo.toString());
    videoStore.lectureSectionList.forEach((list, index) => {
      formData.append(`lectureSectionList[${index}].SectionNumber`, list.lectureSectionId.toString());
      formData.append(`lectureSectionList[${index}].SectionTitle`, list.sectionTitle);
    });
    videoStore.videoList?.forEach((list, index) => {
      const sections = videoStore.lectureSectionList.find(section => section.lectureSectionId === list.lectureSectionId);
      const sectionTitle = sections ? sections.sectionTitle : '';
      formData.append(`videoList[${index}].SectionTitle`, sectionTitle)
      formData.append(`videoList[${index}].videoTitle`, list.videoTitle)
      formData.append(`videoList[${index}].SectionNumber`, list.lectureSectionId.toString())
      formData.append(`videoList[${index}].videofile`, list.file)
    })
    formData.append("oauth2", googleStore.urlToken);
    formData.append("jwtToken", token )

    // axios.post('https://devrun.site/lectureregitest', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   }
    // }).then(res=>console.log(res)).catch(err=>console.log(err))
    try {
      const response = await createVideo.videoAPI(formData)
      console.log(response)
      setLoading(false)
      setText('등록에 성공했습니다. 내 강의 페이지로 이동합니다')
      setFlag('success')
      setBtNum(1)
      // setModal(true)
    } catch(err) {
      setText('등록에 실패했습니다. 다시 시도해주세요')
      setBtNum(1)
      setFlag('fail')
      setModal(true)
      setLoading(false)
    }
  }

  const closeModalCancel = () => {
    setModal(false)
  }
  const closeModalAccept = (value:string) => {
    setModal(false)
    if(value === 'success') {
      navigate('/')
    }
  }

  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
          <span>커리큘럼 등록</span>
          <button onClick={addSections}>
            <PlusCircle />
            섹션추가하기
          </button>
        </St.ArticleTitle>
        {videoStore.lectureSectionList.map((list: any, index: number) => (
          <CurriculumSection
            list={list}
            key={list.lectureSectionId}
            index={index}
            deleteSections={deleteSections}
            addClasses={addClasses}
            deleteClasses={deleteClasses}
            changeTitles={changeTitles}
            changeVideoFiles={changeVideoFiles}
            changeClassTitles={changeClassTitles}
          />
        ))}
        <div>
          <St.OtherBtn onClick={() => PrevPage()} type="button">
            이전
          </St.OtherBtn>
          <St.NextCreateBtn onClick={postVideo}>등록</St.NextCreateBtn>
        </div>
      </St.CreateVideoArticle>
      { modal && <DisableModal text={text} btNum={btNum} flag={flag} loading={loading} closeModalAccept={closeModalAccept} closeModalCancel={closeModalCancel}/> }
      {/* {loading && <Spinner />} */}
    </St.CreateVideoWrap>
  );
};

export default CreateVideoTwo;