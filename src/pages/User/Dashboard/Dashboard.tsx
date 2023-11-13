/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {decode} from 'utils/decode';
import {Calender, Learn, List} from 'components';
import * as St from './styles';
import {myInfoLoading} from '../../../redux/reducer/mypageReducer';
import {
  learningLoading,
  noteLectureLoading,
  questionLectureLoading,
} from '../../../redux/reducer/dashboardReducer';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = decode('accessToken');
    dispatch(myInfoLoading({id: userId}));
    dispatch(learningLoading({page: '1', status: 'all'}));
    dispatch(noteLectureLoading({page: 1}));
    dispatch(questionLectureLoading({page: 1}));
  }, []);

  const userInfo = useSelector((state: RootState) => state.mypageReducer.data);
  const courses = useSelector(
    (state: RootState) => state.dashboardReducer.learningData
  );
  const noteLectures = useSelector(
    (state: RootState) => state.dashboardReducer.noteLectureData
  );
  const noteQuestions = useSelector(
    (state: RootState) => state.dashboardReducer.questionLectureData
  );

  const handleMoreBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;

    if (name === 'coursesBtn') {
      navigate('/learning');
    } else if (name === 'notesBtn') {
      navigate('/notes');
    } else {
      navigate('/questions');
    }
  };

  console.log(courses);

  return (
    <section>
      <St.WelcomeMessage>
        <div>{userInfo.name}</div>
        <div>&nbsp;님, </div>
        <div>&nbsp; 반갑습니다 🏃‍♂️</div>
      </St.WelcomeMessage>

      {/* 학습 중인 강의 */}
      <St.LearningWrapper>
        <St.TitleWrapper>
          <St.Title>학습 중인 강의</St.Title>
          <St.MoreBtn type="button" name="coursesBtn" onClick={handleMoreBtn}>
            더보기
          </St.MoreBtn>
        </St.TitleWrapper>
        <St.ListWrapper>
          {courses.dtolist.slice(0, 3).map((course) => (
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
          ))}
        </St.ListWrapper>
      </St.LearningWrapper>

      {/* 강의 노트 & 작성한 질문 */}
      <St.NoteQuestionWrapper>
        <div>
          <St.TitleWrapper>
            <St.Title>강의 노트</St.Title>
            <St.MoreBtn type="button" name="notesBtn" onClick={handleMoreBtn}>
              더보기
            </St.MoreBtn>
          </St.TitleWrapper>
          {noteLectures.dtolist.length === 0 ? (
            <St.ErrorMessage>수강한 강의가 없습니다.</St.ErrorMessage>
          ) : noteLectures.dtolist.every((lecture) => lecture.count === 0) ? (
            <St.ErrorMessage>작성한 노트가 없습니다.</St.ErrorMessage>
          ) : (
            <ul>
              {noteLectures.dtolist.slice(0, 3).map((lecture) => (
                <List
                  key={lecture.lectureId}
                  category="notes"
                  lectureId={lecture.lectureId}
                  lectureTitle={lecture.lectureTitle}
                  lastStudyDate={lecture.lastStudyDate}
                  count={lecture.count}
                />
              ))}
            </ul>
          )}
        </div>
        <div>
          <St.TitleWrapper>
            <St.Title>작성한 질문</St.Title>
            <St.MoreBtn
              type="button"
              name="questionsBtn"
              onClick={handleMoreBtn}
            >
              더보기
            </St.MoreBtn>
          </St.TitleWrapper>
          <ul>
            {/* {noteQuestions.slice(0, 3).map((question, index) => (
              <List
                key={index}
                category="questions"
                title={question.questionTitle}
                date={question.date}
              />
            ))} */}
          </ul>
        </div>
      </St.NoteQuestionWrapper>
      {/* 월간 학습 달력 */}
      <Calender />
    </section>
  );
};

export default Dashboard;
