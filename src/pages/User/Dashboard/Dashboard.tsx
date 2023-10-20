/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {decode} from 'utils/decode';
import {Learn, List} from 'components';
import * as St from './styles';
import {myInfoLoading} from '../../../redux/reducer/mypageReducer';
import {learningLoading} from '../../../redux/reducer/learningReducer';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = decode('accessToken');
    dispatch(myInfoLoading({id: userId}));
    dispatch(learningLoading(null));
  }, []);

  const userInfo = useSelector((state: RootState) => state.mypageReducer.data);
  const courses = useSelector((state: RootState) => state.learningReducer.data);

  console.log(courses);

  const [notes, setNotes] = useState([
    {
      title: '강의명',
    },
    {
      title: '강의명',
    },
    {
      title: '강의명',
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      title: '질문명',
    },
    {
      title: '질문명',
    },
    {
      title: '질문명',
    },
  ]);

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
          <p>학습 중인 강의</p>
          <St.MoreBtn type="button" name="coursesBtn" onClick={handleMoreBtn}>
            더보기
          </St.MoreBtn>
        </St.TitleWrapper>
        <St.ListWrapper>
          {courses.slice(0, 3).map((course, index) => (
            <Learn
              key={index}
              title={course.title}
              thumbnail={course.thumbnail}
              progressRate={course.progressRate}
              rating={course.rating}
              lectureUrl={course.lectureUrl}
            />
          ))}
        </St.ListWrapper>
      </St.LearningWrapper>

      {/* 강의 노트 & 작성한 질문 */}
      <St.Wrapper>
        <div>
          <St.TitleWrapper>
            <p>강의 노트</p>
            <St.MoreBtn type="button" name="notesBtn" onClick={handleMoreBtn}>
              더보기
            </St.MoreBtn>
          </St.TitleWrapper>
          <ul>
            {notes.map((note, index) => (
              <List key={index} title={note.title} />
            ))}
          </ul>
        </div>
        <div>
          <St.TitleWrapper>
            <p>작성한 질문</p>
            <St.MoreBtn
              type="button"
              name="questionsBtn"
              onClick={handleMoreBtn}
            >
              더보기
            </St.MoreBtn>
          </St.TitleWrapper>
          <ul>
            {questions.map((question, index) => (
              <List key={index} title={question.title} />
            ))}
          </ul>
        </div>
      </St.Wrapper>
    </section>
  );
};

export default Dashboard;
