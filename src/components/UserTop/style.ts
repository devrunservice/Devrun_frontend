import { styled } from "styled-components";

export const Title = styled.h4`
  line-height: 1;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: flex-end;
`;
export const Number = styled.p`
  margin-left: 20px;
  font-weight: 500;
  font-size: 1rem;
`;
export const NumCount = styled.span`
  color: ${(props: any) => props.theme.brandColor};
  font-weight: 500;
`;
