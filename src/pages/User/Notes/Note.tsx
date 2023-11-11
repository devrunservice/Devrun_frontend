/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {RootState} from 'redux/store';
import {NoteCard, SearchBar} from 'components';
import * as St from './styles';
import {noteListLoading} from '../../../redux/reducer/dashboardReducer';

// 강의 노트 2단계
const Note = () => {
  const dispatch = useDispatch();
  const {lectureId} = useParams();

  const [pageno, setPageno] = useState<number>(0);

  useEffect(() => {
    dispatch(noteListLoading({page: pageno, id: lectureId}));
  }, []);

  const noteList = useSelector(
    (state: RootState) => state.dashboardReducer.noteListData
  );

  return (
    <section>
      <St.TitleWrapper>
        <h1>강의 노트</h1>
        <SearchBar />
      </St.TitleWrapper>
      {noteList.dtolist.length === 0 ? (
        <St.ErrorMessage>작성한 노트가 없습니다.</St.ErrorMessage>
      ) : (
        <St.NoteWrapper>
          {noteList.dtolist.map((note) => (
            <NoteCard
              key={note.noteId}
              noteId={note.noteId}
              noteTitle={note.noteTitle}
              videoId={note.videoId}
              chapter={note.chapter}
              subHeading={note.subHeading}
              date={note.date}
              contentPreview={note.contentPreview}
            />
          ))}
        </St.NoteWrapper>
      )}
    </section>
  );
};

export default Note;
