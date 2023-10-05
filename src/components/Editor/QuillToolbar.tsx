/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Quill } from "react-quill";

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
];

const color = [
  false,
  "#000000",
  "#e60000",
  "#ff9900",
  "#ffff00",
  "#008a00",
  "#0066cc",
  "#9933ff",
  "#ffffff",
  "#facccc",
  "#ffebcc",
  "#ffffcc",
  "#cce8cc",
  "#cce0f5",
  "#ebd6ff",
  "#bbbbbb",
  "#f06666",
  "#ffc266",
  "#ffff66",
  "#66b966",
  "#66a3e0",
  "#c285ff",
  "#888888",
  "#a10000",
  "#b26b00",
  "#b2b200",
  "#006100",
  "#0047b2",
  "#6b24b2",
  "#444444",
  "#5c0000",
  "#663d00",
  "#666600",
  "#003700",
  "#002966",
  "#3d1466",
];

// 글꼴
const FontFamily = Quill.import("formats/font");
FontFamily.whitelist = ["dotum", "gullim", "batang", "NanumGothic"];
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
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="dotum">
        {FontFamily.whitelist.map((v: string) => (
          <option value={v} key={v} selected={v === "dotum"}>
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
  </div>
);

export default QuillToolbar;



