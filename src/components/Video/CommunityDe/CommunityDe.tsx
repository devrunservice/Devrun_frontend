/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {
  ConfirmModal,
  Button,
  Comment,
  Content,
  Editor,
  VideoTop,
} from 'components';
import * as St from './style';

import {questionDetailLoading} from '../../../redux/reducer/dashboardReducer';
import {questionDeleteLoading} from '../../../redux/reducer/videoViewReducer';
import {userInfoLoading} from '../../../redux/reducer/userReducer';
import {openModal} from '../../../redux/reducer/modalReducer';

interface communutiy {
  setQuestionId: React.Dispatch<
    React.SetStateAction<{questionId: number; questionIdBoolean: boolean}>
  >;
  questionId: {
    questionId: number;
    questionIdBoolean: boolean;
  };
  onCommunity: () => void;
}

const CommunityDe = ({setQuestionId, questionId, onCommunity}: communutiy) => {
  const dispatch = useDispatch();
  const {questionDetailData: questionDetail} = useSelector(
    (state: RootState) => state.dashboardReducer
  );
  console.log(questionDetail);
  const {saveQuest: reQuest} = useSelector(
    (state: RootState) => state.videoViewReducer
  );
  const {data} = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    dispatch(questionDetailLoading({id: questionId.questionId}));
  }, [reQuest]);
  useEffect(() => {
    dispatch(userInfoLoading(null));
  }, []);
  const [hide, setHide] = useState(false);
  const onHide = () => setHide((prev) => !prev);

  const onDelet = () => dispatch(openModal('해당 질문을 삭제하시겠습니까?'));

  const handleConfirm = () => {
    try {
      dispatch(questionDeleteLoading({id: questionDetail.questionId}));
      setQuestionId({...questionId, questionIdBoolean: false});
    } catch (error) {
      dispatch(openModal('질문삭제에 실패했습니다.'));
    }
  };
  return (
    <>
      <ConfirmModal onConfirm={handleConfirm} />
      <VideoTop
        text="커뮤니티"
        onButton={onCommunity}
        onExit={() => setQuestionId({...questionId, questionIdBoolean: false})}
      />
      {hide ? (
        <St.Editor>
          <Editor
            path="lecture_introduce"
            tap="CommunityRe"
            id={questionDetail.questionId}
            tit={questionDetail.questionTitle}
            con={questionDetail.content}
            setHide={setHide}
          />
        </St.Editor>
      ) : (
        <St.ContentWrap>
          <div>
            <span>수업질문</span>
            {data.id === questionDetail.studentId && (
              <div>
                <Button text="수정" color="main" onBtn={onHide} />
                <Button text="삭제" color="red" onBtn={onDelet} />
              </div>
            )}
          </div>
          <em>{questionDetail.questionTitle}</em>
          <ul>
            <li>{questionDetail.studentId}</li>
            <li>{questionDetail.date.slice(0, 10)}</li>
          </ul>
          <Content content={questionDetail.content} />
          <Comment
            text="답변"
            path="/questions"
            paramId={questionDetail.questionId}
          />
        </St.ContentWrap>
      )}
    </>
  );
};
export default CommunityDe;
