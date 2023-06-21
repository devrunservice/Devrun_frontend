import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "redux/store";
import {  __getReact } from "api/dataSlice";


import * as St from "./style";


const Comment = () => {
    const data = useSelector((state: RootState) => state.dataSlice.data);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      dispatch(__getReact());
    }, [dispatch]);
    console.log(data)

    return (
      <St.CommentWrap>
        <St.CommentTitle>
          댓글
          <St.CommentCount>
            총 <St.CommentNum>56</St.CommentNum>개
          </St.CommentCount>
        </St.CommentTitle>
      </St.CommentWrap>
    );

};
export default Comment;
