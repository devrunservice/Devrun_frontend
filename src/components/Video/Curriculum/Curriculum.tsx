import React from "react";
import * as St from "./style"

interface ICurriculum {
  onCurriculum: ()=>void;
}



const Curriculum = ({ onCurriculum }: ICurriculum) => {
  return (
    <>
      <St.Top>
        <St.Title>
          커리큘럼 <St.Deletes onClick={() => onCurriculum()} />
        </St.Title>
        <St.SubTitle>강의 대타이틀 부분</St.SubTitle>
        <St.SubContent>
          <p>
            수강기한 : <span>무제한</span>
          </p>
          <p>
            수강률 : <span>4.7%</span>
          </p>
          <p>
            수강시간 : <span>4:23:20</span>
          </p>
          <p>
            강의시간 : <span>4:23:20</span>
          </p>
        </St.SubContent>
        <St.Gauge>
          <span style={{ background: "#5F4B8B", width: "50%" }} />
        </St.Gauge>
      </St.Top>
      <St.Bottom>
        <St.SectionTitle>
          <p>
            <span>섹션 0</span>
            <span>8강 / 총시간</span>
          </p>
          <em>섹션타이틀</em>
        </St.SectionTitle>
      </St.Bottom>
    </>
  );
};
export default Curriculum;