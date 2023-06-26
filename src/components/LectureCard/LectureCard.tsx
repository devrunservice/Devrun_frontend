import React from 'react';
import { StarFill } from 'asset';
import * as St from './style'

const LectureCard = () => (
    <St.List>
      <St.ListThumbnail />
      <St.ListTextArea>
        <St.ListTitle>
          제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
        </St.ListTitle>
        <span>주제</span>
        <St.ListTeacher>
          강사명
        </St.ListTeacher>
        <St.ListUtils>
          <StarFill />
          <St.ListViewCount>
            2.8 · 550명 수강
          </St.ListViewCount>
        </St.ListUtils>
      </St.ListTextArea>
    </St.List>
)


export default LectureCard;