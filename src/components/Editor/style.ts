import { styled } from "styled-components";
import ReactQuill from "react-quill";


export const Editor = styled(ReactQuill)`
  .ql-editor {
    min-height: 500px;
  }
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: 1px solid #ddd;
  }
`;

export const TitleInput = styled.input`
  width: ${(props: any) => props.theme.size100};
  height: 50px;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-bottom: 0;
  padding: 12px 15px;
  outline: 0;
`;

