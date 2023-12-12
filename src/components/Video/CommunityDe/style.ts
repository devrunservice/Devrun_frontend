import { styled } from "styled-components";

export const ContentWrap = styled.div`
  padding: 20px 20px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  > div > span {
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
  > ul {
    display: flex;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  }
  > ul > li {
    font-size: 0.875rem;
    line-height: 1;
  }
  > ul > li:first-child {
    border-right: 1px solid ${(props: any) => props.theme.borderD};
    margin-right: 10px;
    padding-right: 10px;
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