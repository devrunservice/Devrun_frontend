require("ignore-styles"); //위에 설명해 두었다.

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

//server.js 실행
require("./server");

export {}