import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as St from "./styles";
import { Input } from "style/Common";

interface PasswordInputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
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
