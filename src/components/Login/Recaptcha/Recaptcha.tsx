import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as St from './style';

const Recaptcha = () => {
  const onChange = (value: any) => {
    console.log('Captcha value:', value);
  };
  return (
    <St.Section>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
        onChange={onChange}
      />
    </St.Section>
  );
};

export default Recaptcha;
