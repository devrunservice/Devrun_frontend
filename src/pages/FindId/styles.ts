import {styled} from 'styled-components';

interface MenuButtonProps {
  active?: boolean;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.bgGrayColor};
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
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.textBlack};
  text-align: center;
  padding-bottom: 1.5rem;
`;

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const MenuBtn = styled.button<MenuButtonProps>`
  padding: 0.8rem 1rem;
  color: ${(props) =>
    props.active ? props.theme.textColor : props.theme.textWhite};
  background-color: ${(props) =>
    props.active ? props.theme.bgColor : props.theme.buttonColor};
  border: ${(props) => props.theme.buttonColor} 2px solid;
  border-bottom: ${(props) =>
    props.active ? 'none' : `${props.theme.buttonColor} 2px solid`};
`;

export const OptionWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Option = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const Radio = styled.input`
margin-right: 0.5rem;
`

export const Phone = styled.div`
margin-top: 0.5rem;
`