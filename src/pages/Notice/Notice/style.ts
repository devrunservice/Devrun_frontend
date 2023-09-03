import { styled } from "styled-components";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.size25};
  font-weight: ${(props: any) => props.theme.bold};
  color: ${(props: any) => props.theme.black};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

`;
