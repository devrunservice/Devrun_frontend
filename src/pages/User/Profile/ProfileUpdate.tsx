/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import profile from "asset/images/profile.png";
import * as St from "./styles";
import { Section } from "../styles";

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userReducer.data);

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
        <St.InputOther value={userData.email} disabled />
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>생년월일</St.ProfileEm>
        <St.InputOther value={userData.birthday} disabled />
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>휴대폰 번호</St.ProfileEm>
        <St.InputOther value={userData.phonenumber} disabled />
      </St.ProfileCon>
      <St.ChangeBtn onClick={() => navigate("/profile")}>확인</St.ChangeBtn>
    </Section>
  );
};

export default ProfileUpdate;
/* eslint-disable @typescript-eslint/no-unused-vars */
