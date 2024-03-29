
import React, { useCallback, useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { Curriculum, Note, Community } from "components";

import { useDate } from "hooks";
import { VideoCurriculumVideoInfos } from "types";
import { PiArrowLineLeftBold, PiArrowLineRightBold } from "react-icons/pi";
import { LuFolderEdit, LuStickyNote, LuSubtitles } from "react-icons/lu";
import * as St from "./style";
import {
  curriculumLoding,
  progressLoding,
} from "../../redux/reducer/videoViewReducer";


const VideoView = () => {
  const dispatch = useDispatch();
  const param = useParams()
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.videoViewReducer);
  const { videoTime } = useDate();
  useEffect(() => {
    dispatch(curriculumLoding({ lectureId: param.lectureId }));
  }, []);
  const [open, setOpen] = useState({
    curriculum: false,
    note: false,
    community: false,
  });
  
  
  
  const [lecture, setLecture] = useState<VideoCurriculumVideoInfos>({
    lastviewdate: "",
    progress: 0,
    timecheck: 0,
    videoId: "",
    videoTitle: "",
    videoTotalPlayTime: 0,
  });
  const name = data.sectionInfo
    .flatMap((v) => v.videoInfo)
    .find((c) => c.videoId === param.videoId);
  useEffect(() => {
    if (name !== undefined)
      return setLecture({
        ...lecture,
        lastviewdate: name.lastviewdate,
        progress: name.progress,
        timecheck: name.timecheck,
        videoId: name.videoId,
        videoTitle: name.videoTitle,
        videoTotalPlayTime: name.videoTotalPlayTime,
      });
  }, [name]);
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
  const { currentSectionInfoIndex, currentVideoinfoIndex } = currentIndex();
  
  const onPrev = useCallback(() => {
    
    if (currentVideoinfoIndex === 0) {
      const prevInfo =
        data.sectionInfo[currentSectionInfoIndex - 1].videoInfo[
          data.sectionInfo[currentSectionInfoIndex].videoInfo.length - 1
        ];
        navigate(`/videoView/${param.lectureId}/${prevInfo.videoId}`);
      setLecture(prevInfo);
    } else {
      const prevInfo =
        data.sectionInfo[currentSectionInfoIndex].videoInfo[
          currentVideoinfoIndex - 1
        ];
        navigate(`/videoView/${param.lectureId}/${prevInfo.videoId}`);
      setLecture(prevInfo);
    }
  }, [lecture]);
  const onNext = useCallback(() => {
    if (
      currentVideoinfoIndex ===
      data.sectionInfo[currentSectionInfoIndex].videoInfo.length - 1
    ) {
      const nextInfo =
        data.sectionInfo[currentSectionInfoIndex + 1].videoInfo[0];
        navigate(`/videoView/${param.lectureId}/${nextInfo.videoId}`);
        setLecture(nextInfo);
    } else {
      const nextInfo =
        data.sectionInfo[currentSectionInfoIndex].videoInfo[
          currentVideoinfoIndex + 1
        ];
        navigate(`/videoView/${param.lectureId}/${nextInfo.videoId}`);
      setLecture(nextInfo);
      
    }
  }, [lecture]);
  const onCurriculum = useCallback(() => {
    setOpen({ ...open,  curriculum: !open.curriculum,  note: false, community: false, });
  }, [open]);
  const onNote = useCallback(() => {
    setOpen({ ...open,curriculum: false,note: !open.note, community: false,});
  }, [open]);
  const onCommunity = useCallback(() => {
    setOpen({ ...open, curriculum: false, note: false, community:!open.community});
  }, [open]);
  const [time, setTime] = useState<number>(0);
  const onPlayTime = (e: any) => {
    const postTime = setInterval(() => {
      if (e.data === 1) {
        const player = e.target.getCurrentTime();
        setTime(player);
      }
    }, 60 * 60 * 30);
    return () => {
      clearInterval(postTime);
    };
  };
  useEffect(() => {
    dispatch(
      progressLoding({
        currenttime: Math.floor(time),
        videoid: param.videoId,
      })
    );
  }, [time, param.videoId]);
  return (
    <St.VideoViewWrap>
      <St.Left>
        <St.Top>
          <St.TopLeft>
            <St.Back>
              <St.BiArrow onClick={() => navigate("/learning")} />
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
          <YouTube
            videoId={lecture.videoId}
            onStateChange={onPlayTime}
            title={lecture.videoTitle}
            opts={{
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
                start: lecture.timecheck,
              },
            }}
            // 이벤트 리스너
            onEnd={(e: any) => {
              e.target.stopVideo(0);
              setTime(0);
            }}
          />
        </St.Center>
        <St.Bottom>
          {data.sectionInfo.find((v) => v.sectionId === 1)?.videoInfo[0]
            ?.videoId === param.videoId ? (
            ""
          ) : (
            <button onClick={() => onPrev()}>
              <PiArrowLineLeftBold />
              이전 강의
            </button>
          )}
          {data.sectionInfo[data.sectionInfo.length - 1]?.videoInfo[
            data.sectionInfo[data.sectionInfo.length - 1].videoInfo.length - 1
          ]?.videoId === param.videoId ? (
            ""
          ) : (
            <button onClick={() => onNext()}>
              다음 강의
              <PiArrowLineRightBold />
            </button>
          )}
        </St.Bottom>
      </St.Left>
      <St.Right>
        <St.Button onClick={() => onCurriculum()}>
          <LuFolderEdit />
          <p>커리큘럼</p>
        </St.Button>
        <St.Button onClick={() => onCommunity()}>
          <LuSubtitles />
          <p>커뮤니티</p>
        </St.Button>
        <St.Button onClick={() => onNote()}>
          <LuStickyNote />
          <p>노트</p>
        </St.Button>
      </St.Right>
      {open.curriculum && (
        <St.CurriculumWrap>
          <Curriculum onCurriculum={onCurriculum} data={data} />
        </St.CurriculumWrap>
      )}
      {open.community && (
        <St.CurriculumWrap>
          <Community
            onCommunity={onCommunity}
            videoid={lecture.videoId}
            lectureId={data.lectureId}
          />
        </St.CurriculumWrap>
      )}
      {open.note && (
        <St.CurriculumWrap>
          <Note
            onNote={onNote}
            videoid={lecture.videoId}
            lectureId={data.lectureId}
          />
        </St.CurriculumWrap>
      )}
    </St.VideoViewWrap>
  );
};
export default VideoView;
