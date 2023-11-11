/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from "react";
import DOMPurify from "dompurify";
import { Editor } from "components";

import * as St from "./style";

interface Note {
  onNote: () => void;
  id: number;
  setNoteBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  getNote: { chapter: number; content: string; date: string; noteId: number; noteTitle: string; subHeading: string; }[]
}


const NoteDe = ({
  onNote,
  id,
  getNote,
  setNoteBoolean,
}: Note) => {
  const onExitNote = useCallback(() => {
    setNoteBoolean(false);
  }, []);
  const [hide,setHide] = useState(false)
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    id:0,
  });
  const onReNote = useCallback(
    (noteId: number, content: string, title: string) => {
      setNoteData({
        ...noteData,
        title: title,
        content: content,
        id: noteId,
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
        {getNote
          .filter((k) => k.noteId === id)
          .map((v) => {
            return (
              <>
                <div>
                  작성일 : {v.date}
                  <div>
                    <St.Buttons
                      $active
                      onClick={() => onReNote(v.noteId, v.content, v.noteTitle)}
                    >
                      수정
                    </St.Buttons>
                    <St.Buttons $active={false}>삭제</St.Buttons>
                  </div>
                </div>
                <em>{v.noteTitle}</em>
                <St.Contents
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(v.content),
                  }}
                />
              </>
            );
          })}
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
