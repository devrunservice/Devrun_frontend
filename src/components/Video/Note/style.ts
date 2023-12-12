import { styled } from "styled-components";

export const NoteWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  flex: 1 1 0%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
`;

export const NoteCon = styled.button`
  padding: 25px 25px;
  background: none;
  display: block;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  position: relative;
  &:hover {
    background: ${(props: any) => props.theme.bgNavcolor};
  }
  &:hover:after {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${(props: any) => props.theme.mainColor};
    content: "";
    width: 5px;
  }
  > em {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props: any) => props.theme.black};
    margin-bottom: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1;
  }
  > span {
    display: block;
    font-size: 0.875rem;
    line-height: 1;
    margin-top: 20px;
  }
  > p {
    font-size: 0.875rem;
    line-height: 1;
  }
`;


export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 20px 20px;
`;


