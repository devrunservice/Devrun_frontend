import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { /* ArrowBottom, */ Play } from 'asset'
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
  const [count, setCount] = useState(0)
  const listCounts = list.videos.length
  const navigate = useNavigate();
  let total = 0
  const timeCounts = () => {
    list.videos.forEach(list=> (
      total += parseInt(list.totalPlayTime/60)
    ))
  }
  timeCounts()

  const watchVideo = (link:string) => {
    //시청 페이지 완료시 navigate 이용
    window.location.href = link
  }

  return (
    <St.CurriculumItem>
      <St.CurriculumItemHeader>
        <span>{list.sectionTitle}</span>
        <div>
          <span>{listCounts}강 · 총 {total}분</span>
          {/* <ArrowBottom/> */}
        </div>

      </St.CurriculumItemHeader>
      <St.CurriculumHidden>
        <ul>
          {
            list.videos.map((list,index)=> (
              <St.HiddenList list={list} key={index} onClick={()=>watchVideo(list.videoLink)}>
                <div>
                  <Play/>
                  <span>{list.videoTitle}</span>
                </div>
                <div>{parseInt(list.totalPlayTime/60)}분</div>
              </St.HiddenList>
            ))
          }
          {/* <St.HiddenList >
            <div>
              <Play/>
              <span>프론트엔드...</span>
            </div>
            <div>19:22</div>
          </St.HiddenList> */}
        </ul>
      </St.CurriculumHidden>
    </St.CurriculumItem>
  )
}

export default Curriculum;