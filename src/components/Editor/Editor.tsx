/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import ReactQuill from "react-quill";
import { formats, toolbarOptions } from "utils/editor";
import { notice } from "utils/api";
import { useInput } from "hooks";
import * as I from "types";
import "react-quill/dist/quill.snow.css";
import * as S from "style/Common";
import * as St from "./style";

interface path {
  path: string;
}


const Editor = (props: path) => {
  const { data } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title, onTitle] = useInput("");

  const onImage = () => {
    // quill 현재위치
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        if (file[0].size > 1024 * 1024 * 2) {
          alert("이미지 용량을 초과하였습니다.");
        } else {
          const formData = new FormData();
          formData.append("file", file[0], "image.jpg");
          try {
            const res = await notice.img({ path: props.path, formData });
            const url = res.data.fileURL;
            const range = quillRef.current?.getEditor().getSelection()?.index;
            if (range !== null && range !== undefined) {
              const quill = quillRef.current?.getEditor();
              quill?.setSelection(range, 1);
              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
              );
            }

            return { ...res, success: true };
          } catch (error) {
            alert("이미지 업로드에 실패했습니다.")
          }
        }
      }
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: onImage,
        },
      },
    }),
    []
  );
  const onWrite = useCallback(async () => {
    if (content.trim() === "" && title.trim() === "")
      return alert("제목과 내용을 작성해주세요");
    const writeData: I.noticeWrite = {
      noticeNo: 0,
      title: title,
      content: content,
      id: data.id,
    };
    try {
      await notice.write(writeData);
      navigate("/notice");
    } catch (error) {
      alert("게시물업로드가 실패했습니다.");
    }
  }, [content, title]);
  return (
    <>
      <St.TitleInput
        type="text"
        placeholder="제목을 적어주세요"
        onChange={onTitle}
      />
      <St.Editor
        placeholder="내용을 적어주세요"
        theme="snow"
        ref={quillRef}
        onChange={setContent}
        modules={modules}
      />
      <S.ButtonWrap>
        <S.Button onClick={() => navigate("/notice")} $active={false}>
          나가기
        </S.Button>
        <S.Button onClick={() => onWrite()} $active>
          글쓰기
        </S.Button>
      </S.ButtonWrap>
    </>
  );
};

export default Editor;
/* eslint-disable @typescript-eslint/no-unused-vars */