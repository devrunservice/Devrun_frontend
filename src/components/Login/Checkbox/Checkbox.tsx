import React from "react";
import * as St from "./styles";

interface CheckboxInputProps {
  id: string;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxInputProps> = ({ id, checked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <St.Li>
      <St.Checkbox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="terms-of-service">서비스 이용약관 동의 (필수)</label>
    </St.Li>
  );
};

export default Checkbox;
