/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
// import DOMPurify from "dompurify";
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
  
   const [pageno, setPageno] = useState<number>(1);

   useEffect(() => {
     dispatch(noteListLoading({ page: pageno, id: lectureId }));
   }, [pageno]);
    const { noteListData,hasMoreNote, loading } = useSelector(
      (state: RootState) => state.dashboardReducer
    );
   useEffect(() => {
     const onScroll = () => {
       if (
         window.scrollY + document.documentElement.clientHeight >
         document.documentElement.scrollHeight - 300
       ) {
         if (!loading && hasMoreNote) {
           dispatch(noteListLoading({ page: 2, id: lectureId }));
         }
       }
     };
     window.addEventListener("scroll", onScroll);
     return () => {
       window.removeEventListener("scroll", onScroll);
     };
   }, [loading, hasMoreNote]);




  

   console.log(noteListData);

  return (
    <St.NoteWrap>
      <St.Top>
        <St.Title>
          노트 <St.Deletes onClick={() => onNote()} />
        </St.Title>
      </St.Top>
      <St.Center>
        <St.NoteCon>
          {noteListData.dtolist.map((v)=>{
            return(
              <>
              <em>{v.noteTitle}</em>
          <St.Contents>{v.subHeading}</St.Contents>
          <span> 작성일 : {v.date} </span>
          </>
            )
          })}
          
        </St.NoteCon>
      </St.Center>
      <St.Bottom>
        <Editor path="lecture_note" tap="Note" videoid={videoid} />
      </St.Bottom>
    </St.NoteWrap>
  );
};
export default Note;
