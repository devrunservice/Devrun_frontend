/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import { notice } from "utils/api";
import * as I from "types";
import "react-quill/dist/quill.snow.css";
import * as S from "style/Common";
import * as St from "./style";
import QuillToolbar, { formats } from "./QuillToolbar";
import {
  noticeWriteLoading,
  noticeRetouchLoading,
} from "../../redux/reducer/noticeReducer";


Quill.register("modules/imageResize", ImageResize);

interface path {
  path: string;
  tap: string;
}



const Editor = (props: path) => {
  const dispatch = useDispatch()
  const params = useParams()
  const noticeNo = props.tap === "공지수정" ? params.noticeNo : 0;
  const { data } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState("");

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

          try {
            const res = await notice.getUrl({
              path: props.path,
              fileName: file[0].name.split(".")[0],
              fileExt: file[0].type.split("/")[1],
            });
             await notice.postUrl({
              url: res.data.presignUrl,
              file: file[0],
            });
            const imgUrl = res.data.presignUrl.split("?")[0]
            const range = quillRef.current?.getEditor().getSelection()?.index;

            if (range !== null && range !== undefined) {
              const quill = quillRef.current?.getEditor();
              quill?.setSelection(range, 1);
              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<img src=${imgUrl} alt="이미지 태그가 삽입됩니다." />`
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
  const onTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      
      if (e.target.value.length > 128) {
        alert("128자 이내로 작성해주세요");
        setTitle("");
      }else{
        setTitle(e.target.value);
      }
    },
    [title]
  );
  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          image: onImage,
        },
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize", "Toolbar"],
      },
    }),
    []
  );
  const onWrite = useCallback(async () => {
    if (content.trim() === "" || title.trim() === "")
      return alert("제목과 내용을 작성해주세요");
    const writeData: I.NoticeWrite = {
      noticeNo: noticeNo,
      title: title,
      content: content,
      id: data.id,
    };
    if (props.tap === "공지작성") {
      try {
        await dispatch(noticeWriteLoading(writeData))
        await navigate(`/notice`);
      } catch (error) {
        alert("게시물업로드가 실패했습니다.");
      }
    } else {
      try {
        await dispatch(noticeRetouchLoading(writeData));
        await navigate(`/notice/${params.noticeNo}`);
      } catch (error) {
        alert("게시물수정을 실패했습니다.");
      }
    }
     
  }, [content, title,props.tap]);
  const onExit = useCallback(()=>{
    if (props.tap === "공지작성") {
      navigate("/notice");
    } else {
      navigate(`/notice/${params.noticeNo}`);
    }
  },[])
  return (
    <>
      <St.TitleInput
        type="text"
        placeholder="제목을 128자 이내로 작성해주세요"
        onChange={onTitle}
        value={title}
      />
      <QuillToolbar />
      <St.Editor
        placeholder="내용을 적어주세요"
        theme="snow"
        ref={quillRef}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
      <S.ButtonWrap>
        <S.Button onClick={() => onExit()} $active={false}>
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