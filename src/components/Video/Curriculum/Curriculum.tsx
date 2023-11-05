/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect } from "react";
import {  useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useDate } from "hooks";
import { VideoCurriculumVideoInfo, VideoCurriculumVideoInfos } from "types";
import * as St from "./style";


interface ICurriculum {
  onCurriculum: () => void;
  setLecture: React.Dispatch<React.SetStateAction<VideoCurriculumVideoInfos>>;
  lecture: VideoCurriculumVideoInfos;
}

const Curriculum = ({ onCurriculum, setLecture, lecture }: ICurriculum) => {
  const { data } = useSelector((state: RootState) => state.VideoViewSlice);
  const { videoTime } = useDate();
  const onVideoPlay = useCallback((l: VideoCurriculumVideoInfos) => {
    setLecture(l);
  }, []);
  return (
    <>
      <St.Top>
        <St.Title>
          커리큘럼 <St.Deletes onClick={() => onCurriculum()} />
        </St.Title>
        <St.SubTitle>{data.lectureName}</St.SubTitle>
        <St.SubContent>
          <p>
            수강기한 : <span>{data.lectureExpiryDate.slice(0, 10)}</span>
          </p>
          <p>
            수강률 : <span>{data.lectureWholeProgess}%</span>
          </p>
          <p>
            수강시간 : <span>{videoTime(data.wholeStudyTime)}</span>
          </p>
          <p>
            강의시간 : <span>{videoTime(data.wholeRemainingTime)}</span>
          </p>
        </St.SubContent>
        <St.Gauge>
          <span
            style={{
              background: "#5F4B8B",
              width: `${data.lectureWholeProgess}%`,
            }}
          />
        </St.Gauge>
      </St.Top>
      <St.Bottom>
        {data.sectionInfo.map((v: VideoCurriculumVideoInfo) => {
          return (
            <div key={v.sectionId}>
              <St.SectionTitle>
                <p>
                  <span>섹션 {v.sectionNumber}</span>
                  <span>
                    {v.videoInfo.length}강 /{" "}
                    {videoTime(
                      v.videoInfo
                        .map((k: any) => k.videoTotalPlayTime)
                        .reduce((a: number, b: number) => a + b, 0)
                    )}
                  </span>
                </p>
                <em>{v.sectionTitle}</em>
              </St.SectionTitle>
              <St.SectionCon>
                {v.videoInfo.map((l: VideoCurriculumVideoInfos) => {
                  return (
                    <St.SectionConLi
                      key={l.videoId}
                      onClick={() => onVideoPlay(l)}
                      $active={l.videoTitle === lecture.videoTitle}
                    >
                      <St.SectionIcon>
                        {l.timecheck === l.videoTotalPlayTime ? (
                          <St.Check />
                        ) : (
                          <St.Play
                            $active={l.videoTitle === lecture.videoTitle}
                          />
                        )}
                      </St.SectionIcon>
                      <St.SectionText>
                        <em>{l.videoTitle}</em>
                        <p>{videoTime(l.videoTotalPlayTime)}</p>
                      </St.SectionText>
                    </St.SectionConLi>
                  );
                })}
              </St.SectionCon>
            </div>
          );
        })}
      </St.Bottom>
    </>
  );
};
export default Curriculum;
