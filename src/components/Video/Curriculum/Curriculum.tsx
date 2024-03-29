/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDate } from "hooks";
import {  VideoCurriculum } from "types";
import * as St from "./style";
import VideoTop from "../VideoTop/VideoTop";


interface ICurriculum {
  onCurriculum: () => void;
  data: VideoCurriculum;
}

const Curriculum = ({ onCurriculum, data }: ICurriculum) => {
  const { videoTime } = useDate();
  const param = useParams();
  const navigate = useNavigate();
  const onVideoPlay = (l: string) => {
    navigate(`/videoView/${param.lectureId}/${l}`);
  };
  return (
    <>
      <VideoTop text="커리큘럼" onButton={onCurriculum} />
      <St.Top>
        <St.SubTitle>{data.lectureName}</St.SubTitle>
        <St.SubContent>
          <p>
            수강기한 : <span>무제한</span>
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
              width: `${data.lectureWholeProgess}%`,
            }}
          />
        </St.Gauge>
      </St.Top>
      <St.Bottom>
        {data.sectionInfo.map((v) => {
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
                {v.videoInfo.map((l) => {
                  return (
                    <St.SectionConLi
                      key={l.videoId}
                      onClick={() => onVideoPlay(l.videoId)}
                      $active={l.videoId === param.videoId}
                    >
                      <St.SectionIcon>
                        {l.timecheck === l.videoTotalPlayTime ? (
                          <St.Check />
                        ) : (
                          <St.Play $active={l.videoId === param.videoId} />
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
