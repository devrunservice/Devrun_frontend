/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {List, SearchBar, Pagination} from 'components';
import {TitleWrapper} from '../Notes/styles';
import {questionListLoading} from '../../../redux/reducer/dashboardReducer';

const Notes = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(1);

  useEffect(() => {
    dispatch(questionListLoading({page: pageno}));
  }, []);

  const questionList = useSelector(
    (state: RootState) => state.dashboardReducer.questionListData
  );

  return (
    <section>
      <TitleWrapper>
        <h1>작성한 질문</h1>
        {/* <SearchBar /> */}
      </TitleWrapper>
      {/* {questionList.dtolist.map((question) => (
        <List
          key={1}
          page="questions"
          category="questioin"
          questionId={2}
          questionLectureTitle="hi"
          questionTitle="hello"
          questionContentPreview="previewpreview"
          questionDate="2023-06-15"
          questionCount={1}
        />
      ))} */}

      {/* <Pagination pageno={pageno} setPageno={setPageno} totalPages={questionList.totalPages} /> */}
    </section>
  );
};

export default Notes;
