/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import ReactQuill from "react-quill";
import { notice } from "utils/api";
import { useInput } from "hooks";
import * as I from "types";
import "react-quill/dist/quill.snow.css";
import * as S from "style/Common";
import * as St from "./style";




const Editor = ({path}:I.notice) => {
  const {data} = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title, onTitle] = useInput("");
  const image = () => {
    // 업로드를 위한 input생성
    const input = document.createElement("input");
    const formData = new FormData();
    let url = "";
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
          const res = await notice.img({path})
          console.log(res)
            // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
          url = res.data
          console.log(url);
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

  const onWrite = useCallback(async() => {
    if (content.trim() === "" && title.trim() === "") return alert("제목과 내용을 작성해주세요")
      const writeData: I.noticeWrite = {
        noticeNo: 0,
        title: title,
        content: content,
        userNo: data.userNo,
      };
    await notice.write(writeData);
    navigate("/notice")
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
        <S.Button onClick={()=>onWrite()} $active>
          글쓰기
        </S.Button>
      </S.ButtonWrap>
    </>
  );
};

export default Editor;
/* eslint-disable @typescript-eslint/no-unused-vars */