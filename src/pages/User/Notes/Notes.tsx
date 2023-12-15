/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {NoSearch} from 'asset';
import {SearchBar, Pagination, List, UserTop, NoData} from 'components';
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

  return (
    <section>
      <UserTop title="강의 노트" />
      {noteLectures.dtolist.length === 0 ? (
        <NoData
          title="수강한 강의가 존재하지 않습니다"
          span="강의를 구매해주세요"
          tag
          img={<NoSearch />}
        />
      ) : noteLectures.dtolist.every((lecture) => lecture.count === 0) ? (
        <NoData
          title="작성한 노트가 존재하지 않습니다"
          span="첫 노트를 작성해보세요"
          tag={false}
          img={<NoSearch />}
        />
      ) : (
        <>
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
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            totalPages={noteLectures.totalPages}
          />
        </>
      )}
    </section>
  );
};

export default Notes;
