/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {getCookie} from 'utils/cookies';
import {useDate, useInput} from 'hooks';
import {CommentsList} from 'types';
import { Rating, Button } from "components";
import * as St from './style';

import {
  commentPostLoading,
  commentGetLoading,
  commentRetouchLoading,
  commentDelLoading,
} from '../../redux/reducer/noticeReducer';
import {
  answerForQuestionLoading,
  deleteAnswerLoading,
  editAnswerLoading,
  replyAnswerLoading,
} from '../../redux/reducer/dashboardReducer';
import {
  LectureDetailCommentGetLoading,
  LectureDetailCommentLoading,
} from '../../redux/reducer/learningReducer';

interface title {
  text: string;
  sub?: string;
  path?: string;
  paramId?: number;
}

const Comment = ({text, sub, path, paramId}: title) => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  const {calculateTimeDifference} = useDate();
  // 평점
  const [stars, setStars] = useState([false, false, false, false, false]);
  // 기존 데이터
  let datas: {data: CommentsList[]} = {data: []};
  let comments;
  let commentRe;
  if (path === '/questions') {
    datas = useSelector(
      (state: RootState) => state.dashboardReducer.answerData
    );
    commentRe = useSelector(
      (state: RootState) => state.dashboardReducer.editAnswerData
    );
  } else if (path === '/notice') {
    datas = useSelector((state: RootState) => state.noticeReducer.datas);
    comments = useSelector((state: RootState) => state.noticeReducer.comments);
    commentRe = useSelector(
      (state: RootState) => state.noticeReducer.commentRe
    );
  }
  // 유저 데이터
  const {data: user} = useSelector((state: RootState) => state.userReducer);
  const [comment, onChangeComment, setComment] = useInput('');
  const [commentTwo, onChangeCommentTwo, setCommentTwo] = useInput('');
  const [writes, setWrites] = useState<number | null>(null);
  const [writesTwo, setWritesTwo] = useState<number | null>(null);
  useEffect(() => {
    if (path === '/questions') {
      dispatch(answerForQuestionLoading({id: paramId}));
    } else if (path === '/notice') {
      dispatch(commentGetLoading(param));
    } else if (path === '/lectures') {
      dispatch(
        LectureDetailCommentGetLoading({lectureid: paramId, pageNumber: 1})
      );
    }
  }, [commentRe, comments, paramId]);
  const onComment = useCallback(async () => {
    if (comment.trim() === '') return alert('댓글을 적어주세요');
    try {
      if (path === '/questions') {
        await dispatch(
          replyAnswerLoading({
            questionId: paramId,
            content: comment,
          })
        );
      } else if (path === '/lectures') {
        await dispatch(
          LectureDetailCommentLoading({
            lectureId: paramId,
            reviewContent: comment,
            reviewRating: stars.filter((v) => v === true).length,
          })
        );
      } else {
        await dispatch(
          commentPostLoading({
            content: comment,
            noticeNo: param.noticeNo,
            id: user.id,
          })
        );
      }
      setComment('');
    } catch (error) {
      alert('댓글등록에 실패했습니다');
    }
  }, [comment, stars]);

  // 댓글 수정데이터 날라가는거
  const onCommentRe = useCallback(
    async (v: number) => {
      if (commentTwo.trim() === '') return alert('수정할 댓글을 적어주세요');
      try {
        if (path === '/questions') {
          await dispatch(editAnswerLoading({id: v, content: commentTwo}));
        } else {
          await dispatch(
            commentRetouchLoading({
              content: commentTwo,
              commentNo: v,
            })
          );
        }
        setCommentTwo('');
        setWritesTwo(null);
        setWrites(null);
      } catch (error) {
        alert('댓글등록에 실패했습니다');
      }
    },
    [commentTwo]
  );

  // 대댓글 달기
  const onComments = useCallback(
    async (v: number, i: number) => {
      if (commentTwo.trim() === '') return alert('대댓글을 적어주세요');
      try {
        if (path === '/questions') {
          await dispatch(
            replyAnswerLoading({
              questionId: paramId,
              content: commentTwo,
            })
          );
        } else {
          await dispatch(
            commentPostLoading({
              content: commentTwo,
              parentCommentNo: v,
              noticeNo: i,
              id: user.id,
            })
          );
        }

        setCommentTwo('');
        setWritesTwo(null);
      } catch (error) {
        alert('댓글등록에 실패했습니다');
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

      if (datas?.data.some((v) => v.commentNo === Index)) {
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
      if (datas?.data.some((v) => v.commentNo === Index)) {
        if (writesTwo === Index) {
          setWritesTwo(null); // 같은 댓글을 다시 클릭하면 닫음
          setCommentTwo('');
        } else {
          setWrites(null);
          setWritesTwo(Index); // 다른 댓글을 클릭하면 열고 선택된 댓글 번호 저장
          setCommentTwo('');
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
        setCommentTwo('');
      }
    },
    [writes, datas?.data, writesTwo]
  );

  // 댓글 삭제 버튼
  const onCommentsDel = useCallback((commentNo: number, id: string) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      if (path === '/questions') {
        dispatch(deleteAnswerLoading({id: commentNo}));
      } else {
        dispatch(commentDelLoading({commentNo, id}));
      }
    } else {
      alert('취소되었습니다.');
    }
  }, []);

  const onLogin = () => {
    alert('로그인 페이지로 이동합니다.');
    navigate('/login');
  };

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
      {path === "/lectures" && (
        <Rating stars={stars} setStars={setStars} text="별점을 선택해주세요" />
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
        <Button
          text="취소"
          name="No"
          color="main"
          border="main"
          onBtn={() => setComment("")}
        />
        <Button
          text="등록"
          name="Yes"
          color="white"
          backgroundcolor="main"
          onBtn={onComment}
        />
      </St.ButtonWrap>
      {datas.data.length !== 0 && (
        <St.CommentUl>
          {datas.data
            .filter((i) => i.parentCommentNo === 0)
            .map((v) => {
              return (
                <St.CommentLi key={v.commentNo}>
                  <St.CommentTop>
                    <div>
                      <St.CommentImgBox>
                        <St.CommentImg
                          src={`${v.profileimgsrc}`}
                          alt="유저 이미지"
                        />
                      </St.CommentImgBox>

                      <St.CommentName>{v.id}</St.CommentName>
                      <St.CommentTime>
                        {v.modifiedDate !== null
                          ? `${
                              calculateTimeDifference(v.modifiedDate) || "0초전"
                            } 수정`
                          : calculateTimeDifference(v.createdDate) || "0초전"}
                      </St.CommentTime>
                    </div>
                    <div>
                      {user.id === v.id && (
                        <>
                          <Button
                            text="수정"
                            name="re"
                            color="main"
                            width="auto"
                            onBtn={() => onCommentsWrite(v.commentNo)}
                          />
                          <Button
                            text="삭제"
                            name="del"
                            color="red"
                            width="auto"
                            onBtn={() => onCommentsDel(v.commentNo, v.id)}
                          />
                         
                        </>
                      )}
                      {path === "/notice" && (
                        <Button
                            text="댓글달기"
                            name="comment"
                            width="auto"
                            onBtn={() => onCommentsBtn(v.commentNo)}
                          />
                      )}
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
                          text="취소"
                          name="No"
                          color="main"
                          border="main"
                          onBtn={() => onCommentClose(v.commentNo)}
                        />
                        <Button
                          text="등록"
                          name="Yes"
                          color="white"
                          backgroundcolor="main"
                          onBtn={() => onCommentRe(v.commentNo)}
                        />
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
                          text="취소"
                          name="No"
                          color="main"
                          border="main"
                          onBtn={() => onCommentClose(v.commentNo)}
                        />
                        <Button
                          text="등록"
                          name="Yes"
                          color="white"
                          backgroundcolor="main"
                          onBtn={() => onComments(v.commentNo, v.noticeNo)}
                        />
                      </St.ButtonWrapCommnet>
                    </St.CommentWriteWrap>
                  )}
                  <ul>
                    {datas?.data
                      .filter((k) => k.parentCommentNo === v.commentNo)
                      .map((q) => {
                        return (
                          <St.Reply key={q.commentNo}>
                            <St.ReplyIcon />
                            <div>
                              <St.CommentTop>
                                <div>
                                  <St.CommentImgBox>
                                    <St.CommentImg
                                      src={`${q.profileimgsrc}`}
                                      alt="유저 이미지"
                                    />
                                  </St.CommentImgBox>

                                  <St.CommentName>{q.id}</St.CommentName>
                                  <St.CommentTime>
                                    {q.modifiedDate !== null
                                      ? `${
                                          calculateTimeDifference(
                                            q.modifiedDate
                                          ) || "0초전"
                                        } 수정`
                                      : calculateTimeDifference(
                                          q.createdDate
                                        ) || "0초전"}
                                  </St.CommentTime>
                                </div>
                                {/* 대댓글 수정 삭제 */}
                                {user.id === q.id && (
                                  <div>
                                    <Button
                                      text="수정"
                                      name="re"
                                      color="main"
                                      width="auto"
                                      onBtn={() => onCommentsWrite(q.commentNo)}
                                    />
                                    <Button
                                      text="삭제"
                                      name="del"
                                      color="red"
                                      width="auto"
                                      onBtn={() =>
                                        onCommentsDel(q.commentNo, q.id)
                                      }
                                    />
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
                                    text="취소"
                                    name="No"
                                    color="main"
                                    border="main"
                                    onBtn={() => onCommentClose(q.commentNo)}
                                  />
                                  <Button
                                    text="등록"
                                    name="Yes"
                                    color="white"
                                    backgroundcolor="main"
                                    onBtn={() => onCommentRe(q.commentNo)}
                                  />
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
      )}
    </>
  );
};
export default Comment;
