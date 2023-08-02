import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: ${(props: any) => props.theme.size25};
  font-weight: ${(props: any) => props.theme.bold};
  color: ${(props: any) => props.theme.black};
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
  font-size: ${(props: any) => props.theme.size25};
  font-weight: ${(props: any) => props.theme.bold};
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: flex-end;
`;