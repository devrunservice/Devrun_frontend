/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Arrow} from 'asset';
import * as I from 'types';
import * as St from '../style';

const LectureTable: React.FC<I.LectureType> = ({
  lectureId,
  lectureTitle,
  lectureThumbnail,
  lastStudyDate,
  count,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/notes/${lectureId}`);
  };

  return (
    <St.LectureLi onClick={handleClick}>
      <St.LectureInfo>
        <St.ImageWrapper>
          <img src={lectureThumbnail} alt="lectureThumbnail" />
        </St.ImageWrapper>
        <div>
          <St.LectureTitle>{lectureTitle}</St.LectureTitle>
          <div>{`노트수 ${count} | 최근학습일 : ${lastStudyDate}`}</div>
        </div>
      </St.LectureInfo>
      <St.ArrowBtn>
        <Arrow />
      </St.ArrowBtn>
    </St.LectureLi>
  );
};

export default LectureTable;
