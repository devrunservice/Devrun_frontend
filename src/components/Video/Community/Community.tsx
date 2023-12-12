
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Btn, CommunityDe, Editor, VideoTop } from "components";

import * as St from "./style";
import { getQuestLoding } from "../../../redux/reducer/videoViewReducer";

interface Communitys {
  onCommunity: () => void;
  lectureId: number;
  videoid: string;
}

const Community = ({ onCommunity, lectureId, videoid }: Communitys) => {
  const [hide, setHide] = useState(false);
  const onHide = () => setHide((prev) => !prev);
  const [questionId, setQuestionId] = useState({
    questionId: 0,
    questionIdBoolean:false,
  });
  const dispatch = useDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { quest, saveQuest, questPage } = useSelector(
    (state: RootState) => state.videoViewReducer
  );
  useEffect(() => {
    dispatch(getQuestLoding({ page: 1, lectureId: lectureId }));
  }, [saveQuest]);
  useEffect(() => {
    const onScroll = () => {
      if (
        scrollRef.current !== null &&
        scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight - 100
      ) {
        if (questPage !== quest.totalPages) {
          dispatch(
            getQuestLoding({ page: questPage + 1, lectureId: lectureId })
          );
        }
      }
    };

    if (scrollRef.current !== null)
      scrollRef.current.addEventListener("scroll", onScroll);
    return () => {
      if (scrollRef.current !== null)
        scrollRef.current.removeEventListener("scroll", onScroll);
    };
  }, [questPage, quest.totalPages]);
  const onQuest = useCallback((v:number) => {
    setQuestionId({ ...questionId, questionId: v, questionIdBoolean:!questionId.questionIdBoolean});
  }, [questionId]);
  return (
    <St.CommunityWrap>
      {questionId.questionIdBoolean ? (
        <CommunityDe
          setQuestionId={setQuestionId}
          questionId={questionId}
          onCommunity={onCommunity}
        />
      ) : (
        <>
          {hide === false && (
            <>
              <VideoTop text="커뮤니티" onButton={onCommunity} />
              <St.Center ref={scrollRef}>
                {quest.message === "Resource not exists" ? (
                  <St.NoQuest>해당강의에 질문이 없습니다.</St.NoQuest>
                ) : (
                  quest.dtolist?.map((v) => {
                    return (
                      <St.Button
                        key={v.questionId}
                        onClick={() => onQuest(v.questionId)}
                      >
                        <St.BtnTop>
                          <span>수업질문</span>
                          <em>{v.questionTitle}</em>
                          <p>{v.questionContentPreview}</p>
                        </St.BtnTop>
                        <St.BtnBtm>
                          <p>
                            {v.studentId} ·{" "}
                            <span>{v.questionDate.slice(0, 10)}</span>
                          </p>
                          <em>답변수 : {v.answer}</em>
                        </St.BtnBtm>
                      </St.Button>
                    );
                  })
                )}
              </St.Center>
              <St.Write>
                <Btn onBtn={onHide} color="full" text="글 작성하기" />
              </St.Write>
            </>
          )}

          {hide && (
            <>
              <VideoTop
                text="커뮤니티"
                onButton={onCommunity}
                onExit={() => setHide(false)}
              />
              <St.Editor>
                <Editor
                  path="lecture_introduce"
                  tap="Community"
                  videoid={videoid}
                  id={lectureId}
                  setHide={setHide}
                />
              </St.Editor>
            </>
          )}
        </>
      )}
    </St.CommunityWrap>
  );
};

export default Community;
