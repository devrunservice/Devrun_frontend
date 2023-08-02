/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IEdit } from "types";
import * as St from "./style";

const Editor = (props: IEdit) => {
  const Navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const titleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const image = () => {
    // 업로드를 위한 input생성
    const input = document.createElement("input");
    const formData = new FormData();
    const url = "";
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);

        // 저의 경우 파일 이미지를 서버에 저장했기 때문에
        // 백엔드 개발자분과 통신을 통해 이미지를 저장하고 불러왔습니다.
        try {
          // const res = axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.

          // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
          //  url = res.data.url;

          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
          const range = quillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = quillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${url} alt="이미지 태그가 삽입됩니다." />`,
            );
          }

          // return { ...res, success: true };
        } catch (error) {
          console.log(error);
        }
      }
    };
  };
  console.log(content);
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image", "video"],
        ],
        handlers: {
          image: image,
        },
      },
    }),
    [],
  );
  return (
    <St.EditorWrap>
      <St.Title>{props.title}</St.Title>
      <St.TitleInput
        type="text"
        placeholder="제목을 적어주세요"
        onChange={titleChange}
      />
      <St.Editor
        placeholder="내용을 적어주세요"
        theme="snow"
        ref={quillRef}
        onChange={setContent}
        modules={modules}
      />
      <St.ButtonWrap>
        <St.Button onClick={() => Navigate("/notice")} $active={false}>
          나가기
        </St.Button>
        <St.Button onClick={() => Navigate("/notice")} $active>
          글쓰기
        </St.Button>
      </St.ButtonWrap>
    </St.EditorWrap>
  );
};

export default Editor;
/* eslint-disable @typescript-eslint/no-unused-vars */