/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import useValid from "hooks/useValid";
import { ImageUploader, PasswordInput, AuthenticationNumber } from "components";
import { SignupFormType } from "types";
import { Title, ErrorMessage, Input, SuccessMessage } from "style/Common";
import * as St from "./styles";

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userReducer.data);

  const [profileUpdateForm, setProfileUpdateForm] = useState<SignupFormType>({
    password: "",
    email: "",
    phonenumber: "",
    code: "",
    // 이미지 파일도 넘겨줘야함
  });

  useEffect(() => {
    setProfileUpdateForm({ ...profileUpdateForm, email: userData.email });
  }, [userData]);

  const { validMessage, isValid, checkDuplicated } =
    useValid(profileUpdateForm);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    navigate("/profile");
    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setProfileUpdateForm({ ...profileUpdateForm, [name]: value });
  };

  const getAuthenticationForm = (values: SignupFormType) => {
    profileUpdateForm.phonenumber = values.phonenumber;
    profileUpdateForm.code = values.code;
  };

  return (
    <St.Section>
      <St.Title>프로필</St.Title>
      <St.InputField>
        <ImageUploader page="profileUpdate" />
      </St.InputField>
      <form onSubmit={handleSubmit}>
        <St.InputField>
          <Title>이름</Title>
          <Input value={userData.name} disabled />
        </St.InputField>
        <St.InputField>
          <Title>아이디</Title>
          <Input value={userData.id} disabled />
        </St.InputField>
        <St.InputField>
          <Title>비밀번호</Title>
          <PasswordInput
            name="password"
            value={profileUpdateForm.password}
            placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            onChange={handleChange}
          />
          {profileUpdateForm.password && !isValid.password && (
            <ErrorMessage>{validMessage.passwordMessage}</ErrorMessage>
          )}
          <PasswordInput
            name="passwordConfirm"
            value={profileUpdateForm.passwordConfirm}
            placeholder="비밀번호 재입력"
            onChange={handleChange}
          />
          {profileUpdateForm.password && !isValid.passwordConfirm && (
            <ErrorMessage>{validMessage.passwordConfirmMessage}</ErrorMessage>
          )}
        </St.InputField>
        <St.InputField>
          <Title>이메일</Title>
          <St.Field>
            <Input
              type="email"
              name="email"
              value={profileUpdateForm.email}
              placeholder="이메일"
              onChange={handleChange}
            />
            <St.Button
              type="button"
              name="emailDuplicationBtn"
              onClick={() =>
                checkDuplicated(
                  "email",
                  "이메일",
                  profileUpdateForm.email || "",
                )
              }
              disabled={isValid.email === false}
            >
              중복확인
            </St.Button>
          </St.Field>
          {profileUpdateForm.email && isValid.email === false && (
            <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
          )}
          {profileUpdateForm.email && isValid.emailDuplication && (
            <SuccessMessage>
              {validMessage.emailDuplicationMessage}
            </SuccessMessage>
          )}
          {profileUpdateForm.email !== "" && !isValid.emailDuplication && (
            <ErrorMessage>{validMessage.emailDuplicationMessage}</ErrorMessage>
          )}
        </St.InputField>
        <St.InputField>
          <Title>생년월일</Title>
          <Input value={userData.birthday} disabled />
        </St.InputField>
        <St.Phonenumber>
          <AuthenticationNumber
            option="phonenumber"
            page="profileUpdate"
            getAuthenticationForm={getAuthenticationForm}
          />
        </St.Phonenumber>

        <St.ChangeBtn onClick={handleClick}>확인</St.ChangeBtn>
      </form>
    </St.Section>
  );
};

export default ProfileUpdate;
/* eslint-disable @typescript-eslint/no-unused-vars */
