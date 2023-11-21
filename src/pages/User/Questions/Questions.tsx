/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {NoSearch} from 'asset';
import {useDate} from 'hooks';
import {UserTop, NoData, TableHeader, TableBody, Pagination} from 'components';
import * as St from './styles';
import {questionListLoading} from '../../../redux/reducer/dashboardReducer';

const Questions = () => {
  const dispatch = useDispatch();

  const [pageno, setPageno] = useState<number>(1);
  const tapList = [
    {id: 0, list: '전체'},
    {id: 1, list: '답변 대기'},
    {id: 2, list: '답변 완료'},
  ];
  const [tapOpen, setTapOpen] = useState<boolean>(false);
  const [tapLists, setTaplists] = useState(tapList[0].list);
  const tapOpsion = (item: string) => {
    setTaplists(item);
    setTapOpen(false);
  };

  const questionList = useSelector(
    (state: RootState) => state.dashboardReducer.questionListData
  );

  const {formattedDate} = useDate();

  useEffect(() => {
    if (tapLists === '전체') {
      dispatch(questionListLoading({page: pageno, status: 'all'}));
    } else if (tapLists === '답변 대기') {
      dispatch(questionListLoading({page: pageno, status: 'waiting'}));
    } else {
      dispatch(questionListLoading({page: pageno, status: 'completed'}));
    }
  }, [pageno, tapLists]);

  return (
    <section>
      <UserTop
        title="작성한 질문"
        sub="전체"
        count={questionList.questionCount}
      />
      <St.SortWrapper>
        <St.Sort
          $active={tapOpen === true}
          onClick={() => setTapOpen(!tapOpen)}
        >
          <St.SortLabel>{tapLists}</St.SortLabel>
          <St.Arr $active={tapOpen === true} />
          {tapOpen && (
            <St.SortUl>
              {tapList.map((item) => (
                <St.SortLi key={item.id} onClick={() => tapOpsion(item.list)}>
                  {item.list}
                </St.SortLi>
              ))}
            </St.SortUl>
          )}
        </St.Sort>
      </St.SortWrapper>
      <St.Table>
        <TableHeader />
        {questionList.questionCount === 0 ? (
          <NoData
            title="작성한 질문이 존재하지 않습니다"
            span="강의를 즐기시는 동안 궁금한 점이 있거나 이해가 안 가는 부분이 있다면 언제든지 질문해 주세요"
            tag={false}
            img={<NoSearch />}
          />
        ) : (
          questionList.dtolist.map((question, index) => (
            <TableBody
              key={index}
              no={index + 1 + (pageno - 1) * 10}
              page="questions"
              category="question"
              questionId={question.questionId}
              questionLectureTitle={question.questionLectureTitle}
              questionTitle={question.questionTitle}
              questionContentPreview={question.questionContentPreview}
              questionDate={formattedDate(question.questionDate || '')}
              answer={question.answer}
            />
          ))
        )}
      </St.Table>

      {questionList.questionCount > 0 && (
        <Pagination
          pageno={pageno}
          setPageno={setPageno}
          totalPages={questionList.totalPages}
        />
      )}
    </section>
  );
};

export default Questions;
