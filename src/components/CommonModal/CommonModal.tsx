import React from "react";
import * as St from "./styles";

interface ModalTypeArea {
  text: string,
  btNum: number,
  flag: string,
  closeModalCancel: ()=> void
  closeModalAccept: (flag:string)=> void
}

const CommonModal:React.FC<ModalTypeArea> = ({text, btNum, closeModalCancel, closeModalAccept, flag}) => (
  <St.ModalWrap>
    <St.Modal>
      <p>
        {text}
      </p>
      <St.ModalButtonArea>
        <St.AcceptButton onClick={()=>closeModalAccept(flag)}>확인</St.AcceptButton>
        {btNum === 2 && <St.CancelButton onClick={closeModalCancel}>취소</St.CancelButton>}
        {/* {btNum === 1 ? ( 
          <St.AcceptButton onClick={closeModal}>확인</St.AcceptButton>
        ) : btNum === 2 ? (
          <>
            <St.CancelButton onClick={closeModal}>취소</St.CancelButton>
            <St.AcceptButton onClick={closeModal}>확인</St.AcceptButton>
          </>
        ) : null} */}
      </St.ModalButtonArea>
    </St.Modal>
  </St.ModalWrap>
)

export default CommonModal