import { styled } from "styled-components";
import { Delete } from "asset";

export const NoteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
  height: calc(100% - 470px);
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
`;
export const Contents = styled.div`
  width: 100%;
  > pre {
    white-space: break-spaces;
  }
  > p {
    display: none;
  }
  > p:first-child {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1;
  }
  > p > * {
    font-size: 1rem !important;
    background: none !important;
  }
`;

export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 25px 25px;
`;

export const Star = styled.button`
  display:inline-block
`
export const StarWrap = styled.div`
  display:flex;
`