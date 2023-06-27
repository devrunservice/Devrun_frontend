import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./styles";

const Modal = ({ modalOpen }: { modalOpen: boolean }) => {
  const navigate = useNavigate();
  if (!modalOpen) return null;

  const handleClick = () => {
    navigate(`/login`);
  };

  return (
    <St.Section>
      <St.Modal>
        <p>회원가입이 완료되었습니다.</p>
        <St.Button onClick={handleClick}>확인</St.Button>
      </St.Modal>
    </St.Section>
  );
};

export default Modal;
