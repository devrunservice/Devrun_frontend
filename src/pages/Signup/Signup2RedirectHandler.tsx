import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// import {useDispatch} from 'react-redux';
import {signup} from 'utils/api';
import {Spinner} from 'components';
// import {openModal} from '../../redux/reducer/modalReducer';

const Signup2RedirectHandler = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const id = new URL(window.location.href).searchParams.get('id');
  const key = new URL(window.location.href).searchParams.get('key');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await signup.checkVerificationEmail(
          id || '',
          key || ''
        );
        console.log(response);
        if (response.status === 200) {
          navigate('/signupCompletion');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <Spinner />;
};

export default Signup2RedirectHandler;
