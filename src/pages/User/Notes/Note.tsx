/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {RootState} from 'redux/store';
import {NoSearch} from 'asset';
import {UserTop, NoData, NoteCard, Pagination, SearchBar} from 'components';
import * as St from './style';
import {noteListLoading} from '../../../redux/reducer/dashboardReducer';

// 강의 노트 2단계
const Note = () => {
  const dispatch = useDispatch();
  const {lectureId} = useParams();

  const [pageno, setPageno] = useState<number>(1);

  const {noteListData: noteList, noteDeleteData: noteDelete} = useSelector(
    (state: RootState) => state.dashboardReducer
  );

  useEffect(() => {
    dispatch(noteListLoading({page: pageno, id: lectureId}));
  }, [pageno, noteDelete]);

  return (
    <section>
      <UserTop title="강의 노트" />
      {noteList.dtolist.length === 0 ? (
        <NoData
          title="작성한 노트가 존재하지 않습니다"
          span="첫 노트를 작성해보세요"
          tag={false}
          img={<NoSearch />}
        />
      ) : (
        <St.NoteUl>
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
        </St.NoteUl>
      )}

      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        totalPages={noteList.totalPages}
      />
    </section>
  );
};

export default Note;
