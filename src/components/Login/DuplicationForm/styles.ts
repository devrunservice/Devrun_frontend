import {styled} from 'styled-components';
import {Input} from 'style/Common';

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const Field = styled.div<{option?: string}>`
  display: flex;
  justify-content: ${(props) => props.option === 'email' && 'space-around'};
  align-items: ${(props) => props.option === 'email' && 'center'};
  margin-bottom: 0.6rem;

  & > ${Input} {
    width: ${(props) => (props.option === 'email' ? '32%' : '75%')};
    margin-right: ${(props) => props.option !== 'email' && '1.5rem'};
  }

  & > select {
    width: ${(props) => (props.option === 'email' ? '32%' : '0')};
    height: 3rem;
    border-radius: 5px;
  }

  & > ${Button} {
    width: 25%;
    height: 3rem;
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.mainColor};
  }

  & > p {
    width: ${(props) => (props.option === 'email' ? '5%' : '0')};
    text-align: center;
  }
`;
