/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {LectureTable, SearchBar, Pagination} from 'components';
import {TitleWrapper} from '../Notes/styles';
import {questionLectureLoading} from '../../../redux/reducer/dashboardReducer';

const Notes = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(1);

  useEffect(() => {
    dispatch(questionLectureLoading({page: pageno}));
  }, []);

  const questionLectures = useSelector(
    (state: RootState) => state.dashboardReducer.questionLectureData
  );

  return (
    <section>
      <TitleWrapper>
        <h1>작성한 질문</h1>
        {/* <SearchBar /> */}
      </TitleWrapper>
      {questionLectures.dtolist.map((lecture) => (
        <LectureTable
          key={lecture.lectureId}
          lectureId={lecture.lectureId}
          lectureTitle={lecture.lectureTitle}
          lectureThumbnail={lecture.lectureThumbnail}
          lastStudyDate={lecture.lastStudyDate}
          count={lecture.count}
        />
      ))}

      {/* <Pagination pageno={pageno} setPageno={setPageno} data={questionLectures} /> */}
    </section>
  );
};

export default Notes;
