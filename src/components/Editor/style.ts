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
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 3.125rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-bottom: 0;
  padding: 0.75rem 1rem;
  outline: 0;
`;

