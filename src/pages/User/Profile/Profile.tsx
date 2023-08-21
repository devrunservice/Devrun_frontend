/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { decode } from "utils/decode";
import { AuthenticationNumber, DuplicationForm } from "components";
import { MypageType, ProfileInputType, ValidFieldType } from "types";
import { Exclamation } from "asset";
import { Title } from "style/Common";
import {
  getDataLoading,
  updateEmailLoading,
  updatePhonenumberLoading,
  updateProfileImageLoading,
} from "../../../redux/reducer/mypageReducer";
import {
  updateMessageState,
  updateValidState,
} from "../../../redux/reducer/validationReducer";

import * as St from "./styles";

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.mypageReducer.data);
  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState,
  );

  const [profileForm, setProfileForm] = useState<MypageType>({
    profileImage: "",
    email: "",
    phonenumber: "",
    code: "",
  });

  // 수정 및 저장 버튼
  const [isInput, setIsInput] = useState<ProfileInputType>({
    profileImageBtn: false,
    emailBtn: false,
    phonenumberBtn: false,
  });

  // 이미지
  const formData = new FormData();

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log(files);
    console.log(formData);
    if (!files) {
      return;
    }
    if (files.length > 0) {
      console.log(files);
      const file = files[0];
      console.log(file);
      if (file.size > 1024 * 1024 * 2) {
        alert("이미지 용량을 초과하였습니다.");
        return;
      }

      dispatch(updateValidState({ name: "profileImage", value: true }));

      formData.append("editimg", file);
      console.log(formData);

      const url = URL.createObjectURL(file);
      setProfileForm({ ...profileForm, profileImage: url });
      // getImage(imgUrl || "");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, id } = e.target as HTMLButtonElement;
    console.log(id);
    setIsInput((prev) => ({ ...prev, [name]: !prev[name] }));

    if (id === "cancelBtn") {
      setIsInput((prev) => ({ ...prev, [name]: false }));
    }

    const updateValidFields = (list: ValidFieldType[]) => {
      list.forEach((field) => {
        dispatch(updateValidState(field));
      });
    };

    if (validState.emailDuplication) {
      console.log("이메일 수정 완료");
      const updateFields = [
        { name: "email", value: false },
        { name: "emailDuplication", value: false },
      ];
      dispatch(updateEmailLoading({ email: profileForm.email }));
      updateValidFields(updateFields);
    } else if (validState.checkCodeBtn) {
      console.log("휴대폰 번호 수정 완료");
      const updateFields = [
        { name: "phonenumber", value: false },
        { name: "code", value: false },
        { name: "codeBtn", value: false },
        { name: "checkCodeBtn", value: false },
      ];
      dispatch(
        updatePhonenumberLoading({
          phonenumber: profileForm.phonenumber,
          code: profileForm.code,
        }),
      );
      updateValidFields(updateFields);
      dispatch(updateMessageState({ name: "codeMessage", value: "" }));
    } else if (validState.profileImage) {
      dispatch(updateProfileImageLoading(formData));
      dispatch(updateValidState({ name: "profileImage", value: false }));
    }
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const getAuthenticationForm = (values: MypageType) => {
    profileForm.phonenumber = values.phonenumber;
    profileForm.code = values.code;
  };

  const getDuplicationForm = (value: MypageType) => {
    profileForm.email = value.email;
    // setProfileForm((prev) => ({ ...prev, email: value }));
  };

  useEffect(() => {
    const userId = decode("accessToken");
    dispatch(getDataLoading({ id: userId }));
  }, []);

  return (
    <St.Section>
      <St.Title>프로필</St.Title>
      <St.InputField>
        {!isInput.profileImageBtn ? (
          <St.InputWrapper>
            <St.Imgbox>
              <img src={userData.profileImage} alt="profile" />
            </St.Imgbox>
            <St.ChangeBtn name="profileImageBtn" onClick={handleClick}>
              수정
            </St.ChangeBtn>
          </St.InputWrapper>
        ) : (
          <>
            {/* <ImageUploader page="profileUpdate" /> */}
            <St.UploadArea>
              <St.Imgbox>
                <img src={profileForm.profileImage} alt="updated profile" />
              </St.Imgbox>
              <div>
                <St.ShortInput
                  onChange={uploadImg}
                  accept="image/*"
                  id="uploader"
                  type="file"
                  placeholder="선택된 이미지 없음"
                />
                <St.ImageBtn htmlFor="uploader">파일선택</St.ImageBtn>
                <St.InputNotice>
                  <Exclamation />
                  최대 2MB까지 업로드 가능합니다.
                </St.InputNotice>
                <St.InputNotice>
                  <Exclamation />
                  528 X 297 픽셀 이미지 사용
                </St.InputNotice>
              </div>
            </St.UploadArea>

            <St.EditBtn>
              <St.CancelBtn
                id="cancelBtn"
                name="profileImageBtn"
                onClick={handleClick}
              >
                취소
              </St.CancelBtn>
              <St.ChangeBtn
                name="profileImageBtn"
                onClick={handleClick}
                disabled={!validState.profileImage}
              >
                저장
              </St.ChangeBtn>
            </St.EditBtn>
          </>
        )}
      </St.InputField>

      <St.InputField>
        <Title>이름</Title>
        <St.InputWrapper>
          <St.P>{userData.name}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />
      <St.InputField>
        <Title>아이디</Title>
        <St.InputWrapper>
          <St.P>{userData.id}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />

      {!isInput.emailBtn ? (
        <St.InputField>
          <Title>이메일</Title>
          <St.InputWrapper>
            <St.P>{userData.email}</St.P>
            <St.ChangeBtn name="emailBtn" onClick={handleClick}>
              수정
            </St.ChangeBtn>
          </St.InputWrapper>
        </St.InputField>
      ) : (
        <St.EditInput>
          <div>
            <St.CancelBtn id="cancelBtn" name="emailBtn" onClick={handleClick}>
              취소
            </St.CancelBtn>
            <St.ChangeBtn
              name="emailBtn"
              onClick={handleClick}
              disabled={!validState.email || !validState.emailDuplication}
            >
              저장
            </St.ChangeBtn>
          </div>

          <DuplicationForm
            title="이메일"
            inputName="email"
            btnName="emailDuplicationBtn"
            placeholder="이메일"
            getDuplicationForm={getDuplicationForm}
          />
        </St.EditInput>
      )}

      <St.Hr />
      <St.InputField>
        <Title>생년월일</Title>
        <St.InputWrapper>
          <St.P>{userData.birthday}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />
      {!isInput.phonenumberBtn ? (
        <St.InputField>
          <Title>휴대폰번호</Title>
          <St.InputWrapper>
            <St.P>{userData.phonenumber}</St.P>
            <St.ChangeBtn name="phonenumberBtn" onClick={handleClick}>
              수정
            </St.ChangeBtn>
          </St.InputWrapper>
        </St.InputField>
      ) : (
        <St.EditInput>
          <div>
            <St.CancelBtn
              id="cancelBtn"
              name="phonenumberBtn"
              onClick={handleClick}
            >
              취소
            </St.CancelBtn>
            <St.ChangeBtn
              name="phonenumberBtn"
              onClick={handleClick}
              disabled={
                !validState.phonenumber ||
                !validState.code ||
                !validState.codeBtn ||
                !validState.checkCodeBtn
              }
            >
              저장
            </St.ChangeBtn>
          </div>

          <AuthenticationNumber
            page="signup"
            option="phonenumber"
            getAuthenticationForm={getAuthenticationForm}
          />
        </St.EditInput>
      )}
    </St.Section>
  );
};

export default Profile;
/* eslint-disable @typescript-eslint/no-unused-vars */
