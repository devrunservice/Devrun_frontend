import React, {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import * as St from './styles';

interface PasswordInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  isPwd?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<PasswordInputProps> = ({
  type,
  value,
  placeholder,
  isPwd,
  handleChange,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const handleClick = () => {
    setShowPwd(!showPwd);
  };

  return (
    <St.InputWrapper>
      {!isPwd ? (
        <St.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <St.Input
          type={showPwd ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      {isPwd && (
        <St.Icons onClick={handleClick}>
          {showPwd ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </St.Icons>
      )}
    </St.InputWrapper>
  );
};

export default Input;
