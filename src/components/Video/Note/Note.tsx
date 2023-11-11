import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import DOMPurify from "dompurify";
import { Editor, NoteDe } from "components";

import * as St from "./style";
import { getNoteLoding } from "../../../redux/reducer/videoViewReducer";

interface INote {
  onNote: () => void;
  videoid: string;
  lectureId: number;
  sectionNumber:number;
}



const Note = ({ onNote, videoid, lectureId, sectionNumber }: INote) => {
  const dispatch = useDispatch();
  const { getNote, reNote } = useSelector(
    (state: RootState) => state.VideoViewSlice
  );
  useEffect(() => {
    dispatch(getNoteLoding(lectureId));
  }, [reNote]);
  const [noteId, setNoteId] = useState(0);
  const [noteBoolean,setNoteBoolean] = useState(false)
  const onNoteDe = useCallback(
    ( id: number) => {
      setNoteId(id);
      setNoteBoolean(true);
    },
    [reNote]
  );

  return (
    <St.NoteWrap>
      {noteBoolean ? (
        <NoteDe
          onNote={onNote}
          id={noteId}
          getNote={getNote}
          setNoteBoolean={setNoteBoolean}
        />
      ) : (
        <>
          <St.Top>
            <St.Title>
              노트 <St.Deletes onClick={() => onNote()} />
            </St.Title>
          </St.Top>
          <St.Center>
            {getNote
              .filter((k) => k.chapter === sectionNumber)
              .map((v) => {
                return (
                  <St.NoteCon key={v.noteId} onClick={() => onNoteDe(v.noteId)}>
                    <em>{v.noteTitle}</em>
                    <St.Contents
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(v.content),
                      }}
                    />
                    <span> 작성일 : {v.date} </span>
                  </St.NoteCon>
                );
              })}
          </St.Center>
          <St.Bottom>
            <Editor path="lecture_note" tap="Note" videoid={videoid} />
          </St.Bottom>
        </>
      )}
    </St.NoteWrap>
  );
};
export default Note;
