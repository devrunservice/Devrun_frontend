import React from 'react';
import * as St from './style';

interface IBtn {
  name?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  width?: string;
  lineHeight?: string;
  text: string;
  onBtn: (name: string) => void;
}

const Button = ({
  name,
  text,
  color,
  backgroundColor,
  border,
  width,
  lineHeight,
  onBtn,
}: IBtn) => {
  const handleClick = () => {
    if (name) {
      onBtn(name);
    }
  };

  return (
    <St.Button
      name={name}
      onClick={handleClick}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      border={border}
      lineHeight={lineHeight}
    >
      {text}
    </St.Button>
  );
};

export default Button;
