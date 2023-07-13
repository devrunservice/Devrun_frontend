import React from 'react';
import * as St from './style'

const Modal = () => (

    <St.ModalOverlay>
      <St.ModalWrap>
        <span>수업추가</span>
        <St.ModalSection>
          <p>제목</p>
          <input type="text" placeholder='등록할 제목을 입력해 주세요.'/>
        </St.ModalSection>
        <St.ModalSection>
          <p>유튜브링크</p>
          <input type="text" placeholder='Youtube동영상 URL을 넣어주세요.' />
        </St.ModalSection>
      </St.ModalWrap>
    </St.ModalOverlay>
);

export default Modal;