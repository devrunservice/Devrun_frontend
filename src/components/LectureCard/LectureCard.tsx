/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StarFill} from 'asset';
import * as St from './style';

interface LectureCardType {
  key?: number;
  category: string;
  title?: string;
  progress?: number;
}
const LectureCard: React.FC<LectureCardType> = ({
  category,
  title,
  progress,
}) => (
  <St.List>
    <St.ListThumbnail />
    <St.ListTextArea>
      <St.ListTitle>
        {title ||
          '제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다'}
      </St.ListTitle>
      {category === 'dashboard' && (
        <>
          <St.Progress>
            <p>진도율</p>
            <div>
              <StarFill />
              <St.ListViewCount>2.8</St.ListViewCount>
            </div>
          </St.Progress>
          <div>{progress}</div>
        </>
      )}
      {category === 'detail' ||
        (category === 'home' && (
          <>
            <span>주제</span>
            <St.ListTeacher>강사명</St.ListTeacher>
            <St.ListUtils>
              <StarFill />
              <St.ListViewCount>2.8 · 550명 수강</St.ListViewCount>
            </St.ListUtils>
          </>
        ))}
    </St.ListTextArea>
  </St.List>
);

export default LectureCard;
