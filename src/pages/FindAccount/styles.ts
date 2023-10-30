import {styled} from 'styled-components';

// Gray 배경 컴포넌트
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bgGrayColor};
  overflow: auto;
`;

// white 배경 컴포넌트
export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 3rem 0;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderC} 1px solid;
`;

export const LogoBtn = styled.button`
  text-align: center;
  /* margin-bottom: 1.5rem; */
  background: none;
`;

// 아이디, 비밀번호 찾기
export const H1 = styled.h1`
  color: ${(props) => props.theme.black};
  text-align: center;
  padding-bottom: 1.5rem;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.mainColor};
  padding: 0.8rem 0;
  cursor: pointer;
`;

// 아이디, 비밀번호 찾기 버튼
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const MenuIdBtn = styled(Button)`
  padding: 0.8rem 1rem;
  border-radius: 0px;
  width: 100%;
  &.id {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.bgColor};
    border: ${(props) => props.theme.mainColor} 2px solid;
    border-bottom: 0;
  }
  &.password {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.mainColor};
  }
`;

export const MenuPasswordBtn = styled(Button)`
  padding: 0.8rem 1rem;
  border-radius: 0px;
  width: 100%;
  &.id {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.mainColor};
  }
  &.password {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.bgColor};
    border: ${(props) => props.theme.mainColor} 2px solid;
    border-bottom: 0;
  }
`;
