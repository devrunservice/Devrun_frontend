import { styled, keyframes } from "styled-components";

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

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
  cursor: pointer;
`;
