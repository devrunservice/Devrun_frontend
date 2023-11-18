import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as I from 'types';
import * as St from '../style';

const TableBody: React.FC<I.QuestionListType> = ({
  no,
  questionId,
  questionTitle,
  questionDate,
  answer,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/questions/${questionId}`);
  };

  return (
    <St.TableLi onClick={onClick} $cursor key={questionId}>
      <St.Num>{no}</St.Num>
      <St.Text>{questionTitle}</St.Text>
      <St.With15>{questionDate}</St.With15>
      <St.With15>{answer === 0 ? '답변 대기' : '답변 완료'}</St.With15>
    </St.TableLi>
  );
};

export default TableBody;
