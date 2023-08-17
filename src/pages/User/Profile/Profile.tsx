/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { decode } from "utils/decode";
import useValid from "hooks/useValid";
import {
  AuthenticationNumber,
  DuplicationForm,
  ImageUploader,
} from "components";
import { MypageType, ProfileInputType } from "types";
import { Exclamation } from "asset";
import { authAxios } from "utils/instance";
import { Title, Input, ErrorMessage } from "style/Common";
import {
  getDataLoading,
  updateEmailLoading,
  updatePhonenumberLoading,
  updateProfileImageLoading,
} from "../../../redux/reducer/mypageReducer";
import * as St from "./styles";

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.mypageReducer.data);
  const errorMessage = useSelector(
    (state: RootState) => state.mypageReducer.error,
  );
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
    if (!files) {
      return;
    }
    if (files.length > 0) {
      console.log(files);
      const file = files[0];
      if (file.size > 1024 * 1024 * 2) {
        alert("이미지 용량을 초과하였습니다.");
        return;
      }

      formData.append("editimg", files[0], files[0].name);
      console.log(formData);

      const url = URL.createObjectURL(file);
      setProfileForm({ ...profileForm, profileImage: url });
      // getImage(imgUrl || "");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setProfileForm({ ...profileForm, [name]: value });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setIsInput((prev) => ({ ...prev, [name]: !prev[name] }));

    if (name === "emailBtn") {
      console.log("이메일 수정");
      dispatch(updateEmailLoading({ email: profileForm.email }));
      if (!validState.emailDuplication) {
        setIsInput((prev) => ({ ...prev, email: true }));
      } else {
        setIsInput((prev) => ({ ...prev, email: false }));
      }
    }
    // else if (name === "phonenumberBtn") {
    //   dispatch(
    //     updatePhonenumberLoading({ phonenumber: profileForm.phonenumber }),
    //   );
    //   setIsInput((prev) => ({ ...prev, phonenumber: false }));
    // }
    // else if (name === "profileImageBtn" && isInput.profileImageBtn) {
    //   console.log(formData);
    //   console.log("이미지 수정");
    //   dispatch(updateProfileImageLoading(formData));
    // }
  };

  const testClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsInput((prev) => ({ ...prev, profileImage: false }));
    console.log("이미지 수정");
    dispatch(updateProfileImageLoading(formData));
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

  useEffect(() => {
    setProfileForm({ ...profileForm, email: userData.email });
  }, [userData]);

  console.log(validState.email, validState.emailDuplication);

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

            <St.ChangeBtn name="profileImageBtn" onClick={testClick}>
              저장
            </St.ChangeBtn>
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
        <St.PhonenumberInput>
          <St.ChangeBtn
            name="emailBtn"
            onClick={handleClick}
            disabled={!validState.emailDuplication}
          >
            저장
          </St.ChangeBtn>
          <DuplicationForm
            title="이메일"
            inputName="email"
            btnName="emailDuplicationBtn"
            placeholder="이메일"
            getDuplicationForm={getDuplicationForm}
          />
          {/* <Input
            name="email"
            value={profileForm.email}
            placeholder="이메일"
            onChange={handleChange}
          />
          {errorMessage !== null && (
            <ErrorMessage>{errorMessage.message}</ErrorMessage>
          )} */}
        </St.PhonenumberInput>
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
        <St.PhonenumberInput>
          <St.ChangeBtn
            name="phonenumberBtn"
            onClick={handleClick}
            disabled={
              !validState.phonenumber && validState.code && !validState.codeBtn
            }
          >
            저장
          </St.ChangeBtn>
          <AuthenticationNumber
            page="signup"
            option="phonenumber"
            getAuthenticationForm={getAuthenticationForm}
          />
        </St.PhonenumberInput>
      )}
    </St.Section>
  );
};

export default Profile;
/* eslint-disable @typescript-eslint/no-unused-vars */
