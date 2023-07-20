/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import profile from "asset/images/profile.png";
import AuthenticationNumber from "components/Login/AuthenticationNumber/AuthenticationNumber";
import * as St from "./styles";
import { Section } from "../styles";

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileUpdateForm, setProfileUpdateForm] = useState({
    email: "",
    phonenumber: "",
  });
  const userData = useSelector((state: RootState) => state.userReducer.data);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };
  return (
    <Section>
      <St.Title>프로필</St.Title>
      <St.ProfileCon>
        <St.Imgbox>
          <St.ProfileImg src={profile} alt="profile" />
        </St.Imgbox>
        <St.Rightbox>
          <St.InputWrap>
            <St.Input
              accept="image/*"
              type="file"
              placeholder="선택된 이미지 없음"
              id="imgfile"
            />
            <St.Label htmlFor="imgfile">파일선택</St.Label>
          </St.InputWrap>
          <St.Imgtext>
            <St.TextIcon />
            최대 2MB까지 업로드 가능합니다.
          </St.Imgtext>
          <St.Imgtext>
            <St.TextIcon />
            110 X 110 픽셀 이미지 사용
          </St.Imgtext>
        </St.Rightbox>
      </St.ProfileCon>
      <form onSubmit={handleSubmit}>
        <St.ProfileCon>
          <St.ProfileEm>이름</St.ProfileEm>
          <St.InputOther value={userData.name} disabled />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileEm>아이디</St.ProfileEm>
          <St.InputOther value={userData.id} disabled />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileEm>이메일</St.ProfileEm>
          <St.InputOther value={userData.email} onChange={handleChange} />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileEm>생년월일</St.ProfileEm>
          <St.InputOther value={userData.birthday} disabled />
        </St.ProfileCon>
        <St.ProfileCon>
          <St.ProfileEm>휴대폰 번호</St.ProfileEm>
          <St.InputOther value={userData.phonenumber} />
        </St.ProfileCon>
        <St.ChangeBtn onClick={() => navigate("/profile")}>확인</St.ChangeBtn>
      </form>
    </Section>
  );
};

export default ProfileUpdate;
/* eslint-disable @typescript-eslint/no-unused-vars */
