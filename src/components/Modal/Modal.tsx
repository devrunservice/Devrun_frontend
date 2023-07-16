import React, { ChangeEvent, useState } from 'react';
import * as St from './style'

interface ModalProps {
  modalClose:() => void
}
const Modal:React.FC<ModalProps> = ({modalClose}) => {
  const [input, setInput] = useState({
    title: '',
    url: '',
  })
  const {title, url} = input
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  return (
    <St.ModalOverlay>
      <St.ModalWrap>
        <span>수업추가</span>
        <St.ModalSection>
          <p>제목</p>
          <input onChange={onChange} value={title} type="text" name='title' placeholder='등록할 제목을 입력해 주세요.'/>
        </St.ModalSection>
        <St.ModalSection>
          <p>유튜브링크</p>
          <input onChange={onChange} value={url} type="text" name='url' placeholder='Youtube동영상 URL을 넣어주세요.' />
        </St.ModalSection>
        <St.ModalBtnWrap>
          <St.ModalCancel onClick={()=>modalClose()}>취소</St.ModalCancel>
          <St.ModalAccept>저장</St.ModalAccept>
        </St.ModalBtnWrap>
      </St.ModalWrap>
    </St.ModalOverlay>
  )
};


export default Modal;