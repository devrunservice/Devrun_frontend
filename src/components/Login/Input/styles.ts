import {styled} from 'styled-components';

export const Input = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  width: 100%;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

// 비밀번호
export const InputWrapper = styled.div`
  position: relative;
`;

// 비밀번호 눈 모양
export const Icons = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
`;
