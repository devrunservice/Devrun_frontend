/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {useDate} from 'hooks';
import {Comment, Content} from 'components';
import {Button} from 'style/Common';
import * as St from './styles';
import {
  questionDeleteSuccess,
  questionDetailLoading,
} from '../../../redux/reducer/dashboardReducer';
import {openModal} from '../../../redux/reducer/modalReducer';

const QuestionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {questionId} = useParams();

  const {formattedDate} = useDate();

  const {
    questionDetailData: questionDetail,
    questionDeleteData: questionDelete,
  } = useSelector((state: RootState) => state.dashboardReducer);

  useEffect(() => {
    dispatch(questionDetailLoading({id: questionId}));
  }, []);

  useEffect(() => {
    if (questionDelete) {
      navigate('/questions');
      dispatch(questionDeleteSuccess(false));
    }
  }, [questionDelete]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;
    if (name === 'questionList') {
      navigate('/questions');
    } else if (name === 'questionEdit') {
      navigate(
        `/videoView/${questionDetail.lectureId}/${questionDetail.videoId}`
      );
    } else {
      await dispatch(openModal('해당 질문을 삭제하시겠습니까?'));
    }
  };

  return (
    <section>
      <St.QuestionDetailWrapper>
        <St.QuestionTitle>{questionDetail.questionTitle}</St.QuestionTitle>
        <St.LectureTitle>파이썬</St.LectureTitle>
        <St.QuestionDate>{`작성일 : ${formattedDate(
          questionDetail.date || ''
        )}`}</St.QuestionDate>
      </St.QuestionDetailWrapper>
      <St.QuestionContent>
        <Content content={questionDetail.content} />
      </St.QuestionContent>
      <St.QuestionBtn>
        <Button
          $active={false}
          name="questionList"
          type="button"
          onClick={handleClick}
        >
          목록
        </Button>
        <Button $active type="button" name="questionEdit" onClick={handleClick}>
          수정
        </Button>
        <Button
          $active
          type="button"
          name="questionDelete"
          onClick={handleClick}
        >
          삭제
        </Button>
      </St.QuestionBtn>
      <Comment text="댓글" />
    </section>
  );
};

export default QuestionDetail;
