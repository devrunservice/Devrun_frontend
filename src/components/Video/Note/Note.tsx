import Editor from "components/Editor/Editor";
import React from "react";
import * as St from "./style";


interface INote {
  onNote: () => void;
}


const Note = ({ onNote }: INote) => {
  return (
    <St.NoteWrap>
      <div>
        <St.Top>
          <St.Title>
            노트 <St.Deletes onClick={() => onNote()} />
          </St.Title>
        </St.Top>
        <St.Center>
          <St.Button>
            <em>제목을 적어주세요 </em>
            <p>asdasdasdasd</p>
            <span>작성일 : 2023-10-27</span>
          </St.Button>
          
        </St.Center>
      </div>
      <St.Bottom>
        <Editor path="Note" tap="노트" />
      </St.Bottom>
    </St.NoteWrap>
  );
};
export default Note;
