import React from 'react';
import {Spinner} from 'components';
import * as St from './style';

interface ModalTypeArea {
  text: string;
  btNum: number;
  flag: string;
  loading: Boolean;
  closeModalCancel: () => void;
  closeModalAccept: (flag: string) => void;
}

const CommonModal: React.FC<ModalTypeArea> = ({
  text,
  btNum,
  loading,
  closeModalCancel,
  closeModalAccept,
  flag,
}) => (
  <St.ModalWrap>
    {loading ? (
      <St.PositionSet>
        <Spinner />
      </St.PositionSet>
    ) : (
      <St.ModalInner>
        <p>{text}</p>
        <St.ModalButtonArea>
          <St.AcceptButton onClick={() => closeModalAccept(flag)}>
            확인
          </St.AcceptButton>
          {btNum === 2 && (
            <St.CancelButton onClick={closeModalCancel}>취소</St.CancelButton>
          )}
        </St.ModalButtonArea>
      </St.ModalInner>
    )}
  </St.ModalWrap>
);

export default CommonModal;
