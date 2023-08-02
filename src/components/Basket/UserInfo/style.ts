import { styled } from "styled-components";


export const InfoWrap = styled.p`
  position: relative;
  margin-bottom: 15px;
  line-height: 1;
  color: ${(props: any) => props.theme.black};

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Info = styled.span`
  position: absolute;
  width: calc(100% - 120px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 120px;
  top: 0;
`;
