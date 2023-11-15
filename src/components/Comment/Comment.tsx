/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getCookie } from "utils/cookies";
import { useDate, useInput } from "hooks";
import { CommentsList } from "types";
import Grade from "components/grade/Grade";
import { Button } from "style/Common";
import * as St from "./style";

import {
  commentPostLoading,
  commentGetLoading,
  commentRetouchLoading,
  commentDelLoading,
} from "../../redux/reducer/noticeReducer";

interface title {
  text: string;
  sub?: string;
  path?: string;
}

const Comment = ({ text, sub, path }: title) => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate()
  // 댓글 수정 , 기존 댓글 , 대댓글 달고난후 데이터
  const { commentRe, datas, comments } = useSelector(
    (state: RootState) => state.noticeReducer
  );
  // 시간 hooks
  const { time } = useDate();
  // 유저 데이터
  const { data } = useSelector((state: RootState) => state.userReducer);
  const [comment, onChangeComment, setComment] = useInput("");
  const [commentTwo, onChangeCommentTwo, setCommentTwo] = useInput("");
  const [writes, setWrites] = useState<number | null>(null);
  const [writesTwo, setWritesTwo] = useState<number | null>(null);

  useEffect(() => {
    dispatch(commentGetLoading(param));
  }, [commentRe, comments]);

  const onComment = useCallback(async () => {
    if (comment.trim() === "") return alert("댓글을 적어주세요");
    try {
      await dispatch(
        commentPostLoading({
          content: comment,
          noticeNo: param.noticeNo,
          id: data.id,
        })
      );
      setComment("");
    } catch (error) {
      alert("댓글등록에 실패했습니다");
    }
  }, [comment]);
  // 댓글 수정데이터 날라가는거
  const onCommentRe = useCallback(
    async (v: number) => {
      if (commentTwo.trim() === "") return alert("수정할 댓글을 적어주세요");
      try {
        await dispatch(
          commentRetouchLoading({
            content: commentTwo,
            commentNo: v,
          })
        );
        setCommentTwo("");
        setWritesTwo(null);
        setWrites(null);
      } catch (error) {
        alert("댓글등록에 실패했습니다");
      }
    },
    [commentTwo]
  );
  // 대댓글 달기
  const onComments = useCallback(
    async (v: number, i: number) => {
      if (commentTwo.trim() === "") return alert("대댓글을 적어주세요");
      try {
        await dispatch(
          commentPostLoading({
            content: commentTwo,
            parentCommentNo: v,
            noticeNo: i,
            id: data.id,
          })
        );
        setCommentTwo("");
        setWritesTwo(null);
      } catch (error) {
        alert("댓글등록에 실패했습니다");
      }
    },
    [commentTwo]
  );
  // 댓글수정 버튼
  const onCommentsWrite = useCallback(
    (Index: number) => {
      // 수정 클릭시 나오는 글 데이터
      const editComment = datas.data.filter((v) => v.commentNo === Index)[0]
        .content;
      setCommentTwo(editComment);

      if (datas?.data.some((v: CommentsList) => v.commentNo === Index)) {
        if (writes === Index) {
          // 같은 댓글을 다시 클릭하면 닫음
          setWrites(null);
        } else {
          // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장 처음에는 index랑 writes랑 다르니까 번호를 저장하네.
          setWritesTwo(null);
          setWrites(Index);
        }
      }
    },
    [datas?.data, writes]
  );

  // 대댓글 버튼
  const onCommentsBtn = useCallback(
    (Index: number) => {
      if (datas?.data.some((v: CommentsList) => v.commentNo === Index)) {
        if (writesTwo === Index) {
          setWritesTwo(null); // 같은 댓글을 다시 클릭하면 닫음
          setCommentTwo("");
        } else {
          setWrites(null);
          setWritesTwo(Index); // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장
          setCommentTwo("");
        }
      }
    },
    [datas?.data, writesTwo]
  );
  // 댓글취소 버튼
  const onCommentClose = useCallback(
    (Index: number) => {
      if (datas?.data.some((v) => v.commentNo === Index)) {
        setWritesTwo(null);
        setWrites(null);
        setCommentTwo("");
      }
    },
    [writes, datas?.data, writesTwo]
  );
  // 댓글 삭제 버튼
  const onCommentsDel = useCallback((commentNo: number, id: string) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      dispatch(commentDelLoading({ commentNo, id }));
    } else {
      alert("취소되었습니다.");
    }
  }, []);
  const onLogin = ()=>{
    alert("로그인 페이지로 이동합니다.")
    navigate("/login")
  }
  // 평점
  const [stars, setStars] = useState([false, false, false, false, false]);
  return (
    <>
      <St.CommentTitle>
        <div>
          {text}
          <St.CommentCount>
            총 <St.Comments>{datas?.data.length || 0}</St.Comments>개{sub}
          </St.CommentCount>
        </div>
      </St.CommentTitle>
      {path === "lectures" && (
        <Grade stars={stars} setStars={setStars} text="별점을 선택해주세요" />
      )}
      {getCookie("accessToken") ? (
        <St.CommentBox
          onChange={onChangeComment}
          maxLength={500}
          value={comment}
          placeholder={
            path === "lectures"
              ? "좋은 수강평을 남겨주시면 지식공유자와 이후 배우는 사람들에게 큰 도움이 됩니다."
              : "좋은 댓글남겨주세요."
          }
        />
      ) : (
        <St.CommentBox
          maxLength={500}
          onClick={() => onLogin()}
          placeholder="회원가입후 작성해주세요"
        />
      )}

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
          datas.data
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
                          ? `${time(v.modifiedDate) || "0초전"} 수정`
                          : time(v.createdDate) || "0초전"}
                      </St.CommentTime>
                    </div>
                    <div>
                      {data.id === v.id && (
                        <>
                          <St.CommentRe
                            onClick={() => onCommentsWrite(v.commentNo)}
                          >
                            수정
                          </St.CommentRe>
                          <St.CommentRemove
                            onClick={() => onCommentsDel(v.commentNo, v.id)}
                          >
                            삭제
                          </St.CommentRemove>
                        </>
                      )}

                      <St.CommentWrite
                        onClick={() => onCommentsBtn(v.commentNo)}
                      >
                        댓글달기
                      </St.CommentWrite>
                    </div>
                  </St.CommentTop>
                  <St.CommentText>{v.content}</St.CommentText>

                  {/* 댓글수정 */}

                  {writes === v.commentNo && (
                    <St.CommentWriteWrap>
                      <St.CommentBoxRe
                        onChange={onChangeCommentTwo}
                        maxLength={500}
                        value={commentTwo !== "" ? commentTwo : v.content}
                      />

                      <St.ButtonWrapCommnet>
                        <St.CommentNum>{commentTwo.length} / 500</St.CommentNum>
                        <Button
                          $active={false}
                          onClick={() => onCommentClose(v.commentNo)}
                          type="button"
                        >
                          취소
                        </Button>
                        <Button
                          $active
                          onClick={() => onCommentRe(v.commentNo)}
                          type="button"
                        >
                          등록
                        </Button>
                      </St.ButtonWrapCommnet>
                    </St.CommentWriteWrap>
                  )}
                  {/* 대댓글달기 */}
                  {writesTwo === v.commentNo && (
                    <St.CommentWriteWrap>

                      {getCookie("accessToken") ? (
                        <St.CommentBoxRe
                          onChange={onChangeCommentTwo}
                          maxLength={500}
                          value={commentTwo}
                          placeholder={
                            path === "lectures"
                              ? "좋은 수강평을 남겨주시면 지식공유자와 이후 배우는 사람들에게 큰 도움이 됩니다."
                              : "좋은 댓글남겨주세요."
                          }
                        />
                      ) : (
                        <St.CommentBox
                          maxLength={500}
                          onClick={() => onLogin()}
                          placeholder="회원가입후 작성해주세요"
                        />
                      )}

                      <St.ButtonWrapCommnet>
                        <St.CommentNum>{commentTwo.length} / 500</St.CommentNum>
                        <Button
                          $active={false}
                          onClick={() => onCommentClose(v.commentNo)}
                          type="button"
                        >
                          취소
                        </Button>
                        <Button
                          $active
                          onClick={() => onComments(v.commentNo, v.noticeNo)}
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
                                      src={`https://devrun-dev-bucket.s3.ap-northeast-2.amazonaws.com/${q.profileimgsrc}`}
                                      alt="유저 이미지"
                                    />
                                  </St.CommentImgBox>

                                  <St.CommentName>{q.id}</St.CommentName>
                                  <St.CommentTime>
                                    {q.modifiedDate !== null
                                      ? `${
                                          time(q.modifiedDate) || "0초전"
                                        } 수정`
                                      : time(q.createdDate) || "0초전"}
                                  </St.CommentTime>
                                </div>
                                {/* 대댓글 수정 삭제 */}
                                {data.id === q.id && (
                                  <div>
                                    <St.CommentRe
                                      onClick={() =>
                                        onCommentsWrite(q.commentNo)
                                      }
                                    >
                                      수정
                                    </St.CommentRe>
                                    <St.CommentRemove
                                      onClick={() =>
                                        onCommentsDel(q.commentNo, q.id)
                                      }
                                    >
                                      삭제
                                    </St.CommentRemove>
                                  </div>
                                )}
                              </St.CommentTop>
                              <St.CommentText>{q.content}</St.CommentText>
                            </div>

                            {writes === q.commentNo && (
                              <St.CommentWriteWrap>
                                <St.CommentBoxRe
                                  onChange={onChangeCommentTwo}
                                  maxLength={500}
                                  value={
                                    commentTwo !== "" ? commentTwo : q.content
                                  }
                                />
                                <St.ButtonWrapCommnet>
                                  <St.CommentNum>
                                    {commentTwo.length} / 500
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
                                    onClick={() => onCommentRe(q.commentNo)}
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