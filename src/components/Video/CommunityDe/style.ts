import { styled } from "styled-components";

export const ContentWrap = styled.div`
  padding: 20px 20px;
  > div:first-child {
    display: flex;
    justify-content: space-between;
  }
  > div:first-child > span {
    color: ${(props: any) => props.theme.mainColor};
    display: block;
    font-size: 0.875rem;
  }
  > em {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props: any) => props.theme.black};
    margin: 5px 0 15px;
    word-break: break-all;
  }
  > ul:nth-child(3) {
    display: flex;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  }
  > ul:nth-child(3) > li {
    font-size: 0.875rem;
    line-height: 1;
  }
  > ul:nth-child(3) > li:first-child {
    border-right: 1px solid ${(props: any) => props.theme.borderD};
    margin-right: 10px;
    padding-right: 10px;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgGrayColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
  > div:nth-child(4) {
    min-height: 300px;
    border-bottom: 1px solid ${(props: any) => props.theme.borderD};
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
`;


export const Editor = styled.div`
  padding: 20px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .quill {
    flex: 1 1 0%;
  }
`;