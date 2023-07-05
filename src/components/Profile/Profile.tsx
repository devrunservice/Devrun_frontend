/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  ChangeEvent, useState } from "react";
import { IProfileBtn } from "types";
import * as St from "./style";

interface Iprofile {
  password: string;
  passwordCheck: string;
  email: string;
  number: string;
}


const index = () => {
  // 버튼 관련
  const [profileBtn, setProfileBtn] = useState<IProfileBtn>({
    email: false,
    password: false,
    number: false,
  });
  const emailBtn = () =>
    setProfileBtn((state) => ({ ...state, email: !profileBtn.email }));
  const passwordBtn = () =>
    setProfileBtn((state) => ({ ...state, password: !profileBtn.password }));
  const numberBtn = () =>
    setProfileBtn((state) => ({ ...state, number: !profileBtn.number }));
  
    // 인풋 변경
  const [profile, setProfile] = useState<Iprofile>({
    password: "",
    passwordCheck: "",
    email: "",
    number:""
  });
  const passwordChange = (e:ChangeEvent<HTMLInputElement>) => 
    setProfile((state) => ({ ...state, password:e.target.value}));
  const passwordCheckChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProfile((state) => ({ ...state, passwordCheck: e.target.value }));
  const emailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProfile((state) => ({ ...state, email: e.target.value }));
  const numberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProfile((state) => ({ ...state, number: e.target.value }));

  return (
    <St.Profile>
      <St.Title>프로필</St.Title>
      <St.ProfileCon>
        <St.Imgbox>{/* <img src="" /> */}</St.Imgbox>
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
        <St.ProfileEm>아이디</St.ProfileEm>
        <St.InputOther value="asd" disabled />
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>비밀번호</St.ProfileEm>
        <St.InputOther disabled type="password" value="asd" />
        <St.ChangeBtn
          onClick={() => passwordBtn()}
          active={profileBtn.password === true}
        >
          수정
        </St.ChangeBtn>
        {profileBtn.password && (
          <St.Hidden>
            <St.InputOther
              type="password"
              value={profile.password}
              onChange={passwordChange}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            />
            <St.InputOther
              type="password"
              value={profile.passwordCheck}
              onChange={passwordCheckChange}
              placeholder="비밀번호 재입력"
            />
          </St.Hidden>
        )}
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>이메일</St.ProfileEm>
        <St.InputOther value="asd" disabled />
        <St.ChangeBtn
          onClick={() => emailBtn()}
          active={profileBtn.email === true}
        >
          수정
        </St.ChangeBtn>
        {profileBtn.email && (
          <St.Hidden>
            <St.InputOther
              type="text"
              value={profile.email}
              onChange={emailChange}
            />
            <St.CertBtn>인증번호 전송</St.CertBtn>
          </St.Hidden>
        )}
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>전화번호</St.ProfileEm>
        <St.InputOther disabled />
        <St.ChangeBtn
          onClick={() => numberBtn()}
          active={profileBtn.number === true}
        >
          수정
        </St.ChangeBtn>
        {profileBtn.number && (
          <St.Hidden>
            <St.InputOther
              type="text"
              value={profile.number}
              onChange={numberChange}
            />
            <St.CertBtn>인증번호 전송</St.CertBtn>
          </St.Hidden>
        )}
      </St.ProfileCon>
    </St.Profile>
  );
};

export default index;
/* eslint-disable @typescript-eslint/no-unused-vars */
