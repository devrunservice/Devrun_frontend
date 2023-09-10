import {styled} from 'styled-components';

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const EmailBtn = styled(Button)`
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
  margin: 0.5rem 0;
  padding: 0.8rem 0;
  width: 100%;
`;
