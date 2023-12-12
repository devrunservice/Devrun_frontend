/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Editor, Content, VideoTop, Btn, BasicModal } from "components";
import * as St from './style';
import {
  noteDeleteLoading,
  noteDetailLoading,
} from "../../../redux/reducer/dashboardReducer";
import { openModal } from "../../../redux/reducer/modalReducer";


interface Note {
  onNote: () => void;
  noteId: number;
  setNoteBoolean: React.Dispatch<React.SetStateAction<boolean>>;
}


const NoteDe = ({ onNote, setNoteBoolean, noteId }: Note) => {
  const dispatch = useDispatch();
  const {
    noteDetailData: noteDetail,
    reNote,
  } = useSelector((state: RootState) => state.dashboardReducer);
  useEffect(() => {
    dispatch(noteDetailLoading({ id: noteId }));
  }, [reNote]);
  const [hide, setHide] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    id: 0,
  });

  const onReNote = useCallback(() => {
    setNoteData({
      ...noteData,
      title: noteDetail.noteTitle,
      content: noteDetail.content,
      id: noteDetail.noteId,
    });
    setHide((prev) => !prev);
  }, [noteData, noteDetail]);
 const onDelet = () => dispatch(openModal("해당 노트을 삭제하시겠습니까?"));


  const handleConfirm = () => {
    try {
      dispatch(noteDeleteLoading(noteDetail.noteId));
      setNoteBoolean(false);    
    }catch (error) {
      dispatch(openModal("노트삭제에 실패했습니다."));
    }
  };
  return (
    <>
      <BasicModal logicActive onConfirm={handleConfirm} />
      <VideoTop
        text="섹션노트 모두보기"
        onExit={() => setNoteBoolean(false)}
        onButton={onNote}
      />
      <St.Center>
        <St.Date>
          작성일 : {noteDetail.date}
          <div>
            <Btn text="수정" color="main" onBtn={onReNote} />
            <Btn text="삭제" color="red" onBtn={onDelet} />
          </div>
        </St.Date>
        <em>{noteDetail.noteTitle}</em>
        <Content content={noteDetail.content} />
      </St.Center>
      {hide && (
        <St.Bottom>
          <Editor
            path="lecture_note"
            tap="NoteRe"
            id={noteData.id}
            tit={noteData.title}
            con={noteData.content}
            setHide={setHide}
          />
        </St.Bottom>
      )}
    </>
  );
};
export default NoteDe;




