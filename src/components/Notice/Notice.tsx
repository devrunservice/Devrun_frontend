/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { userData } from "api";
import * as St from "./style";


const Notice = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const idChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);

  const writeBtn = async () => {
   try {
    const response = await userData.createUser({
      id:id
    })
    console.log("response", response);
   } catch (error) {
    console.log(error)
   }
  };
  const listBtn = () => navigate("/noticeDetail");

  // const writeBtn = () => navigate("/noticeWrite");

  return (
    <>
      <St.Title>공지사항</St.Title>
      <St.Table>
        <St.TableLi onClick={() => listBtn()}>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
      </St.Table>
      <St.ButtonWrap>
        <input type="text" onChange={idChange} value={id} />
        <St.Button type="button" onClick={() => writeBtn()}>
          글쓰기
        </St.Button>
      </St.ButtonWrap>
    </>
  );
};

export default Notice;
/* eslint-disable @typescript-eslint/no-unused-vars */