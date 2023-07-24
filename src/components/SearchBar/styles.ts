import { styled } from "styled-components";
import { Input } from "style/Common";

export const SearchBar = styled.div`
  display: flex;
  width: 40%;
`;

export const SearchInput = styled(Input)`
  padding: 0.4rem 0;
  width: 80%;
`;

export const SearchBtn = styled.button`
  border: 0;
  outline: 0;
  border-radius: 5px;
  width: 20%;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
`;
