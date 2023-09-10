import { styled } from "styled-components";


export const InfoWrap = styled.p`
  position: relative;
  margin-bottom: 1rem;
  line-height: 1;
  color: ${(props: any) => props.theme.black};

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Info = styled.span`
  position: absolute;
  width: calc(100% - 7.5rem);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 7.5rem;
  top: 0;
`;
