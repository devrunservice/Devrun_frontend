import {styled} from 'styled-components';

export const Input = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  width: 100%;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

export const DefaultWidth = styled.div`
width: 1280px;
margin: 0 auto;
`