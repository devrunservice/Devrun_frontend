import { styled } from "styled-components";

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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;
export const Title = styled.h4`
  line-height: 1;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
  display: flex;
  align-items: flex-end;
`;
export const SearchWrap = styled.div``;
export const Search = styled.input`
  border: 1px solid ${(props: any) => props.theme.borderGray};
  border-radius: 5px 0 0 5px;
  height: 40px;
  padding: 0 10px;
  width: 250px;
  outline: 0;
`;
export const SearchButton = styled.button`
  cursor: pointer;
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
  vertical-align: top;
  height: 40px;
  border-radius: 0px 5px 5px 0px;
`;

export const Number = styled.p`
  margin-left: 20px;
  font-weight: ${(props: any) => props.theme.fontRegular};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const NumCount = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  font-weight: ${(props: any) => props.theme.fontMedium};
`;
