/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { LectureCard, List } from "components";
import * as St from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    {
      title: "강좌명",
      name: "강사명",
    },
    {
      title: "강좌명",
      name: "강사명",
    },
    {
      title: "강좌명",
      name: "강사명",
    },
  ]);
  const [notes, setNotes] = useState([
    {
      title: "강의명",
    },
    {
      title: "강의명",
    },
    {
      title: "강의명",
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      title: "질문명",
    },
    {
      title: "질문명",
    },
    {
      title: "질문명",
    },
  ]);

  const userData = useSelector((state: RootState) => state.userReducer.data);

  const handleMoreBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name === "coursesBtn") {
      navigate("/studymanage");
    } else if (name === "notesBtn") {
      navigate("/notes");
    } else {
      navigate("/questions");
    }
  };

  return (
    <section>
      <St.WelcomeMessage>
        <div>{userData.name}</div>
        <div>&nbsp;님, </div>
        <div>&nbsp; 반갑습니다 🏃‍♂️</div>
      </St.WelcomeMessage>

      {/* 학습 중인 강의 */}
      <div>
        <St.TitleWrapper>
          <p>학습 중인 강의</p>
          <St.MoreBtn type="button" name="coursesBtn" onClick={handleMoreBtn}>
            더보기
          </St.MoreBtn>
        </St.TitleWrapper>
        <St.ListWrapper>
          {courses.map((course, index) => (
            <LectureCard
              key={index}
              category="dashboard"
              title={course.title}
            />
          ))}
        </St.ListWrapper>
      </div>

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
