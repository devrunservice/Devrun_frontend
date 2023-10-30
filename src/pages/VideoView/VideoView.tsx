import React, { useCallback, useState } from "react";
import { PiArrowLineLeftBold, PiArrowLineRightBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { LuFolderEdit, LuStickyNote } from "react-icons/lu";
import { Curriculum, Note } from "components";
import * as St from "./style"




const VideoView = ()=>{
    const [open, setOpen] = useState({
      curriculumOpen:false,
      note:false
    });
    const onCurriculum = useCallback(() => {
      setOpen({ ...open, curriculumOpen: !open.curriculumOpen, note:false });
    }, [open]);
    const onNote = useCallback(() => {
      setOpen({ ...open, curriculumOpen: false, note: !open.note });
    }, [open]);
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
            <Curriculum onCurriculum={onCurriculum} />
          </St.CurriculumWrap>
        )}
        {open.note && (
          <St.CurriculumWrap>
            <Note onNote={onNote} />
          </St.CurriculumWrap>
        )}
      </St.VideoViewWrap>
    );
}
export default VideoView;