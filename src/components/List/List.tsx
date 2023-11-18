/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as I from 'types';
import * as St from './styles';

const List: React.FC<I.NoteQuestionListType> = ({
  page,
  category,
  lectureId,
  lectureTitle,
  lectureThumbnail,
  lastStudyDate,
  count,
  questionId,
  questionTitle,
  questionDate,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (category === 'note') {
      navigate(`/notes/${lectureId}`);
    } else {
      navigate(`/questions/${questionId}`);
    }
  };

  return (
    <St.ListLi onClick={() => handleClick()}>
      {page === 'notes' && (
        <St.ImageWrapper>
          <St.Image src={lectureThumbnail} alt="thumbnail" />
        </St.ImageWrapper>
      )}
      <St.InfoWrapper $page={page}>
        <St.LectureTitle>
          {category === 'note' ? lectureTitle : questionTitle}
        </St.LectureTitle>
        {category === 'note' && (
          <div>{`노트수 ${count} ∙ 작성일 : ${lastStudyDate}`}</div>
        )}
        {category === 'question' && <div>{`작성일 : ${questionDate}`}</div>}
      </St.InfoWrapper>
      <St.RightArrow />
    </St.ListLi>
  );
};

export default List;
