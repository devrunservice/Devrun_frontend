import React from 'react';
import * as St from './style';

interface star {
  stars: boolean[];
  setStars: React.Dispatch<React.SetStateAction<boolean[]>>;
  text: string;
}

const Grade = ({stars, setStars, text}: star) => {
  const handleStarClick = (index: number) => {
    setStars((prevState) => prevState.map((_, i) => i < index + 1));
  };

  return (
    <St.GradeWrap>
      <div>
        {stars?.map((filled, index) => (
          <button key={index} onClick={() => handleStarClick(index)}>
            {filled ? <St.StarOn /> : <St.StarOff />}
          </button>
        ))}
      </div>
      <p>{text}</p>
    </St.GradeWrap>
  );
};
export default Grade;
