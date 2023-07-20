import { styled } from "styled-components";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const Table = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
  min-height: 568px;
`;
export const TableLi = styled.li`
  border-bottom: 1px solid ${(props:any) => props.theme.borderGray};
  display: flex;
  align-items: center;
  padding: 20px 0;
  text-align: center;
  cursor:pointer;
  ;
  &:hover {
    color: ${(props:any) => props.theme.textBlack};
    background: ${(props:any) => props.theme.bgGrayColor};
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

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
 
`;
export const Button = styled.button`
  width: ${(props:any) => props.theme.width85};
  border-radius: 5px;
  height: 40px;
  margin-top: 20px;
  font-size: ${(props:any) => props.theme.fontSize14px};
  color: ${(props:any) => props.theme.textWhite};
  background: ${(props:any) => props.theme.textPoint};
`;