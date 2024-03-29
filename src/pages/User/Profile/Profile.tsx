/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Exclamation} from 'asset';
import * as I from 'types';
import {mypage} from 'utils/api';
import {decode} from 'utils/decode';
import {
  AuthenticationNumber,
  DuplicationForm,
  ConfirmModal,
  UserTop,
  ImageUploader,
  Button,
} from 'components';
import {Title} from 'style/Common';
import * as St from './style';
import {
  myInfoLoading,
  updateEmailLoading,
  updatePhonenumberLoading,
  updateProfileImageLoading,
} from '../../../redux/reducer/profileReducer';
import {
  updateMessageState,
  updateValidState,
} from '../../../redux/reducer/validationReducer';
import {openModal} from '../../../redux/reducer/modalReducer';
import {logoutLoading} from '../../../redux/reducer/loginReducer';

const Profile = () => {
  const dispatch = useDispatch();

  const [modalLogic, setModalLogic] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const userInfo = useSelector((state: RootState) => state.profileReducer.data);
  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );

  const [profileForm, setProfileForm] = useState<I.MypageType>({
    profileImage: undefined,
    profilePreview: '',
    email: '',
    phonenumber: '',
    code: '',
  });

  // 수정 및 저장 버튼
  const [isInput, setIsInput] = useState<I.ProfileInputType>({
    profileImageBtn: false,
    emailBtn: false,
    phonenumberBtn: false,
  });

  // 이미지
  // const handleUpLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     if (file.size > 1024 * 1024 * 1) {
  //       dispatch(openModal('이미지 용량을 초과하였습니다.'));
  //       // alert('이미지 용량을 초과하였습니다.');
  //     } else {
  //       dispatch(updateValidState({name: 'profileImage', value: true}));
  //       setProfileForm({
  //         ...profileForm,
  //         profileImage: file,
  //         profilePreview: URL.createObjectURL(file),
  //       });
  //     }
  //   }
  // };
  const handleUpLoadImg = (file: File) => {
    dispatch(updateValidState({name: 'profileImage', value: true}));
    setProfileForm({
      ...profileForm,
      profileImage: file,
      profilePreview: URL.createObjectURL(file),
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name, id} = e.target as HTMLButtonElement;
    setModalLogic(false);
    setIsInput((prev) => ({...prev, [name]: !prev[name]}));

    if (id === 'cancelBtn') {
      setIsInput((prev) => ({...prev, [name]: false}));
    }

    const updateValidFields = (list: I.ValidFieldType[]) => {
      list.forEach((field) => {
        dispatch(updateValidState(field));
      });
    };

    if (validState.emailDuplication) {
      const updateFields = [
        {name: 'email', value: false},
        {name: 'emailDuplication', value: false},
      ];
      dispatch(updateEmailLoading({email: profileForm.email}));
      updateValidFields(updateFields);
    } else if (validState.checkCodeBtn) {
      const updateFields = [
        {name: 'phonenumber', value: false},
        {name: 'code', value: false},
        {name: 'codeBtn', value: false},
        {name: 'checkCodeBtn', value: false},
      ];
      dispatch(
        updatePhonenumberLoading({
          phonenumber: profileForm.phonenumber,
          code: profileForm.code,
        })
      );
      updateValidFields(updateFields);
      dispatch(updateMessageState({name: 'codeMessage', value: ''}));
    } else if (validState.profileImage) {
      const formData = new FormData();
      formData.append('editimg', profileForm.profileImage as unknown as Blob);
      dispatch(updateProfileImageLoading(formData));
      updateValidFields([{name: 'profileImage', value: false}]);
    }
  };

  const handleDelete = async () => {
    setModalLogic(true);
    await dispatch(
      openModal('회원을 탈퇴하면 재가입 할 수 없습니다./탈퇴 하시겠습니까?')
    );
  };

  const handleConfirm = async () => {
    if (modalLogic) {
      setModalLogic(false);
      try {
        const response = await mypage.deleteAccount();
        if (response.status === 200) {
          dispatch(openModal('탈퇴가 완료 되었습니다.'));
          setDeleteAccount(true);
          handleConfirm();
        }
      } catch (error) {
        dispatch(
          openModal('알 수 없는 에러가 발생했습니다./다시 시도해주세요.')
        );
      }
    }
    if (deleteAccount) {
      dispatch(logoutLoading());
    }
  };

  const getAuthenticationForm = (values: I.MypageType) => {
    profileForm.phonenumber = values.phonenumber;
    profileForm.code = values.code;
  };

  const getDuplicationForm = (value: I.MypageType) => {
    profileForm.email = value.email;
    // setProfileForm((prev) => ({ ...prev, email: value }));
  };

  useEffect(() => {
    const userId = decode('accessToken');
    dispatch(myInfoLoading({id: userId}));
    setProfileForm((prev) => ({
      ...prev,
      profilePreview: userInfo.profilePreview,
    }));

    // if (deleteAccount) {
    //   dispatch(logoutLoading());
    // }
  }, [userInfo, deleteAccount]);

  return (
    <St.Section>
      <UserTop title="프로필" />
      <St.InputField>
        {!isInput.profileImageBtn ? (
          <St.InputWrapper>
            <St.Imgbox>
              <img src={userInfo.profilePreview} alt="profile" />
            </St.Imgbox>
            <St.ChangeBtn name="profileImageBtn" onClick={handleClick}>
              수정
            </St.ChangeBtn>
          </St.InputWrapper>
        ) : (
          <>
            <ImageUploader page="profileUpdate" onUpLoadImg={handleUpLoadImg} />
            {/* <St.UploadArea>
              <St.Imgbox>
                <img src={profileForm.profilePreview} alt="updated profile" />
              </St.Imgbox>
              <div>
                <St.ShortInput
                  onChange={handleChangeImage}
                  accept="image/*"
                  id="uploader"
                  type="file"
                  placeholder="선택된 이미지 없음"
                />
                <St.ImageBtn htmlFor="uploader">파일선택</St.ImageBtn>
                <St.InputNotice>
                  <Exclamation />
                  최대 1MB까지 업로드 가능합니다.
                </St.InputNotice>
                <St.InputNotice>
                  <Exclamation />
                  528 X 297 픽셀 이미지 사용
                </St.InputNotice>
              </div>
            </St.UploadArea> */}

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
          <St.P>{userInfo.name}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />
      <St.InputField>
        <Title>아이디</Title>
        <St.InputWrapper>
          <St.P>{userInfo.id}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />

      {!isInput.emailBtn ? (
        <St.InputField>
          <Title>이메일</Title>
          <St.InputWrapper>
            <St.P>{userInfo.email}</St.P>
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
            placeholder="이메일"
            getDuplicationForm={getDuplicationForm}
          />
        </St.EditInput>
      )}

      <St.Hr />
      <St.InputField>
        <Title>생년월일</Title>
        <St.InputWrapper>
          <St.P>{userInfo.birthday}</St.P>
        </St.InputWrapper>
      </St.InputField>
      <St.Hr />
      {!isInput.phonenumberBtn ? (
        <St.InputField>
          <Title>휴대폰번호</Title>
          <St.InputWrapper>
            <St.P>{userInfo.phonenumber}</St.P>
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
            page="profileUpdate"
            option="phonenumber"
            getAuthenticationForm={getAuthenticationForm}
          />
        </St.EditInput>
      )}
      <St.DeleteBtnWrapper>
        <St.DeleteBtn onClick={handleDelete}>회원 탈퇴</St.DeleteBtn>
      </St.DeleteBtnWrapper>
      <ConfirmModal onConfirm={handleConfirm} />
    </St.Section>
  );
};

export default Profile;
/* eslint-disable @typescript-eslint/no-unused-vars */
