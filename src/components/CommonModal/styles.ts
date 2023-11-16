import { styled } from 'styled-components'

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
export const Modal = styled.div`
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
