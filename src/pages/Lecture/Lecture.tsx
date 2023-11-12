/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useParams } from "react-router-dom";
import { Pagination, LectureCard, NoData } from "components";
import {NoSearch} from "asset";
import * as St from "./style";
import { categorySearchLoading } from "../../redux/reducer/learningReducer";



const Lecture = () => {
   const param = useParams();
  const dispatch = useDispatch()
  const { lecture } = useSelector( (state: RootState) => state.learningReducer );
  const [pageno, setPageno] = useState<number>(1);
  const [lectureName, setlectureName] = useState(param.lectureBigCategory);
  const tapList = [
    { list: "등록순", order: "lecture_start" },
    { list: "가격순", order: "lecture_Price" },
    { list: "평점순", order: "lecture_rating" },
    { list: "구매순", order: "buy_count" },
  ];
  const [tapOpen, setTapOpen] = useState<boolean>(false);
  const [option, setOption] = useState({
    list: tapList[0].list,
    order: tapList[0].order,
  });
  const tapOpsion = (list: string, order: string) => {
    setOption({ ...option, list: list, order: order });
    setTapOpen(false);
  };
  const validCategories = [
    "개발기초",
    "전체강의",
    "프론트엔드",
    "데이터",
    "백엔드",
    "모바일",
    "보안",
    "게임개발",
    "데브옵스",
    "AI",
    "블록체인",
    "자격증",
    "코딩테스트",
  ];
  useEffect(() => {
    if (lectureName !== param.lectureBigCategory) {
      setPageno(1);
      setlectureName(param.lectureBigCategory);
    }

    if (validCategories.includes(param.lectureBigCategory ?? "")) {
      dispatch(
        categorySearchLoading({
          page: pageno,
          bigcategory:
            param.lectureBigCategory === "전체강의"
              ? ""
              : param.lectureBigCategory,
          order: option.order,
          q: "",
        })
      );
    }
  }, [param.lectureBigCategory, pageno, option.order]);
  return (
    <>
      <St.Top>
        <St.Title>
          {lecture.message !== "Resource not exists" ? (
            <>
              <span>{lecture.totalelements}</span>개의 강의
            </>
          ) : (
            <>
              <span>0</span>개의 강의
            </>
          )}
        </St.Title>
        <St.Tap $active={tapOpen === true}>
          <St.TapLabel onClick={() => setTapOpen(!tapOpen)}>
            {option.list}
          </St.TapLabel>
          <St.Arr $active={tapOpen === true} />
          {tapOpen && (
            <St.TapUl>
              {tapList.map((v) => (
                <St.TapLi
                  key={v.list}
                  onClick={() => tapOpsion(v.list, v.order)}
                >
                  {v.list}
                </St.TapLi>
              ))}
            </St.TapUl>
          )}
        </St.Tap>
      </St.Top>
      {lecture.message !== "Resource not exists" ? (
        <>
          <St.LectureCardUl>
            {lecture.dtolist.map((v, index) => {
              return (
                <LectureCard
                  key={index}
                  lectureBigCategory={v.lectureBigCategory}
                  lectureName={v.lectureName}
                  lectureIntro={v.lectureIntro}
                  lectureThumbnail={v.lectureThumbnail}
                  lectureMidCategory={v.lectureMidCategory}
                  mentoId={v.mentoId}
                  lectureprice={v.lectureprice}
                  buycount={v.buycount}
                  rating={v.rating}
                />
              );
            })}
          </St.LectureCardUl>
          <Pagination
            pageno={pageno}
            setPageno={setPageno}
            totalPages={lecture.totalpages}
          />
        </>
      ) : (
        <NoData
          title="해당 강의가 존재하지 않습니다"
          span="다른 검색어를 입력해주세요"
          img={<NoSearch />}
        />
      )}
    </>
  );
};

export default Lecture;
