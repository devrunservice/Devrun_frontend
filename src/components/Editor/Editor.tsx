/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import ReactQuill, {Quill} from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import QuillImageCompress from "quill-image-compress";
import {notice} from 'utils/api';
import {Button} from 'components';
import 'react-quill/dist/quill.snow.css';
import * as S from 'style/Common';
import * as St from './style';
import QuillToolbar, {formats} from './QuillToolbar';

import {
  noticeWriteLoading,
  noticeRetouchLoading,
} from '../../redux/reducer/noticeReducer';
import {
  saveNoteLoding,
  reNoteLoding,
} from '../../redux/reducer/dashboardReducer';
import {
  reQuestLoding,
  saveQuestLoding,
} from '../../redux/reducer/videoViewReducer';

Quill.register('modules/imageResize', ImageResize);
Quill.register("modules/imageCompress", QuillImageCompress);

interface path {
  path: string;
  tap: string;
  con?: string;
  tit?: string;
  videoid?: string;
  id?: number;
  setHide?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Editor = (props: path) => {
  const dispatch = useDispatch();
  const params = useParams();
  const {data} = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState(props.con ?? '');
  const [title, setTitle] = useState(props.tit ?? '');

  const onImage = () => {
    // quill 현재위치
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      console.log(file);
      if (file !== null) {
        if (file[0].size > 1024 * 1024 * 2) {
          alert('이미지 용량을 초과하였습니다.');
        } else {
          try {
            const res = await notice.getUrl({
              path: props.path,
              fileName: file[0].name.split('.')[0],
              fileExt: file[0].type.split('/')[1],
            });
            await notice.postUrl({
              url: res.data.presignUrl,
              file: file[0],
              fileExt: file[0].type.split('/')[1],
            });
            const imgUrl = res.data.presignUrl.split('?')[0];
            const range = quillRef.current?.selection?.index;
            if (
              range !== null &&
              range !== undefined &&
              quillRef.current !== null
            ) {
              quillRef.current?.getEditor().insertEmbed(range, 'image', imgUrl);
            }
          } catch (error) {
            alert('이미지 업로드에 실패했습니다.');
          }
        }
      }
    };
  };
  const onTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 128) {
        alert('128자 이내로 작성해주세요');
        setTitle('');
      } else {
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
      imageCompress: {
        quality: 0.7, // 이미지 압축 품질 설정 (0.1 ~ 1 사이의 값)
        maxWidth: 1200, // 이미지 최대 너비 설정
        maxHeight: 800, // 이미지 최대 높이 설정
        imageType: ["image/jpeg", "image/png", "image/svg", "image/jpg"], // 이미지 타입 설정
        debug: true, // 디버그 모드 설정 (선택 사항)
      },
    }),
    []
  );
  const onWrite = useCallback(() => {
    if (content.trim() === '' || title.trim() === '')
      return alert('제목과 내용을 작성해주세요');
    const writeData = {
      noticeNo: params.noticeNo,
      title: title,
      content: content,
      id: data.id,
    };
    if (props.tap === '공지작성') {
      try {
        dispatch(noticeWriteLoading(writeData));
        navigate(`/notice`);
      } catch (error) {
        alert('게시물업로드가 실패했습니다.');
      }
    } else {
      try {
        dispatch(noticeRetouchLoading(writeData));
        navigate(`/notice/${params.noticeNo}`);
      } catch (error) {
        alert('게시물수정을 실패했습니다.');
      }
    }
  }, [content, title, props.tap]);
  const onExit = () => {
    if (props.tap === '공지작성') {
      navigate('/notice');
    } else {
      navigate(`/notice/${params.noticeNo}`);
    }
  };

  const onNoteWrite = useCallback(async () => {
    if (content.trim() === '' || title.trim() === '')
      return alert('제목과 내용을 작성해주세요');

    const Note = {
      noteContent: content,
      noteTitle: title,
      videoId: props.videoid || '',
    };
    const NoteRe = {
      noteContent: content || props.con,
      noteNo: props.id,
      noteTitle: title || props.tit,
    };
    const Community = {
      lectureId: props.id,
      questionContent: content,
      questionTitle: title,
      videoId: props.videoid,
    };
    const CommunityRe = {
      questionId: props.id,
      questionContent: content,
      questionTitle: title,
    };
    if (props.tap === 'Note') {
      try {
        dispatch(saveNoteLoding(Note));
        setContent('');
        setTitle('');
      } catch (error) {
        alert('노트업로드가 실패했습니다.');
      }
    } else if (props.tap === 'Community') {
      try {
        dispatch(saveQuestLoding(Community));
        setContent('');
        setTitle('');
        if (props.setHide !== undefined) props.setHide(false);
      } catch (error) {
        alert('질문업로드를 실패했습니다.');
      }
    } else if (props.tap === 'CommunityRe') {
      try {
        dispatch(reQuestLoding(CommunityRe));
        setContent('');
        setTitle('');
        if (props.setHide !== undefined) props.setHide(false);
      } catch (error) {
        alert('질문수정을 실패했습니다.');
      }
    } else {
      try {
        dispatch(reNoteLoding(NoteRe));
        setContent('');
        setTitle('');
        if (props.setHide !== undefined) props.setHide(false);
      } catch (error) {
        alert('노트수정이 실패했습니다.');
      }
    }
  }, [content, title, props.tap]);
  const onHide = () => {
    if (props.setHide !== undefined) props.setHide(false);
  };
  
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
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        $active={props.path === "lecture_note"}
      />

      <S.ButtonWrap $active={props.tap !== ("공지작성" || "공지수정")}>
        {(props.tap === "NoteRe" || props.tap === "CommunityRe") && (
          <>
            <Button
              text="취소"
              name="No"
              color="main"
              border="main"
              onBtn={onHide}
            />
            <Button
              text="글수정"
              name="Yes"
              color="white"
              backgroundColor="main"
              onBtn={onNoteWrite}
            />
          </>
        )}
        {(props.tap === "Note" || props.tap === "Community") && (
          <Button
            text="글쓰기"
            name="Yes"
            color="white"
            backgroundColor="main"
            onBtn={onNoteWrite}
          />
        )}
        {(props.tap === "공지작성" || props.tap === "공지수정") && (
          <>
            <Button
              text="취소"
              name="No"
              color="main"
              border="main"
              onBtn={onExit}
            />
            <Button
              text="글쓰기"
              name="Yes"
              color="white"
              backgroundColor="main"
              onBtn={onWrite}
            />
          </>
        )}
      </S.ButtonWrap>
    </>
  );
};

export default Editor;
/* eslint-disable @typescript-eslint/no-unused-vars */
