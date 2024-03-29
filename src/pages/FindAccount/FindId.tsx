import React from 'react';
// import {BrandLogo} from 'asset';
import {useNavigate} from 'react-router-dom';
import FindAccount from 'components/FindAccount/FindAccount';
import * as St from './style';

const FindId = () => {
  const navigate = useNavigate();

  const moveToFindId = () => {
    navigate('/findaccount/id');
  };

  const moveToFindPassword = () => {
    navigate('/findaccount/password');
  };
  return (
    <St.Section>
      <St.Container>
        <St.H1>아이디 찾기</St.H1>
        <St.Menu>
          <St.MenuIdBtn className="id" onClick={moveToFindId}>
            아이디 찾기
          </St.MenuIdBtn>
          <St.MenuPasswordBtn className="id" onClick={moveToFindPassword}>
            비밀번호 찾기
          </St.MenuPasswordBtn>
        </St.Menu>
        <FindAccount findOption="id" />
      </St.Container>
    </St.Section>
  );
};

export default FindId;
