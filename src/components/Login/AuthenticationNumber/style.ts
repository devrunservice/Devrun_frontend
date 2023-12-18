import {styled} from 'styled-components';
import {Input} from 'style/Common';

// p 태그
export const P = styled.p<{$page?: string}>`
  color: ${(props) => props.theme.black};
  margin-bottom: 0.6rem;
  font-weight: ${(props) =>
    props.$page === 'profileUpdate' && props.theme.semiBold};
`;

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 아이디, 비밀번호, 이름, 이메일, 생년월일, 휴대폰 번호
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

// 휴대폰 번호 input, button
export const Field = styled.div<{option?: string}>`
  display: flex;
  position: ${(props) =>
    props.option === 'authenticationInput' ? 'relative' : 'none'};
  /* align-items: ${(props) =>
    props.option === 'authenticationInput' ? 'center' : 'none'}; */
  margin-bottom: 0.6rem;

  & > ${Input} {
    width: 75%;
    /* width: ${(props) =>
      props.option === 'authenticationInput' ? '60%' : '75%'}; */
    margin: 0 1.5rem 0 0;
  }

  & > ${Button} {
    width: 25%;
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.mainColor};
  }
`;
