import { styled } from "styled-components";
import { Input } from "style/Common";

export const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
  padding-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
`;

export const SearchInput = styled(Input)`
  padding: 0.4rem 0;
  width: 100%;
`;

export const SearchBtn = styled.button`
  border: 0;
  outline: 0;
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
`;
