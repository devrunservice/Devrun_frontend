import { styled } from "styled-components";


export const Center = styled.div`
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


export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 20px 20px;
`;
