/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Editor } from "components";

import * as St from "./style";
import { getQuestLoding } from "../../../redux/reducer/videoViewReducer";

interface Communitys {
  onCommunity: () => void;
  lectureId: number;
  videoid: string;
}

const Community = ({ onCommunity, lectureId, videoid }: Communitys) => {
  const dispatch = useDispatch();
  const { quest, qusetDetail } = useSelector(
    (state: RootState) => state.videoViewReducer
  );
  useEffect(() => {
    dispatch(getQuestLoding({ page: 1, lectureId: lectureId }));
  }, []);
  // useEffect(()=>{

  //   return
  // },[])

  const [editor, setEditor] = useState(false);
  return (
    <St.CommunityWrap>
      <St.Top>
        <St.Title>
          커뮤니티 <St.Deletes onClick={() => onCommunity()} />
        </St.Title>
      </St.Top>

      {editor === false && (
        <>
        <St.Center>
          {quest.message === "Resource not exists" ? (
            <St.NoQuest>해당강의에 질문이 없습니다.</St.NoQuest>
          ) : (
            quest.dtolist?.map((v) => {
              return (
                <li key={v.questionId}>
                  <St.Button>
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
                </li>
              );
            })
          )}
        </St.Center>
        <St.Write>
          <button onClick={() => setEditor((prev) => !prev)}>
            글 작성하기
          </button>
        </St.Write>
        </>
      )}

      {editor && (
        <St.Editor>
          <Editor
            path="lecture_introduce"
            tap="Note"
            videoid={videoid}
            lectureId={lectureId}
          />
        </St.Editor>
      )}
    </St.CommunityWrap>
  );
};

export default Community;
