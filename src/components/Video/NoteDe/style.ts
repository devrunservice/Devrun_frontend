import { styled } from "styled-components";
import { Delete } from "asset";
import { BsArrowLeftShort } from "react-icons/bs";
import { Active } from "types";

export const Top = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
`;

export const Deletes = styled(Delete)`
  cursor: pointer;
  
`;
export const Arr = styled(BsArrowLeftShort)`
  cursor: pointer;
  margin-right: 5px;
`;
export const TopButton = styled.button`
  background: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: center;
  padding:0;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Center = styled.div<Active>`
flex:1 1 0%;
  overflow-y: scroll;

  padding: 25px 25px;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
  > em {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props: any) => props.theme.black};
    margin: 15px 0 10px;
    word-break: break-all;
  }
`;
export const Date = styled.div`
  display: flex;
  font-size: 0.875rem;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.button<Active>`
  background: none;
  color: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.textRed};
`;
export const Contents = styled.div`
  width: 100%;
  word-break: break-all;
  > pre {
    white-space: break-spaces;
  }
`;

export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 25px 25px;
`;
