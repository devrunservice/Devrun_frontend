import React, { /* useState */ } from 'react';
// import { useNavigate } from 'react-router-dom';
import {  Play } from 'asset'
import { DetailAPI } from 'types';
import * as St from './style'

interface dataProps {
  list: {
    sectionNumber: number;
    sectionTitle: string;
    sectionid: number;
    videos: {
      fileName: string | null;
      totalPlayTime: number;
      uploadDate: string | null;
      videoId: string;
      videoLink: string;
      videoNo: number;
      videoTitle: string;
    }[];
  };
  data: DetailAPI
}
const Curriculum:React.FC<dataProps> = ({list}) => {
  const listCounts = list.videos.length
  // const navigate = useNavigate();
  let total = 0
  const timeCounts = () => {
    list.videos.forEach(videoList => {
      total += parseInt((videoList.totalPlayTime / 60).toString(), 10);
    });
  };
  timeCounts();

  const watchVideo = (link:string) => {
    window.location.href = link
  }

  return (
    <St.CurriculumItem>
      <St.CurriculumItemHeader>
        <span>{list.sectionTitle}</span>
        <div>
          <span>{listCounts}강 · 총 {total}분</span>
        </div>
      </St.CurriculumItemHeader>
      <St.CurriculumHidden>
        <ul>
          {
            list.videos.map((video, index)=> (
              <St.HiddenList key={index} onClick={()=>watchVideo(video.videoLink)}>
                <div>
                  <Play/>
                  <span>{video.videoTitle}</span>
                </div>
                <div>{parseInt((video.totalPlayTime/60).toString(), 10)}분</div>
              </St.HiddenList>
            ))
          }
        </ul>
      </St.CurriculumHidden>
    </St.CurriculumItem>
  );
}

export default Curriculum;