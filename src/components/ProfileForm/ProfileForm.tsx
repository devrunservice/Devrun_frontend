/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { Title } from "style/Common";
import * as St from "./styles";

interface ProfileType {
  id: string;
  name: string;
  email: string;
  birthday: string;
}

const ProfileForm = (key: number, userData: string) => {
  const [isInput, setIsInput] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setIsInput((prev) => !prev);
  };

  return (
    <St.InputField key={key}>
      <Title>이름</Title>
      <St.InputWrapper>
        {!isInput ? <St.P>{userData}</St.P> : <St.InputForm value={userData} />}
        {isInput ? (
          <St.ChangeBtn name="nameBtn" onClick={handleClick}>
            저장
          </St.ChangeBtn>
        ) : (
          <St.ChangeBtn name="nameBtn" onClick={handleClick}>
            수정
          </St.ChangeBtn>
        )}
      </St.InputWrapper>
    </St.InputField>
  );
};

export default ProfileForm;
