/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Quill } from "react-quill";
import * as St from "./style";

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
  "height",
  "width",
];


// 글꼴
const FontFamily = Quill.import("formats/font");
FontFamily.whitelist = ["Nanum", "Pretendard", "Roboto"];
Quill.register(FontFamily, true);

// 폰트사이즈
const fontSize = Quill.import("attributors/style/size");
fontSize.whitelist = [
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "36px",
];
Quill.register(fontSize, true);


const QuillToolbar = () => (
  <St.Toolbar id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="Nanum">
        {FontFamily.whitelist.map((v: string) => (
          <option value={v} key={v} selected={v === "Nanum"}>
            {v}
          </option>
        ))}
      </select>
      <select className="ql-size">
        {fontSize.whitelist.map((v: string) => (
          <option value={v} key={v} selected={v === "16px"}>
            {v}
          </option>
        ))}
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold">asd</button>
      <button className="ql-italic">asd</button>
      <button className="ql-underline">asd</button>
      <button className="ql-strike">asd</button>
      <button className="ql-blockquote">asd</button>
    </span>
    <span className="ql-formats">
      <select className="ql-align">asd</select>
      <select className="ql-color">asd</select>
      <select className="ql-background">asd</select>
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered">
        asd
      </button>
      <button className="ql-list" value="bullet">
        asd
      </button>
      <button className="ql-indent" value="-1">
        asd
      </button>
      <button className="ql-indent" value="+1">
        asd
      </button>
    </span>
    <span className="ql-formats">
      <button className="ql-image">asd</button>
    </span>
  </St.Toolbar>
);

export default QuillToolbar;



