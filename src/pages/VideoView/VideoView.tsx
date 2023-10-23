import React from "react";
import { PiArrowLineLeftBold, PiArrowLineRightBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import * as St from "./style"



const VideoView = ()=>{
    console.log("콘솔")
    return (
      <St.VideoViewWrap>
        <St.Left>
          <St.Top>
            <St.TopLeft>
              <St.Back>
                <St.BiArrow />
              </St.Back>
              <St.Title>타이틀 </St.Title>
            </St.TopLeft>
            <St.TopRight>
              <p>
                수강률<span>4.7%</span>
              </p>
              <p>
                수강시간<span>4:23:20</span>
              </p>
              <p>
                강의시간<span>72:34:51</span>
              </p>
            </St.TopRight>
          </St.Top>
          <St.Center>
            <iframe
              src="https://www.youtube.com/embed/plme_oDCpHc?si=LMZPAoik7J_Mzcr4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </St.Center>
          <St.Bottom>
            <button>
              <PiArrowLineLeftBold />
              이전 강의
            </button>
            <button>
              <BiLike />
              좋아요
            </button>
            <button>
              다음 강의
              <PiArrowLineRightBold />
            </button>
          </St.Bottom>
        </St.Left>
        <St.Right>탭버튼</St.Right>
      </St.VideoViewWrap>
    );
}
export default VideoView;