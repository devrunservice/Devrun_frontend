import { styled } from "styled-components";
import ReactQuill from "react-quill";


export const Editor = styled(ReactQuill)`
  .ql-editor {
    min-height: 31.25rem;
    padding: 1.25rem 1.25rem;
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

