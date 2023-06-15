import { styled } from "styled-components";



export const Title = styled.h4`
  margin-bottom: 25px;
  font-size: ${(props) => props.theme.fontSize20px};
  font-weight: ${(props) => props.theme.fontBold};
  color: ${(props) => props.theme.textBlack};
`;
export const Table = styled.ul`
  border-top: 1px solid ${(props) => props.theme.borderGray};
  min-height: 568px;
`;
export const TableLi = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  align-items: center;
  padding: 25px 0;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.textBlack};
    background: ${(props) => props.theme.bgGrayColor};
  }
`;

export const Num = styled.p`
  width: 5.83%;
  padding: 0 10px;
  
`;
export const Text = styled.p`
  width: calc(100% - 32.91%);
  text-align: left;
  padding: 0 10px;
`;
export const Writer = styled.p`
  width: 11.67%;
  padding: 0 10px;
`;
export const Date = styled.p`
  width: 9.58%;
  padding: 0 10px;
`;
export const View = styled.p`
  width: 5.83%;
  padding: 0 10px;
`;
