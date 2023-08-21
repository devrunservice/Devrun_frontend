import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { LoginFormType } from "types";
import * as St from "./styles";

const Recaptcha = ({
  getRecaptcha,
}: {
  getRecaptcha: (value: LoginFormType) => void;
}) => {
  const onChange = (value: any) => {
    // console.log("Captcha value:", value);
    getRecaptcha(value);
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
