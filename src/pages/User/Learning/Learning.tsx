/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {NoSearch} from 'asset';
import {UserTop, Learn, NoData, Pagination} from 'components';
import * as St from './style';
import {learningLoading} from '../../../redux/reducer/dashboardReducer';

const Learning = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(learningLoading({page: '1', status: 'all'}));
  // }, []);

  const courses = useSelector(
    (state: RootState) => state.dashboardReducer.learningData
  );

  const [pageno, setPageno] = useState<number>(1);
  const [tap, setTap] = useState<number>(1);

  useEffect(() => {
    if (tap === 1) {
      dispatch(learningLoading({page: pageno, status: 'All'}));
    } else if (tap === 2) {
      dispatch(learningLoading({page: pageno, status: 'Inprogress'}));
    } else if (tap === 3) {
      dispatch(learningLoading({page: pageno, status: 'Completed'}));
    }
  }, [tap, pageno]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;

    if (name === 'all') {
      setPageno(1);
      setTap(1);
    } else if (name === 'inProgress') {
      setPageno(1);
      setTap(2);
    } else {
      setPageno(1);
      setTap(3);
    }
  };

  return (
    <section>
      <UserTop title="내 학습 관리" />
      <St.LearnCon>
        {/* <St.TapWrap> */}
        <St.Left>
          <St.Btn name="all" onClick={handleClick} $active={tap === 1}>
            전체
          </St.Btn>
          <St.Btn name="inProgress" onClick={handleClick} $active={tap === 2}>
            학습중
          </St.Btn>
          <St.Btn name="completed" onClick={handleClick} $active={tap === 3}>
            완료
          </St.Btn>
        </St.Left>
        <St.LearnUl>
          {(tap === 1 || tap === 2) && courses.dtolist.length > 0 ? (
            courses.dtolist.map((course) => (
              <Learn
                key={course.id}
                id={course.id}
                title={course.title}
                mentoName={course.mentoName}
                thumbnail={course.thumbnail}
                progressRate={course.progressRate}
                rating={course.rating}
                lastViewDate={course.lastViewDate}
                expiryDate={course.expiryDate}
              />
            ))
          ) : tap === 3 && courses.dtolist.length > 0 ? (
            courses.dtolist.map((course) => (
              <Learn
                key={course.id}
                id={course.id}
                title={course.title}
                mentoName={course.mentoName}
                thumbnail={course.thumbnail}
                progressRate={course.progressRate}
                rating={course.rating}
                lastViewDate={course.lastViewDate}
                expiryDate={course.expiryDate}
              />
            ))
          ) : tap === 1 || tap === 2 ? (
            <NoData
              title="수강한 강의가 존재하지 않습니다"
              span="강의를 구매해주세요"
              tag
              img={<NoSearch />}
            />
          ) : (
            <NoData
              title="완료한 강의가 존재하지 않습니다"
              span="언제든지 새로운 지식을 습득할 수 있도록 강의를 들으며 즐겁게 학습해 보세요!"
              tag={false}
              img={<NoSearch />}
            />
          )}
        </St.LearnUl>
      </St.LearnCon>
      {courses.dtolist.length > 0 && (
        <Pagination
          pageno={pageno}
          setPageno={setPageno}
          totalPages={courses.totalPages}
        />
      )}
    </section>
  );
};
export default Learning;
