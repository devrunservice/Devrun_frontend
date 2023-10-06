import { styled } from "styled-components";
import ReactQuill from "react-quill";


export const Editor = styled(ReactQuill)`
  min-height: 31.25rem;
  .ql-editor {
    min-height: 31.25rem;
  }
  .qeSL .ql-toolbar.ql-snow,
  .qeSL .ql-container.ql-snow {
    border: 1px solid ${(props: any) => props.theme.borderC};
  }
  .ql-font-Nanum {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 400;
  }
  .ql-font-Pretendard {
    font-family: "Pretendard";
    font-weight: 400;
  }
  .ql-font-Roboto {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
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

