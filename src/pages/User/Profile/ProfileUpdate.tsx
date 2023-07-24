/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import AuthenticationNumber from "components/Login/AuthenticationNumber/AuthenticationNumber";
import { ImageUploader } from "components";
import { SignupFormType } from "types";
import * as St from "./styles";

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userReducer.data);

  const [profileUpdateForm, setProfileUpdateForm] = useState<SignupFormType>({
    email: "",
    phonenumber: "",
    code: "",
    // 이미지 파일도 넘겨줘야함
  });

  useEffect(() => {
    setProfileUpdateForm({ ...profileUpdateForm, email: userData.email });
  }, [userData]);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setProfileUpdateForm({ ...profileUpdateForm, [name]: value });
  };

  const getAuthenticationForm = (values: SignupFormType) => {
    profileUpdateForm.phonenumber = values.phonenumber;
    profileUpdateForm.code = values.code;
    console.log(profileUpdateForm.phonenumber);
    console.log(profileUpdateForm.code);
  };

  return (
    <section>
      <St.Title>프로필</St.Title>
      <St.ProfileCon>
        <ImageUploader page="profileUpdate" />
      </St.ProfileCon>
      <form onSubmit={handleSubmit}>
        <St.ProfileCon>
          <St.ProfileP>이름</St.ProfileP>
          <St.InputOther value={userData.name} disabled />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileP>아이디</St.ProfileP>
          <St.InputOther value={userData.id} disabled />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileP>이메일</St.ProfileP>
          <St.InputOther
            name="email"
            value={profileUpdateForm.email}
            onChange={handleChange}
          />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileP>생년월일</St.ProfileP>
          <St.InputOther value={userData.birthday} disabled />
        </St.ProfileCon>
        {/* <St.ProfileP>휴대폰 번호</St.ProfileP>
          <St.InputOther
            name="phonenumber"
            value={profileUpdateForm.phonenumber}
          /> */}
        <St.Phonenumber>
          <AuthenticationNumber
            option="phonenumber"
            page="profileUpdate"
            getAuthenticationForm={getAuthenticationForm}
          />
        </St.Phonenumber>

        <St.ChangeBtn onClick={() => navigate("/profile")}>확인</St.ChangeBtn>
      </form>
    </section>
  );
};

export default ProfileUpdate;
/* eslint-disable @typescript-eslint/no-unused-vars */
