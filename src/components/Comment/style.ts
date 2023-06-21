import { styled } from "styled-components";


export const CommentWrap = styled.div`
  margin-top: 60px;
  padding-top: 50px;
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
`;
export const CommentTitle = styled.em`
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  font-size: ${(props: any) => props.theme.fontSize20px};
  display:flex;
  align-items: flex-end;
`;
export const CommentCount = styled.p`
  margin-left: 10px;
  font-weight: ${(props: any) => props.theme.fontRegular};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const CommentNum = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  font-weight: ${(props: any) => props.theme.fontMedium};
`;