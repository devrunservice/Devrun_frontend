import { styled } from "styled-components";
import ReactQuill from "react-quill";

export const EditorWrap = styled.div`
  
`;
export const Editor = styled(ReactQuill)`
  .ql-editor {
    min-height: 500px;
  }
  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: 1px solid #ddd;
  }
`;
export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const TitleInput = styled.input`
  width: ${(props: any) => props.theme.width100};
  height: 50px;
  border: 1px solid ${(props: any) => props.theme.borderGray};
  border-bottom: 0;
  padding: 12px 15px;
  outline: 0;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap:10px;
`;
export const Button = styled.button`
  width: ${(props: any) => props.theme.width85};
  border-radius: 5px;
  height: 40px;
  
  font-size: ${(props: any) => props.theme.fontSize14px};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
`;
export const ButtonOut = styled(Button)`
  color: ${(props: any) => props.theme.textPoint};
  border:1px solid ${(props: any) => props.theme.textPoint};
  background: ${(props: any) => props.theme.bgColor};

`;