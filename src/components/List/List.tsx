/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Arrow} from 'asset';
import * as I from 'types';
import {FlexColumn} from 'style/Common';
import * as St from './styles';

const List: React.FC<I.LectureType> = ({
  category,
  lectureId,
  lectureTitle,
  lastStudyDate,
  count,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/notes/${lectureId}`);
  };

  return (
    <St.DashboardLi onClick={handleClick}>
      <FlexColumn>
        <St.LectureTitle>{lectureTitle}</St.LectureTitle>
        {category === 'notes' ? (
          <p>{`노트수 ${count} · 작성일 : ${lastStudyDate}`}</p>
        ) : (
          <p>{`답변수 ${count} · 작성일 : ${lastStudyDate}`}</p>
        )}
      </FlexColumn>
      <St.ArrowBtn>
        <Arrow />
      </St.ArrowBtn>
    </St.DashboardLi>
  );
};

export default List;
