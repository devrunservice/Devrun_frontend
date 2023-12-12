
import React, {  useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Editor, NoteDe } from "components";
import * as St from "./style";
import { noteListLoading } from "../../../redux/reducer/dashboardReducer";

interface INote {
  onNote: () => void;
  videoid: string;
  lectureId: number;
}



const Note = ({ onNote, videoid, lectureId }: INote) => {
  const dispatch = useDispatch();
  
  const [noteBoolean, setNoteBoolean] = useState(false);
  const [noteId, setNoteId] = useState(0);
  const { noteListData, noteList, reNote } = useSelector(
    (state: RootState) => state.dashboardReducer
  );
  const scrollRef = useRef<HTMLDivElement>(null)
   useEffect(() => {
     dispatch(noteListLoading({ page: 1, id: lectureId }));
   }, [reNote]);
  useEffect(() => {
    const onScroll = () => {
      if (
        scrollRef.current !== null &&
        scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight - 100
      ) {
        if (noteList.totalPages !== noteListData.totalPages) {
          dispatch(
            noteListLoading({ page: noteList.totalPages + 1, id: lectureId })
          );
        }
      }
    };
    if (scrollRef.current !== null)
      scrollRef.current.addEventListener("scroll", onScroll);

    return () => {
      if (scrollRef.current !== null)
        scrollRef.current.removeEventListener("scroll", onScroll);
    };
  }, [noteList.totalPages, noteListData.totalPages]);

  const onNoteDe = (v:number)=>{
    setNoteBoolean(true)
    setNoteId(v)
  }

  return (
    <St.NoteWrap>
      {noteBoolean ? (
        <NoteDe
          setNoteBoolean={setNoteBoolean}
          onNote={onNote}
          noteId={noteId}
        />
      ) : (
        <>
          <St.Top>
            <St.Title>
              노트 <St.Deletes onClick={() => onNote()} />
            </St.Title>
          </St.Top>
          <St.Center ref={scrollRef}>
            {noteList.dtolist.map((v) => {
              return (
                <St.NoteCon key={v.noteId} onClick={() => onNoteDe(v.noteId)}>
                  <em>{v.noteTitle}</em>
                  <p>{v.contentPreview}</p>
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
