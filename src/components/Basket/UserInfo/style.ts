import { styled } from "styled-components";


export const InfoWrap = styled.p`
  position: relative;
  margin-top: 0.3125rem;
  color: ${(props: any) => props.theme.black};
  font-size: 0.875rem;
  font-weight: 500;
`;
export const Info = styled.span`
  position: absolute;
  font-weight:400;
  font-size: 0.875rem;
  width: calc(100% - 5rem);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 5rem;
  top: 0;
`;
