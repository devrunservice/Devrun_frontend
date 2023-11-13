/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LearningType} from 'types';
import {mypage} from 'utils/api';
import * as St from './style';

const Learn: React.FC<LearningType> = ({
  id,
  title,
  thumbnail,
  progressRate,
}) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await mypage.getVideoId(id);
    navigate(`/videoView/${id}/${response.data}`);
  };

  return (
    <St.LearnLi onClick={handleClick}>
      <St.ImgWrap>
        <St.Img src={thumbnail} alt="강의제목" />
      </St.ImgWrap>

      <St.TitleText>{title}</St.TitleText>

      <St.TextWrap>
        <p>{`진도율 ( ${progressRate}% )`}</p>
        <p>기한 : 무제한</p>
      </St.TextWrap>
      <St.Gauge style={{background: '#5F4B8B', width: `${progressRate}%`}} />
    </St.LearnLi>
  );
};

export default Learn;
