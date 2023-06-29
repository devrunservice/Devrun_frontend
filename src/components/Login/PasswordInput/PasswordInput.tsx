import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "style/Common";
import * as St from "./styles";

interface PasswordInputProps {
  name?: string;
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const handleClick = () => {
    setShowPwd(!showPwd);
  };

  return (
    <St.PwdWrapper>
      <Input
        type={showPwd ? "text" : "password"}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <St.Icons onClick={handleClick}>
        {showPwd ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </St.Icons>
    </St.PwdWrapper>
  );
};

export default PasswordInput;
