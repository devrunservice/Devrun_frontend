/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Spinner } from "components";
import { kakaoLoading } from "../../redux/reducer/loginReducer";

const Auth2RedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  const redirectTo = useSelector(
    (state: RootState) => state.loginReducer.redirectTo,
  );

  useEffect(() => {
    console.log("코드 넘겨줌");
    dispatch(kakaoLoading(code));
  }, []);

  useEffect(() => {
    if (redirectTo === "/auth/kakao/callback/login") {
      console.log("로그인으로 이동");
      navigate("/login");
    }
  }, [redirectTo]);

  return <Spinner />;
};

export default Auth2RedirectHandler;
