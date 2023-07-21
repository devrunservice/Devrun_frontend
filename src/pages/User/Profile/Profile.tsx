/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import profile from "asset/images/profile.png";
import { decode } from "utils/decode";
import { userTmiPending } from "../../../redux/reducer/userReducer";
import * as St from "./styles";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state: RootState) => state.userReducer.data);

  useEffect(() => {
    const userId = decode("accessToken");
    dispatch(userTmiPending(userId));
  }, []);

  return (
    <section>
      <St.Title>프로필</St.Title>
      <St.ProfileCon>
        <St.Imgbox>
          <St.ProfileImg src={profile} alt="profile" />
        </St.Imgbox>
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
      <St.ChangeBtn onClick={() => navigate("/profileupdate")}>
        수정
      </St.ChangeBtn>
    </section>
  );
};

export default Profile;
/* eslint-disable @typescript-eslint/no-unused-vars */
