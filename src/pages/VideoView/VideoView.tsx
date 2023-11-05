/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Curriculum, Note } from "components";
import { useDate } from "hooks";
import { VideoCurriculumVideoInfos } from "types";
import { PiArrowLineLeftBold, PiArrowLineRightBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { LuFolderEdit, LuStickyNote } from "react-icons/lu";
import * as St from "./style";
import {
  curriculumLoding,
  progressLoding,
} from "../../redux/reducer/videoViewReducer";

const VideoView = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.VideoViewSlice);
  const { videoTime } = useDate();
  useEffect(() => {
    dispatch(curriculumLoding(22));
  }, []);
  const [open, setOpen] = useState({
    curriculumOpen: false,
    note: false,
  });
  const [lecture, setLecture] = useState<VideoCurriculumVideoInfos>({
    lastviewdate: "",
    progress: 0,
    timecheck: 0,
    videoId: "",
    videoTitle: "",
    videoTotalPlayTime: 0,
  });
  // 현재 내위치값
  const currentIndex = () => {
    let currentSectionInfoIndex = 0;
    let currentVideoinfoIndex = 0;
    for (let i = 0; i < data.sectionInfo.length; i++) {
      const section = data.sectionInfo[i];
      const videoIndex = section.videoInfo.findIndex(
        (v: VideoCurriculumVideoInfos) => v.videoId === lecture.videoId
      );
      if (videoIndex !== -1) {
        currentSectionInfoIndex = i;
        currentVideoinfoIndex = videoIndex;
      }
    }
    return { currentSectionInfoIndex, currentVideoinfoIndex };
  };
  const onPrev = useCallback(() => {
    const { currentSectionInfoIndex, currentVideoinfoIndex } = currentIndex();
    if (currentVideoinfoIndex === 0) {
      const prevInfo =
        data.sectionInfo[currentSectionInfoIndex - 1].videoInfo[
          data.sectionInfo[currentSectionInfoIndex].videoInfo.length - 1
        ];
      setLecture(prevInfo);
    } else {
      const prevInfo =
        data.sectionInfo[currentSectionInfoIndex].videoInfo[
          currentVideoinfoIndex - 1
        ];
      setLecture(prevInfo);
    }
  }, [lecture]);
  const onNext = useCallback(() => {
    const { currentSectionInfoIndex, currentVideoinfoIndex } = currentIndex();
    if (
      currentVideoinfoIndex ===
      data.sectionInfo[currentSectionInfoIndex].videoInfo.length - 1
    ) {
      const nextInfo =
        data.sectionInfo[currentSectionInfoIndex + 1].videoInfo[0];
      setLecture(nextInfo);
    } else {
      const nextInfo =
        data.sectionInfo[currentSectionInfoIndex].videoInfo[
          currentVideoinfoIndex + 1
        ];
      setLecture(nextInfo);
    }
  }, [lecture]);
  const onCurriculum = useCallback(() => {
    setOpen({ ...open, curriculumOpen: !open.curriculumOpen, note: false });
  }, [open]);
  const onNote = useCallback(() => {
    setOpen({ ...open, curriculumOpen: false, note: !open.note });
  }, [open]);
  const videoId = lecture.videoId;

  const timeRef = useRef<HTMLIFrameElement>(null);
  const [time, setTime] = useState<number>(0);
  const handleIframeLoad = () => {
    const iframeDocument = timeRef.current?.contentDocument;
    const player = iframeDocument?.querySelector("video");

    player?.addEventListener("timeupdate", () => {
      setTime(player.currentTime);
    });
  };
  useEffect(() => {
    const postTime = setInterval(() => {
      // dispatch(progressLoding(time));
    }, 10000);
    return () => {
      clearInterval(postTime);
    };
  }, [time]);
  console.log(time);
  return (
    <St.VideoViewWrap>
      <St.Left>
        <St.Top>
          <St.TopLeft>
            <St.Back>
              <St.BiArrow />
            </St.Back>
            <St.Title>{lecture.videoTitle}</St.Title>
          </St.TopLeft>
          <St.TopRight>
            <p>
              수강률<span>{data.lectureWholeProgess}%</span>
            </p>
            <p>
              수강시간 : <span>{videoTime(data.wholeStudyTime)}</span>
            </p>
            <p>
              강의시간 : <span>{videoTime(data.wholeRemainingTime)}</span>
            </p>
          </St.TopRight>
        </St.Top>
        <St.Center>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={lecture.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </St.Center>
        <St.Bottom>
          <button onClick={() => onPrev()}>
            <PiArrowLineLeftBold />
            이전 강의
          </button>

          <button>
            <BiLike />
            좋아요
          </button>
          <button onClick={() => onNext()}>
            다음 강의
            <PiArrowLineRightBold />
          </button>
        </St.Bottom>
      </St.Left>
      <St.Right>
        <St.Button onClick={() => onCurriculum()}>
          <LuFolderEdit />
          <p>커리큘럼</p>
        </St.Button>
        <St.Button onClick={() => onNote()}>
          <LuStickyNote />
          <p>노트</p>
        </St.Button>
      </St.Right>
      {open.curriculumOpen && (
        <St.CurriculumWrap>
          <Curriculum
            onCurriculum={onCurriculum}
            setLecture={setLecture}
            lecture={lecture}
          />
        </St.CurriculumWrap>
      )}
      {open.note && (
        <St.CurriculumWrap>
          <Note onNote={onNote} />
        </St.CurriculumWrap>
      )}
    </St.VideoViewWrap>
  );
};
export default VideoView;
