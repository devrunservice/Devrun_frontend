import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5625rem;
  font-weight: 700;
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


