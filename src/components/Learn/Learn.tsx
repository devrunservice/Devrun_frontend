/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LearningType} from 'types';
import * as St from './style';

const Learn: React.FC<LearningType> = ({
  title,
  thumbnail,
  rating,
  lectureUrl,
}) => {
  const navigate = useNavigate();
  return (
    <St.LearnLi onClick={() => navigate(`${lectureUrl}`)}>
      <St.ImgWrap>
        <St.Img src={thumbnail} alt="강의제목" />
      </St.ImgWrap>

      <St.TitleText>{title}</St.TitleText>

      <St.TextWrap>
        <p>{`진도율 ( ${rating}% )`}</p>
        <p>기한 : 무제한</p>
      </St.TextWrap>
      <St.Gauge style={{background: '#5F4B8B', width: `${rating}%`}} />
    </St.LearnLi>
  );
};

export default Learn;
