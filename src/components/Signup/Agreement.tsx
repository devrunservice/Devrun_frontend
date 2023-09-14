import React, {useState} from 'react';
import {AgreementContents} from 'components';
import * as St from './styles';

const Agreement = ({title}: {title: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  let content = '';
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;
    if (name === 'termsOfService') {
      content = '서비스 이용약관 내용 (필수)';
      setIsOpen(true);
    } else if (name === 'privacyConsent') {
      content = '개인정보 수집 및 이용 동의 (필수)';
      setIsOpen(true);
    } else {
      content = '마케팅 활용 동의 및 광고 수신 동의 (선택)';
      setIsOpen(true);
    }

    if (name === 'okBtn') {
      setIsOpen(false);
    }
  };
  return (
    <>
      <St.AgreementBtn type="button" name={title} onClick={handleClick}>
        약관 보기
      </St.AgreementBtn>
      {isOpen && (
        <St.Section>
          <St.Modal>
            <AgreementContents name={content} />
            <button type="button" name="okBtn" onClick={handleClick}>
              확인
            </button>
          </St.Modal>
        </St.Section>
      )}
    </>
  );
};

export default Agreement;
