/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import * as St from "./style";


export interface IProfile{
  email:string
}

const index = () => {
  const [profile, setProfile] = useState<IProfile>({
    email: "",
  });
  const profileChange = ()=>{
    setProfile(profile);
  }
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
        <St.InputId value="asd" disabled />
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>이메일</St.ProfileEm>
        <St.InputOther value="asd" disabled />
        <St.ChangeBtn onChange={profileChange}>수정</St.ChangeBtn>
        {profile.email && (
          <>
            <St.InputOther value="asd" disabled />
            <St.ChangeBtn>인증번호 전송</St.ChangeBtn>
          </>
        )}
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>비밀번호</St.ProfileEm>
        <St.InputOther value="asd" disabled />
        <St.ChangeBtn>수정</St.ChangeBtn>
      </St.ProfileCon>
      <St.ProfileCon>
        <St.ProfileEm>전화번호</St.ProfileEm>
        <St.InputOther value="asd" disabled />
        <St.ChangeBtn>수정</St.ChangeBtn>
      </St.ProfileCon>
    </St.Profile>
  );
};

export default index;
/* eslint-disable @typescript-eslint/no-unused-vars */
