/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { notice } from "utils/api";
import NoImg from "asset/images/NoImg.jpg";
import { useInput } from "hooks";
import { CommentsList } from "types";
import { Button } from "style/Common";
import * as St from "./style";

import {
  commentPostLoading,
  commentGetLoading,
  commentRetouchLoading,
} from "../../redux/reducer/noticeReducer";




const Comment = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { datas } = useSelector((state: RootState) => state.noticeReducer);
  const { comments } = useSelector((state: RootState) => state.noticeReducer);
  const { commentRe } = useSelector((state: RootState) => state.noticeReducer);
  const [comment, onChangeComment, setComment] = useInput("");
  const [commentTwo, onChangeCommentTwo, setCommentTwo] = useInput("");
  const [writes, setWrites] = useState<number | null>(null);
  console.log(datas);
  useEffect(() => {
    dispatch(commentGetLoading(param));
  }, [comments, commentRe]);
  const onComment = useCallback(async () => {
    if (comment.trim() === "") return alert("댓글을 적어주세요");
    try {
      await dispatch(
        commentPostLoading({ content: comment, noticeNo: param.noticeNo })
      );
      setComment("");
    } catch (error) {
      alert("댓글등록에 실패했습니다");
    }
  }, [comment]);
  // 댓글 수정
  const onCommentRe = useCallback(
    async (v: number, num: number, i: number) => {
      if (commentTwo.trim() === "") return alert("수정할 댓글을 적어주세요");
      try {
        await dispatch(
          commentRetouchLoading({
            content: commentTwo,
            commentNo: v,
            parentCommentNo: num,
            noticeNo: i,
          })
        );
        setCommentTwo("");
      } catch (error) {
        alert("댓글등록에 실패했습니다");
      }
    },
    [commentTwo]
  );
  // 댓글수정 버튼
  const commentsWrite = useCallback(
    (Index: number) => {
      if (datas?.data.some((v: CommentsList) => v.commentNo === Index)) {
         if (writes === Index) {
           setWrites(null); // 같은 댓글을 다시 클릭하면 닫음
         } else {
           setWrites(Index); // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장
         }
      }
    },
    [datas?.data, writes]
  );
  // 댓글취소 버튼
  const onCommentClose = useCallback(
    (Index: number) => {
      if (datas?.data.some((v) => v.commentNo === Index)) {
        setWrites(null);
        setCommentTwo("");
      }
    },
    [writes, datas?.data]
  );
  const time = (createdDate:string) => {
    const currentTime = new Date();
    const creatTime = new Date(createdDate);
    const differenTime = currentTime.getTime() - creatTime.getTime();
    // 밀리초를 분, 일 등으로 변환
    const secondsDifference = Math.floor(differenTime / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) return `${daysDifference}일 전`;
    if (hoursDifference > 0) return `${hoursDifference}시간 전`;
    if (minutesDifference > 0) return `${minutesDifference}분 전`;
    if(secondsDifference > 0) return `${secondsDifference}초 전`;
  };

  return (
    <>
      <St.CommentTitle>
        댓글
        <St.CommentCount>
          총 <St.Comments>{datas?.data.length}</St.Comments>개
        </St.CommentCount>
      </St.CommentTitle>
      <St.CommentBox
        onChange={onChangeComment}
        maxLength={500}
        value={comment}
      />
      <St.ButtonWrap>
        <St.CommentNum>{comment.length} / 500</St.CommentNum>
        <Button $active={false} onClick={() => setComment("")} type="button">
          취소
        </Button>
        <Button $active type="button" onClick={onComment}>
          등록
        </Button>
      </St.ButtonWrap>

      <St.CommentUl>
        {datas &&
          datas?.data
            .filter((i: CommentsList) => i.parentCommentNo === 0)
            .map((v: CommentsList) => {
              return (
                <St.CommentLi key={v.commentNo}>
                  <St.CommentTop>
                    <div>
                      <St.CommentImgBox>
                        <St.CommentImg src={NoImg} alt="유저 이미지" />
                      </St.CommentImgBox>

                      <St.CommentName>asd</St.CommentName>
                      <St.CommentTime>
                        {v.modifiedDate !== null
                          ? `${time(v.modifiedDate)} 수정`
                          : time(v.createdDate)}
                      </St.CommentTime>
                    </div>
                    <div>
                      <St.CommentRe
                        onClick={() => commentsWrite(v.commentNo)}
                      >
                        수정
                      </St.CommentRe>
                      <St.CommentRemove
                        onClick={() => commentsWrite(v.commentNo)}
                      >
                        삭제
                      </St.CommentRemove>
                      <St.CommentWrite
                        onClick={() => commentsWrite(v.commentNo)}
                      >
                        댓글달기
                      </St.CommentWrite>
                    </div>
                  </St.CommentTop>
                  <St.CommentText>{v.content}</St.CommentText>

                  {writes === v.commentNo && (
                    <St.CommentWriteWrap>
                      <St.CommentBox
                        onChange={onChangeCommentTwo}
                        maxLength={350}
                        value={commentTwo !== "" ? commentTwo : v.content}
                      />
                      <St.ButtonWrapCommnet>
                        <St.CommentNum>{commentTwo.length} / 350</St.CommentNum>
                        <Button
                          $active={false}
                          onClick={() => onCommentClose(v.commentNo)}
                          type="button"
                        >
                          취소
                        </Button>
                        <Button
                          $active
                          onClick={() =>
                            onCommentRe(
                              v.commentNo,
                              v.parentCommentNo,
                              v.noticeNo
                            )
                          }
                          type="button"
                        >
                          등록
                        </Button>
                      </St.ButtonWrapCommnet>
                    </St.CommentWriteWrap>
                  )}
                  <ul>
                    {datas?.data
                      .filter(
                        (k: CommentsList) => k.parentCommentNo === v.commentNo
                      )
                      .map((q: CommentsList) => {
                        return (
                          <St.Reply key={q.commentNo}>
                            <St.ReplyIcon />
                            <div>
                              <St.CommentTop>
                                <div>
                                  <St.CommentImgBox>
                                    <St.CommentImg
                                      src={NoImg}
                                      alt="유저 이미지"
                                    />
                                  </St.CommentImgBox>

                                  <St.CommentName>asd</St.CommentName>
                                  <p>{time(q.createdDate)}</p>
                                </div>
                                <div>
                                  <St.CommentRe
                                    onClick={() => commentsWrite(q.commentNo)}
                                  >
                                    수정
                                  </St.CommentRe>
                                  <St.CommentRemove
                                    onClick={() => commentsWrite(q.commentNo)}
                                  >
                                    삭제
                                  </St.CommentRemove>
                                </div>
                              </St.CommentTop>
                              <St.CommentText>{q.content}</St.CommentText>
                            </div>
                            {writes === q.commentNo && (
                              <St.CommentWriteWrap>
                                <St.CommentBox
                                  onChange={onChangeCommentTwo}
                                  maxLength={350}
                                  value={
                                    commentTwo !== "" ? commentTwo : q.content
                                  }
                                />
                                <St.ButtonWrapCommnet>
                                  <St.CommentNum>
                                    {commentTwo.length} / 350
                                  </St.CommentNum>
                                  <Button
                                    $active={false}
                                    onClick={() => onCommentClose(q.commentNo)}
                                    type="button"
                                  >
                                    취소
                                  </Button>
                                  <Button
                                    $active
                                    onClick={() =>
                                      onCommentRe(
                                        q.commentNo,
                                        q.parentCommentNo,
                                        q.noticeNo
                                      )
                                    }
                                    type="button"
                                  >
                                    등록
                                  </Button>
                                </St.ButtonWrapCommnet>
                              </St.CommentWriteWrap>
                            )}
                          </St.Reply>
                        );
                      })}
                  </ul>
                </St.CommentLi>
              );
            })}
      </St.CommentUl>
    </>
  );
};
export default Comment;
