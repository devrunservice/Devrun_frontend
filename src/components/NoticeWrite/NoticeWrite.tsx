import React, { ChangeEvent, useMemo, useRef, useState } from 'react';

import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as St from "./style";



const NoticeWrite = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title,setTitle] = useState<string>("") // eslint-disable-line @typescript-eslint/no-unused-vars
  const titleChange = (e: ChangeEvent<HTMLInputElement>) =>setTitle(e.target.value)
  const Navigate = useNavigate();
  const WriteBtn = () => Navigate("");
  const OutBtn = () => Navigate("/notice");
  ;
  // quill에서 사용할 모듈
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
          // image: imageHandler,
        },
      },
    }),
    []
  );
  return (
    <St.EditorWrap>
      <St.Title>공지사항</St.Title>
      <St.TitleInput
        type="text"
        placeholder="제목을 적어주세요"
        onChange={titleChange}
      />
      <St.Editor
        placeholder="내용을 적어주세요"
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
      />
      <St.ButtonWrap>
        <St.ButtonOut onClick={() => OutBtn()}>나가기</St.ButtonOut>
        <St.Button onClick={() => WriteBtn()}>글쓰기</St.Button>
      </St.ButtonWrap>
    </St.EditorWrap>
  );
}

export default NoticeWrite;
