/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CurriculumSection } from "components";
import { PlusCircle } from "asset";
import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getCookie } from "utils/cookies";
import * as St from "../CreateNewVideo/style";
import {
  addClass,
  addSection,
  changeTitle,
  setClass,
  deleteClass,
  deleteSection,
  changeVideoFile,
  changeClassTitle,
} from "../../redux/reducer/createVideoReducer";


const CreateVideoTwo = ({ PrevPage }: { PrevPage: any }) => {
  const dispatch = useDispatch();
  const videoStore = useSelector((state: RootState) => state.createVideoSlice);
  const googleStore = useSelector((state: RootState) => state.googleLoginSlice);
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
  const changeClassTitles = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(changeClassTitle({ id, value: e.target.value }));
  };
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

  /* 등록하기 */
  // const postVideo = () => {
  //   console.log('videoStore',videoStore)
  //   console.log('google', googleStore.googleToken)
  //   if (
  //     videoStore.lectureName === '' ||
  //     videoStore.lectureThumbnail === '' ||
  //     videoStore.lectureThumbnailUrl === '' ||
  //     videoStore.lectureSectionList[0].sectionTitle === '')
  //     {
  //       return alert('모든 항목을 채워주세요')
  //     }

  //   const url = 'https://devrun.site/lectureregitest'
  //   const formData = new FormData();
  //   formData.append('lectureName', videoStore.lectureName)
  //   formData.append('lecturePrice', videoStore.lecturePrice.toString())
  //   formData.append('lectureThumbnailFile', videoStore.lectureThumbnail)
  //   // formData.append('lectureCategory.lectureBigCategory', JSON.stringify(videoStore.lectureCategory.lectureBigCategory))
  //   // formData.append('lectureCategory.lectureMidCategory', JSON.stringify(videoStore.lectureCategory.lectureMidCategory))
  //   formData.append('lectureCategory.lectureBigCategory', '음식')
  //   formData.append('lectureCategory.lectureMidCategory', '밥')
  //   formData.append('lectureCategory.categoryNo', '1')
  //   // formData.append('lectureTag', JSON.stringify(videoStore.lectureTag))
  //   formData.append('lectureTag', '태그')
  //   formData.append('lectureIntro', videoStore.lectureIntro)
  //   // formData.append('lectureSectionList', JSON.stringify(videoStore.lectureSectionList))

  //   /* 임시로 하나씩만 넣기 */
  //   formData.append('lectureSectionList.SectionNumber', '123' )
  //   formData.append('lectureSectionList.SectionTitle', 'title')
  //   // formData.append('lectureSectionList.SectionNumber', JSON.stringify(videoStore.lectureSectionList[0].lectureSectionId))
  //   // formData.append('lectureSectionList.SectionTitle', JSON.stringify(videoStore.lectureSectionList[0].sectionTitle))
  //   /*  */

  //   // formData.append('sectionid', '16')
  //   formData.append('accessToken', googleStore.googleToken)

  //   const newVideoList = videoStore.videoList?.map(list=>{
  //     const { file } = list
  //     return file
  //   })
  //   formData.append('videoList.videofile', JSON.stringify(newVideoList))
  //   // formData.append('videoList.videofile', JSON.stringify(newVideoList))
  //   // formData.append('videoList.videofile', videoStore.videoList[0].file)

  //   // formData.append('videoList.videoTitle', videoStore.videoList[0].videoNo)
  //   if (videoStore.videoList !== undefined) {
  //     formData.append('videoList.videoTitle', String(videoStore.videoList[0].videoTitle));
  //   } else {
  //     alert('비디오를 추가해주세요')
  //   }
  //   formData.append('videoList.SectionNumber', '123')
  //   formData.append('videoList.SectionTitle', 'title')
  //   // formData.append('videoList.SectionNumber', JSON.stringify(videoStore.lectureSectionList[0].lectureSectionId))
  //   // formData.append('videoList.SectionTitle', JSON.stringify(videoStore.lectureSectionList[0].sectionTitle))
  //   formData.append("lectureStart", "1");
  //   formData.append("lectureEdit", "0");

  //   // formData.append('videoList[0].videoTitle', '2')
  //   // const newVideoList = videoStore.videoList?.map(list=>{
  //   //   const { videoNo, ...rest} = list
  //   //   return rest
  //   // })
  //   // formData.append('videoList', JSON.stringify(newVideoList))

  //   // videoStore.videoList?.forEach(list=> {
  //   //   formData.append('videoFileList', JSON.stringify(list))
  //   // })
  //   axios.post(url, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   }).then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log('err',err)
  //   })
  // }

  const postVideo = () => {
    const token = getCookie("googleToken");
    console.log("여기 토근", token);
    console.log("videoStore", videoStore);
    console.log("google", googleStore.googleToken);
    if (
      videoStore.lectureName === "" ||
      videoStore.lectureThumbnail === "" ||
      videoStore.lectureThumbnailUrl === "" ||
      videoStore.lectureSectionList[0].sectionTitle === ""
    ) {
      return alert("모든 항목을 채워주세요");
    }

    const url = "https://devrun.site/lectureregitest";
    const formData = new FormData();
    formData.append("lectureName", videoStore.lectureName);
    formData.append("lectureIntro", videoStore.lectureIntro);
    formData.append("lecturePrice", videoStore.lecturePrice.toString());
    // formData.append("lectureStart", "1");
    // formData.append("lectureEdit", "0");
    formData.append("lectureThumbnailFile", videoStore.lectureThumbnail);
    formData.append("lectureTag", "라면 , 라멘 ,  누들면 ");
    formData.append("lectureCategory.categoryNo", "1");
    formData.append("lectureCategory.lectureMidCategory", "밥 ");
    formData.append("lectureSectionList.SectionNumber", "1 ");
    formData.append("lectureSectionList.SectionTitle", "너구리 라면 ");
    formData.append("videoList.videoTitle", "너구리  끓이는 법 ");
    formData.append("videoList[0].SectionNumber", "25");
    formData.append("videoList[0].SectionTitle", "불닭  끓이는 법 ");
    formData.append("videoList[1].SectionNumber", "25");
    formData.append("videoList[1].SectionTitle", "ㅁㄴㅇㅇ  끓이는 법 ");
    console.log("token", getCookie("googleToken"));
    // formData.append("accessToken", "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MjYzZDA5NzQ1YjUwMzJlNTdmYTZlMWQwNDFiNzdhNTQwNjZkYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzODU0ODE1OTIwNzctNmlyZ210dXNsMTNqc3JlcWlzNDNiOGU3NnBjazU4MmEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzODU0ODE1OTIwNzctNmlyZ210dXNsMTNqc3JlcWlzNDNiOGU3NnBjazU4MmEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDkxODIxNDMyMTUwNDUzMTg2MzIiLCJlbWFpbCI6InNreWhuMDIwN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk2NjY5NDEzLCJuYW1lIjoi7J207ZWY64qYIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tSUHotUkV0RWRoY3lJTWl3Q09GMnlEUl81eGQ1ZzRaSGxnZ2t5YnZjTz1zOTYtYyIsImdpdmVuX25hbWUiOiLtlZjripgiLCJmYW1pbHlfbmFtZSI6IuydtCIsImxvY2FsZSI6ImtvIiwiaWF0IjoxNjk2NjY5NzEzLCJleHAiOjE2OTY2NzMzMTMsImp0aSI6ImNiZmE1ODEzMjA0MmFhODI1MTU4Mjc4ZWU0YTkyZGViN2EyYTA0ODAifQ.geazA7A6SoFDZQng8pik8Gtql-k8_Z8UC-Upw3e4lnFV9BxsvUwgU489Q4pgg77jHlCgojY4_1vqZvsg78GC5Cx5apIzh2T3s1L0zxg3l15tLcK4Q1h9gw2TpTvpYRFnt8BP3Juax3zensR2_RNZXfDLbqjKpHzIiaZ1IgZPX9fdSUd1KFH5Cx9YjknPC7KR03s1ZKDD7k3035kSJVEeggX8N4AoGH8h_M2pS4Y70F33di2pzeGk1zmFl8WeA0Z6cgoMK4Guixmuo11GrBY4GCb9ubCzd0EOLEB7yOnjTObr22hjIEWS5CyxqjjgofvQZJ6XZV_hwEcbCpFJVpkp1w");
    formData.append("accessToken", token);
    const newVideoList = videoStore.videoList?.map((list) => {
      const { file } = list;
      console.log("file", file);
      return file;
    });
    console.log("newVideoList", newVideoList);
    // console.log('videoStore.videoList[0].file', newVideoList)
    // console.log('videoStore.videoList[0].file',videoStore.videoList[0].file)
    // formData.append("videoList.videofile", newVideoList);
    // formData.append("videoList.videofile", videoStore.videoList[0].file);
    // formData.append("videoList[0].videofile", videoStore?.videoList[0].file);
    // formData.append("videoList[1].videofile", videoStore?.videoList[1].file);
    // formData.append("videoList.videofile", videoStore.lectureThumbnail);
    formData.append("lectureCategory.lectureBigCategory", "음식 ");
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
    </St.CreateVideoWrap>
  );
};

export default CreateVideoTwo;
