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
    <St.LectureLi onClick={() => handleClick()}>
      <St.ImageWrapper>
        <St.Image src={lectureThumbnail} alt="thumbnail" />
      </St.ImageWrapper>
      <St.NoteWrapper>
        <St.LectureTitle>{lectureTitle}</St.LectureTitle>
        <St.InfoWrapper>
          <div>{`노트수 ${count}`}</div>
          <div>{lastStudyDate}</div>
        </St.InfoWrapper>
      </St.NoteWrapper>
      <St.RightArrow />
    </St.LectureLi>
  );
};

export default LectureTable;
