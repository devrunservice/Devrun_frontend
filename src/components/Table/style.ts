import { styled, css } from "styled-components";

export const Table = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
  min-height: 568px;
`;
export const TableLi = styled.li`
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
  display: flex;
  align-items: center;
  padding: 20px 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${(props: any) => props.theme.textBlack};
    background: ${(props: any) => props.theme.bgGrayColor};
  }
`;

const common = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 5px;
  font-size: ${(props: any) => props.theme.fontSize14px};
`;

export const Num = styled.p`
  width: 5.78%;
  ${common}
`;
export const Text = styled.p`
  width: calc(100% - 36.34%);
  text-align: left;
  ${common}
`;
export const Writer = styled.p`
  width: 11.67%;
  ${common}
`;
export const Date = styled.p`
  width: 11.11%;
  ${common}
`;
export const View = styled.p`
  width: 7.78%;
  ${common}
`;
export const Button = styled.button`
  background: none;
  
`;