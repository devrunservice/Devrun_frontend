import { styled } from "styled-components";
import { Input } from "style/Common";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
  padding-bottom: 1rem;

  & > h1 {
    width: 60%;
  }
`;

export const Form = styled.form`
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
