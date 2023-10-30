import { styled } from "styled-components";
import { Delete } from "asset";

export const NoteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  > div:first-child {
    height: calc(100% - 399px);
  }
`;


export const Top = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
`;
export const Title = styled.strong`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;
export const Center = styled.div`
  height: calc(100% - 71px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
`;
export const Button = styled.button`
  padding: 25px 25px;
  background: none;
  display: block;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  position:relative;
  &:hover {
    background: ${(props: any) => props.theme.bgNavcolor};
  }
  &:hover:after{
    position:absolute;
    left:0;
    top:0;
    height:100%;
    background:${(props: any) => props.theme.mainColor};
    content:'';
    width:5px;

  }
  > em {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props: any) => props.theme.black};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1;
  }
  > p {
    line-height: 1.3;
    margin: 0.625rem 0;
    overflow: hidden;
    word-break: break-word;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 25px 25px;
`;
export const InputTitle = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  padding: 0.75rem 1rem;
  outline: 0;
`;