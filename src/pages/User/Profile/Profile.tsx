/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import profile from "asset/images/profile.png";
import { Modal } from "components";
import { Title, Input } from "style/Common";
import { openModal } from "../../../redux/reducer/modalReducer";
import * as St from "./styles";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state: RootState) => state.userReducer.data);

  return (
    <St.Section>
      <St.Title>프로필</St.Title>
      <St.InputField>
        <St.Imgbox>
          <St.ProfileImg src={profile} alt="profile" />
        </St.Imgbox>
      </St.InputField>
      <St.InputField>
        <Title>이름</Title>
        <Input value={userData.name} disabled />
      </St.InputField>
      <St.InputField>
        <Title>아이디</Title>
        <Input value={userData.id} disabled />
      </St.InputField>
      <St.InputField>
        <Title>이메일</Title>
        <Input value={userData.email} disabled />
      </St.InputField>
      <St.InputField>
        <Title>생년월일</Title>
        <Input value={userData.birthday} disabled />
      </St.InputField>
      <St.InputField>
        <Title>휴대폰 번호</Title>
        <Input value={userData.phonenumber} disabled />
      </St.InputField>
      <St.ChangeBtn onClick={() => dispatch(openModal(""))}>수정</St.ChangeBtn>
      <Modal page="profileUpdate" />
    </St.Section>
  );
};

export default Profile;
/* eslint-disable @typescript-eslint/no-unused-vars */
