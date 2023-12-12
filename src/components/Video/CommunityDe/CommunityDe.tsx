/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Btn, Content, Editor, VideoTop } from "components";
import * as St from "./style";

import {
  questionDeleteLoading,
  questionDetailLoading,
} from "../../../redux/reducer/dashboardReducer";
import { userInfoLoading } from "../../../redux/reducer/userReducer";

interface communutiy {
  setQuestionId: React.Dispatch<
    React.SetStateAction<{ questionId: number; questionIdBoolean: boolean }>
  >;
  questionId: {
    questionId: number;
    questionIdBoolean: boolean;
  };
  onCommunity: () => void;
}


const CommunityDe = ({
  setQuestionId,
  questionId,
  onCommunity,
}: communutiy) => {
    const dispatch = useDispatch();
     const { questionDetailData: questionDetail } = useSelector(
       (state: RootState) => state.dashboardReducer
     );
     const { saveQuest: reQuest } = useSelector(
       (state: RootState) => state.videoViewReducer
     );
        const { data } = useSelector((state: RootState) => state.userReducer);
     useEffect(() => {
       dispatch(questionDetailLoading({ id: questionId.questionId }));
     }, [reQuest]);
     useEffect(() => {
        dispatch(userInfoLoading(null));
     }, []);
     const [hide, setHide] = useState(false);
     const onHide = () => setHide((prev)=>!prev)
     const onDelet = () => {
      console.log("asd")
     }
  return (
    <>
      <VideoTop
        text="커뮤니티"
        onButton={onCommunity}
        onExit={() =>
          setQuestionId({ ...questionId, questionIdBoolean: false })
        }
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
                <Btn text="수정" color="main" onBtn={onHide} />
                <Btn text="삭제" color="red" onBtn={onDelet} />
              </div>
            )}
          </div>
          <em>{questionDetail.questionTitle}</em>
          <ul>
            <li>{questionDetail.studentId}</li>
            <li>{questionDetail.date.slice(0, 10)}</li>
          </ul>
          <Content content={questionDetail.content} />
        </St.ContentWrap>
      )}
    </>
  );
};
export default CommunityDe;
