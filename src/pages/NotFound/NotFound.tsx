import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as St from './style';

const NotFound = () => {
  const navigate = useNavigate();
  const mainBtn = () => navigate('/');
  return (
    <St.NotBg>
      <St.NotText>
        <St.NotTitle>해당 페이지를 찾지 못했습니다.</St.NotTitle>
        <St.NotContent>
          방문하시려는 페이지의 주소가 잘못 입력되었거나,
          <br /> 변경 혹은 삭제되어 찾을 수 없습니다.
          <br /> 서비스 이용에 불편을 드려 죄송합니다.
        </St.NotContent>
        <St.NotButton onClick={() => mainBtn()}>홈으로 이동하기</St.NotButton>
      </St.NotText>
    </St.NotBg>
  );
};

export default NotFound;
