import { styled } from "styled-components";

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
export const Number = styled.p`
  margin-left: 20px;
  font-weight: ${(props: any) => props.theme.regular};
  font-size: ${(props: any) => props.theme.size16};
`;
export const NumCount = styled.span`
  color: ${(props: any) => props.theme.brandColor};
  font-weight: ${(props: any) => props.theme.medium};
`;
