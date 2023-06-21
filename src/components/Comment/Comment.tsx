import React from 'react';

// import { useDispatch,useSelector } from "react-redux";
// import { RootState, AppDispatch } from "redux/store";
// import { getReact } from "api/dataSlice"; 


import * as St from "./style";


const Comment = () => 
    // const data = useSelector((state: RootState) => state.dataSlice.data);
    // const dispatch = useDispatch<AppDispatch>();
    // useEffect(() => {
    //   dispatch(getReact());
    // }, [dispatch]);
    // console.log(data)

     (
      <St.CommentWrap>
        <St.CommentTitle>
          댓글
          <St.CommentCount>
            총 <St.CommentNum>56</St.CommentNum>개
          </St.CommentCount>
        </St.CommentTitle>
      </St.CommentWrap>
    )


export default Comment;
