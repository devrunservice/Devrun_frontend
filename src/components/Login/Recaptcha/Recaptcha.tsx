import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as St from './styles';

const Recaptcha = ({
  isOpen,
  onClose,
  getRecaptcha,
}: {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  getRecaptcha: (value: string) => void;
}) => {
  const onChange = (value: string | null) => {
    console.log('Captcha value:', value);
    if (value) {
      getRecaptcha(value);
      onClose(false);
    }
  };

  return (
    <St.Section isOpen={isOpen}>
      <St.ModalContent>
        <St.ModalHeader>
          <p>로그인 횟수를 초과했습니다.</p>
        </St.ModalHeader>
        <St.ModalBody>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
            onChange={onChange}
          />
        </St.ModalBody>
      </St.ModalContent>
    </St.Section>
  );
};

export default Recaptcha;
