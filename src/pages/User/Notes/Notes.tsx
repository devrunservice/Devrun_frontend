/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {SearchBar, Pagination, List} from 'components';
import * as St from './styles';
import {noteLectureLoading} from '../../../redux/reducer/dashboardReducer';

// 강의 노트 1단계
const Notes = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(1);

  useEffect(() => {
    dispatch(noteLectureLoading({page: pageno}));
  }, [pageno]);

  const noteLectures = useSelector(
    (state: RootState) => state.dashboardReducer.noteLectureData
  );

  console.log(noteLectures.dtolist);

  return (
    <section>
      <St.TitleWrapper>
        <h1>강의 노트</h1>
        {/* <SearchBar /> */}
      </St.TitleWrapper>
      {noteLectures.dtolist.length === 0 ? (
        <St.ErrorMessage>수강한 강의가 없습니다.</St.ErrorMessage>
      ) : noteLectures.dtolist.every((lecture) => lecture.count === 0) ? (
        <St.ErrorMessage>작성한 노트가 없습니다.</St.ErrorMessage>
      ) : (
        <St.NoteListUl>
          {noteLectures.dtolist.map((lecture) => (
            <List
              key={lecture.lectureId}
              page="notes"
              category="note"
              lectureId={lecture.lectureId}
              lectureTitle={lecture.lectureTitle}
              lectureThumbnail={lecture.lectureThumbnail}
              lastStudyDate={lecture.lastStudyDate}
              count={lecture.count}
            />
          ))}
        </St.NoteListUl>
      )}

      <Pagination
        pageno={pageno}
        setPageno={setPageno}
        totalPages={noteLectures.totalPages}
      />
    </section>
  );
};

export default Notes;
