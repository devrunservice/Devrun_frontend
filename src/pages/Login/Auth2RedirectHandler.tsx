/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Spinner, Modal } from "components";
import { kakaoLoading } from "../../redux/reducer/loginReducer";

const Auth2RedirectHandler = () => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoLoginSuccess = useSelector(
    (state: RootState) => state.modalReducer.kakaoLoginSuccess,
  );

  useEffect(() => {
    console.log("코드 넘겨줌");
    dispatch(kakaoLoading(code));
  }, []);

  return (
    <>
      {!kakaoLoginSuccess && <Spinner />}
      {kakaoLoginSuccess && <Modal />}
    </>
  );
};

export default Auth2RedirectHandler;
