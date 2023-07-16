import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
` 
export const ModalWrap = styled.div`
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid #ddd;
  z-index: 200;
  padding: 30px;
  width:50%;
  border-radius: 10px;
  span {
    font-size: 13px;
    display: inline-block;
    margin-bottom: 10px;
  }
`
export const ModalSection = styled.div`
  margin-bottom: 20px;
  
  p {
    font-weight: 600;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    outline-color: ${props=>props.theme.mainColor};
  }
`
export const ModalBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const ModalAccept = styled.button`
  background: ${props=>props.theme.mainColor};
  color: ${props=>props.theme.textWhite};
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
`
export const ModalCancel = styled.button`
  background: ${props=>props.theme.textWhite};
  border: 1px solid ${props=>props.theme.mainColor};
  border-radius: 5px;
  padding: 10px 20px;
`