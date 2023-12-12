/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {redirect} from 'utils/redirect';
import {Spinner, BasicModal} from 'components';
import {kakaoLoading} from '../../redux/reducer/loginReducer';

const Auth2RedirectHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get('code');

  const isKakaoLogin = useSelector(
    (state: RootState) => state.loginReducer.iskakaoLogin
  );

  const handleConfirm = () => {
    redirect('/kakaologin');
  };

  useEffect(() => {
    dispatch(kakaoLoading(code));
  }, []);

  return (
    <>
      {!isKakaoLogin && <Spinner />}
      {isKakaoLogin && <BasicModal onConfirm={handleConfirm} />}
    </>
  );
};

export default Auth2RedirectHandler;
