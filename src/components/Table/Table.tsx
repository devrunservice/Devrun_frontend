import React from "react";
import { useNavigate } from "react-router-dom";
import * as I from "types";
import * as St from "./style";


const Table = (props:I.Table)=>{
  const navigate = useNavigate();
  const navi = () => {
    if (props.notice) navigate(props.notice);
  };
  return (
    <St.Table>
      <St.TableLi onClick={() => navi()} $cursor>
        <St.Num>{props.num}</St.Num>
        <St.Text>{props.title}</St.Text>
        <St.CommonLi>
          {props.notice ? `${props.date}` : `${props.name}`}
        </St.CommonLi>
        <St.CommonLi>
          {props.notice ? `${props.completion}` : `${props.date}`}
        </St.CommonLi>
        {props.notice ? (
          <St.View ><St.Button $color={false} >수료증보기</St.Button></St.View>
        ) : (
          <St.View>{props.view}</St.View>
        )}
      </St.TableLi>
    </St.Table>
  );
}
export default Table;