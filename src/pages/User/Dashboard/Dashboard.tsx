/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LectureCard, List } from "components";
import * as St from "./styles";

const Dashboard = () => {
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

  return (
    <section>
      <h1>박호연님, 반갑습니다 🏃‍♂️</h1>

      {/* 학습 중인 강의 */}
      <div>
        <St.TitleWrapper>
          <p>학습 중인 강의</p>
          <St.MoreBtn>더보기</St.MoreBtn>
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

      <St.Wrapper>
        <div>
          <St.TitleWrapper>
            <p>강의 노트</p>
            <St.MoreBtn>더보기</St.MoreBtn>
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
            <St.MoreBtn>더보기</St.MoreBtn>
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
