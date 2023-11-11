/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Learn, SearchBar, Pagination} from 'components';
import * as St from './style';
import {learningLoading} from '../../../redux/reducer/dashboardReducer';

const Learning = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(learningLoading({page: '1', status: 'all'}));
  }, []);

  const courses = useSelector(
    (state: RootState) => state.dashboardReducer.learningData
  );

  const [pageno, setPageno] = useState<number>(1);
  const [tap, SetTap] = useState<number>(1);
  // const tapList = [
  //   {id: 0, list: '학습순'},
  //   {id: 1, list: '신청순'},
  //   {id: 2, list: '제목순'},
  // ];
  // const [tapOpen, setTapOpen] = useState<boolean>(false);
  // const [tapLists, setTaplists] = useState(tapList[0].list);
  // const tapOpsion = (item: string) => {
  //   setTaplists(item);
  //   setTapOpen(false);
  // };

  useEffect(() => {
    if (tap === 1) {
      dispatch(learningLoading({page: 1, status: 'all'}));
    } else if (tap === 2) {
      // dispatch(learningLoading({page: 1, status: 'learning'}));
    } else if (tap === 3) {
      // dispatch(learningLoading({page: 1, status: 'complete'}));
    }
  }, [tap]);

  return (
    <section>
      <St.Top>
        <St.Title>내 학습 관리</St.Title>
        <SearchBar />
      </St.Top>
      <St.LearnCon>
        {/* <St.TapWrap> */}
        <St.Left>
          <St.Btn onClick={() => SetTap(1)} $active={tap === 1}>
            전체
          </St.Btn>
          <St.Btn onClick={() => SetTap(2)} $active={tap === 2}>
            학습중
          </St.Btn>
          <St.Btn onClick={() => SetTap(3)} $active={tap === 3}>
            완료
          </St.Btn>
        </St.Left>
        {/* <St.Tap $active={tapOpen === true}>
            <St.TapLabel onClick={() => setTapOpen(!tapOpen)}>
              {tapLists}
            </St.TapLabel>
            <St.Arr $active={tapOpen === true} />
            {tapOpen && (
              <St.TapUl>
                {tapList.map((item) => (
                  <St.TapLi key={item.id} onClick={() => tapOpsion(item.list)}>
                    {item.list}
                  </St.TapLi>
                ))}
              </St.TapUl>
            )}
          </St.Tap> */}
        {/* </St.TapWrap> */}
        <St.LearnUl>
          {tap === 1 &&
            courses.dtolist.map((course, index) => (
              <Learn
                key={index}
                title={course.title}
                thumbnail={course.thumbnail}
                progressRate={course.progressRate}
                rating={course.rating}
                lectureUrl={course.lectureUrl}
              />
            ))}
          {tap === 2 && <Learn />}
          {tap === 3 && <Learn />}
        </St.LearnUl>
      </St.LearnCon>
      {/* <Pagination pageno={pageno} setPageno={setPageno} /> */}
    </section>
  );
};
export default Learning;
