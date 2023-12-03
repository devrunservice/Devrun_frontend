/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Editor, Content } from "components";
import * as St from './style';
import {
  noteDeleteSuccess,
  noteDetailLoading,
} from "../../../redux/reducer/dashboardReducer";


interface Note {
  onNote: () => void;
  noteId: number;
  setNoteBoolean: React.Dispatch<React.SetStateAction<boolean>>;
}


const NoteDe = ({ onNote, setNoteBoolean, noteId }: Note) => {
  const dispatch = useDispatch();
  const {
    noteDetailData: noteDetail,
    noteDeleteData: noteDelete,
    reNote,
  } = useSelector((state: RootState) => state.dashboardReducer);
  useEffect(() => {
    dispatch(noteDetailLoading({ id: noteId }));

    if (noteDelete) {
      dispatch(noteDeleteSuccess(false));
    }
  }, [noteDelete, reNote]);
  const onExitNote = useCallback(() => {
    setNoteBoolean(false);
  }, []);
  const [hide, setHide] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    id: 0,
  });

  const onReNote = useCallback(
    (noteIds: number, content: string, title: string) => {
      setNoteData({
        ...noteData,
        title: title,
        content: content,
        id: noteIds,
      });
      setHide((prev) => !prev);
    },
    [noteData]
  );
  return (
    <>
      <St.Top>
        <St.Title>
          <St.TopButton onClick={() => onExitNote()}>
            <St.Arr />
            섹션노트 모두보기
          </St.TopButton>
          <St.Deletes onClick={() => onNote()} />
        </St.Title>
      </St.Top>
      <St.Center $active={hide === true}>
        <St.Date>
          작성일 : {noteDetail.date}
          <div>
            <St.Buttons
              $active
              onClick={() =>
                onReNote(
                  noteDetail.noteId,
                  noteDetail.content,
                  noteDetail.noteTitle
                )
              }
            >
              수정
            </St.Buttons>
            <St.Buttons $active={false}>삭제</St.Buttons>
          </div>
        </St.Date>
        <em>{noteDetail.noteTitle}</em>
        <St.Contents>
          <Content content={noteDetail.content} />
        </St.Contents>
      </St.Center>
      {hide && (
        <St.Bottom>
          <Editor
            path="lecture_note"
            tap="NoteRe"
            noteid={noteData.id}
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
