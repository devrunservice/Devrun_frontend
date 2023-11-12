/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {LectureTable, SearchBar, Pagination} from 'components';
import * as St from './styles';
import {noteLectureLoading} from '../../../redux/reducer/dashboardReducer';

// 강의 노트 1단계
const Notes = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(0);

  useEffect(() => {
    dispatch(noteLectureLoading({page: pageno}));
  }, []);

  const noteLectures = useSelector(
    (state: RootState) => state.dashboardReducer.noteLectureData
  );

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
        <ul>
          {noteLectures.dtolist.map((lecture) => (
            <LectureTable
              key={lecture.lectureId}
              lectureId={lecture.lectureId}
              lectureTitle={lecture.lectureTitle}
              lectureThumbnail={lecture.lectureThumbnail}
              lastStudyDate={lecture.lastStudyDate}
              count={lecture.count}
            />
          ))}
        </ul>
      )}

      {/* <Pagination pageno={pageno} setPageno={setPageno} data={noteLectures} /> */}
    </section>
  );
};

export default Notes;
