import {styled, keyframes} from 'styled-components';

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const EmailBtn = styled(Button)<{$status: string}>`
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.mainColor};
  margin: 0.5rem 0;
  padding: 0.8rem 0;
  width: 100%;
  width: ${(props) =>
    props.$status === 'failure' || props.$status === 'confirm'
      ? '45%'
      : '100%'};
`;

// 약관동의
export const AgreementBtn = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.mainColor};
  padding: 0;
  font-size: 1rem;
`;

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

export const Modal = styled.div`
  text-align: center;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor};
  animation: ${modalShow} 0.3s;
`;
