/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Arrow} from 'asset';
import * as I from 'types';
import {FlexColumn} from 'style/Common';
import * as St from './styles';

const List: React.FC<I.NoteQuestionListType> = ({
  page,
  category,
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
    <St.ListLi onClick={() => handleClick()}>
      {page === "notes" && (
        <St.ImageWrapper>
          <St.Image src={lectureThumbnail} alt="thumbnail" />
        </St.ImageWrapper>
      )}
      <St.InfoWrapper $page={page}>
        <St.LectureTitle>{lectureTitle}</St.LectureTitle>
        {category === "note" && (
          <div>{`노트수 ${count} ∙ 작성일 : ${lastStudyDate}`}</div>
        )}
        {category === "question" && <div>{`작성일 : ${lastStudyDate}`}</div>}
      </St.InfoWrapper>
      <St.RightArrow />
    </St.ListLi>
  );
};

export default List;
