import React from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import * as St from "./style";


const Table = (props:I.Table)=>{
  const navigate = useNavigate();
  const navi =()=>{
    if(props.link === "공지사항") navigate("/noticeDetail");
    if (props.link === "수료증") navigate("/CertDetail");
  }

  return (
    <St.Table>
      {props.link === "공지사항" ? (
        <St.TableLi onClick={() => navi()} $cursor>
          <St.Num>{props.num}</St.Num>
          <St.Text $view={false}>{props.title}</St.Text>
          <St.CommonLi>{props.name}</St.CommonLi>
          <St.CommonLi>{props.date}</St.CommonLi>
          <St.View $view={false}>{props.view}</St.View>
        </St.TableLi>
      ) : (
        <St.TableLi $cursor={false}>
          <St.Num>{props.num}</St.Num>
          <St.Text $view>{props.title}</St.Text>
          <St.CommonLi>{props.completion}</St.CommonLi>
          <St.CommonLi>{props.date}</St.CommonLi>
          <St.View $view>
            <St.Button $color={false} onClick={() => navi()}>
              수료증보기
            </St.Button>
          </St.View>
        </St.TableLi>
      )}
    </St.Table>
  );
}
export default Table;