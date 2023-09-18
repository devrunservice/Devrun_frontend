/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import NoImg from "asset/images/NoImg.jpg";
import { useDate, useInput } from "hooks";
import { CommentsList } from "types";
import { Button } from "style/Common";
import * as St from "./style";

import {
  commentPostLoading,
  commentGetLoading,
  commentRetouchLoading,
} from "../../redux/reducer/noticeReducer";


interface Id {
  id:string
}

const Comment = (props:Id) => {
  const dispatch = useDispatch();
  const param = useParams();
  const { time } = useDate();
  const {  commentRe ,datas} = useSelector((state: RootState) => state.noticeReducer)
  const [comment, onChangeComment, setComment] = useInput("");
  const [commentTwo, onChangeCommentTwo, setCommentTwo] = useInput("");
  const [writes, setWrites] = useState<number | null>(null);
  const [writesTwo, setWritesTwo] = useState<number | null>(null);
  useEffect(() => {
    dispatch(commentGetLoading(param));
  }, [commentRe]);

  const onComment = useCallback(async () => {
    if (comment.trim() === "") return alert("댓글을 적어주세요");
    try {
      await dispatch(
        commentPostLoading({
          content: comment,
          noticeNo: param.noticeNo,
          id: props.id,
        })
      );
      setComment("");
    } catch (error) {
      alert("댓글등록에 실패했습니다");
    }
  }, [comment]);
  // 댓글 수정데이터 날라가는거
  const onCommentRe = useCallback(
    async (v: number,  i: number) => {
      if (commentTwo.trim() === "") return alert("수정할 댓글을 적어주세요");
      try {
        await dispatch(
          commentRetouchLoading({
            content: commentTwo,
            commentNo: v,
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
          console.log(Index);
           setWrites(null); // 같은 댓글을 다시 클릭하면 닫음
         } else {
          setWritesTwo(null);
           setWrites(Index); // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장
         }
      }
    },
    [datas?.data, writes]
  );
  
  // 대댓글 버튼
  const commentsBtn = useCallback(
    (Index: number) => {
      if (datas?.data.some((v: CommentsList) => v.commentNo === Index)) {
        if (writesTwo === Index) {
          console.log(Index);
          setWritesTwo(null); // 같은 댓글을 다시 클릭하면 닫음
        } else {
           setWrites(null);
          setWritesTwo(Index); // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장
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
                        <St.CommentImg
                          src={`https://devrun-dev-bucket.s3.ap-northeast-2.amazonaws.com/${v.profileimgsrc}`}
                          alt="유저 이미지"
                        />
                      </St.CommentImgBox>

                      <St.CommentName>{v.id}</St.CommentName>
                      <St.CommentTime>
                        {v.modifiedDate !== null
                          ? `${time(v.modifiedDate)} 수정`
                          : time(v.createdDate)}
                      </St.CommentTime>
                    </div>
                    <div>
                      <St.CommentRe onClick={() => commentsWrite(v.commentNo)}>
                        수정
                      </St.CommentRe>
                      <St.CommentRemove>삭제</St.CommentRemove>
                      <St.CommentWrite onClick={() => commentsBtn(v.commentNo)}>
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
                          onClick={() => onCommentRe(v.commentNo, v.noticeNo)}
                          type="button"
                        >
                          등록
                        </Button>
                      </St.ButtonWrapCommnet>
                    </St.CommentWriteWrap>
                  )}

                  {writesTwo === v.commentNo && (
                    <St.CommentWriteWrap>
                      <St.CommentBox
                        onChange={onChangeCommentTwo}
                        maxLength={350}
                        value={commentTwo}
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
                          onClick={() => onCommentRe(v.commentNo, v.noticeNo)}
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
                                      onCommentRe(q.commentNo, q.noticeNo)
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
