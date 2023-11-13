import { styled } from "styled-components";
import ReactQuill from "react-quill";
import { Active } from "types";

export const Editor = styled(ReactQuill)<Active>`
  .ql-editor {
    min-height: ${(props: any) => (props.$active ? "11.25rem" : "31.25rem")};
    padding: 1.25rem 1.25rem;
    background: #fff;
  }
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border-top: 0;
  }
  p {
    font-family: "Nanum Gothic", sans-serif;
  }
  .ql-font-Pretendard {
    font-family: "Pretendard";
  }
  .ql-font-Roboto {
    font-family: "Roboto", sans-serif;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  .ql-formats button,
  .ql-formats .ql-color,
  .ql-formats .ql-background {
    font-size: 0;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 3.125rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-bottom: 0;
  padding: 0.75rem 1rem;
  outline: 0;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-height: 50px;
  background: ${(props: any) => props.theme.bgColor};
  overflow-y: hidden;
  overflow-x: auto;
  > span {
    display: flex !important;
  }
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgColor};
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    height: 3px;
  }
`;