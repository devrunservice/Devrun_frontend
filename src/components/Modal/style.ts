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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > button:nth-child(1) {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgGrayColor};
  }

  /* & > button:nth-child(2) {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.mainColor};
  } */
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const P = styled.p`
  color: ${(props) => props.theme.black};
  margin-bottom: 0.6rem;
`;


export const ModalWrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(0,0,0,0.4);
  z-index: 500;
`
export const PositionSet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const ModalInner = styled.div`
  background: #fff;
  padding: 10px;
  width: 30%;
  min-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
  p {
    margin-bottom: 15px;
  }
`
export const ModalButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const AcceptButton = styled.button`
  background: #5F4B8B;
  color: #fff;
  border: 1px solid #5F4B8B;
  font-size: 14px;
  width: 95px;
  border-radius: 5px;
  height: 35px;
`
export const CancelButton = styled.button`
  background: #fff;
  color: #676767;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 95px;
  border-radius: 5px;
  height: 35px;
`
