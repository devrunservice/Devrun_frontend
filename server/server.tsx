import express from "express";
import path from "path";
import fs from "fs"
import App from "../src/App";
import {renderToString} from "react-dom/server"
import MetaTag from "MetaTag";
const app = express();


// 말그래도 노드의 서버 주소입니다.
// 나중에 ec2로 작업해서 주소를 환경변수에 넣어봅시다.
const PORT = process.env.PORT || 3001;
// 정적 파일들을 제공하기 위해 express.static 미들웨어를 사용합니다.
// 정적 파일은 build 디렉토리에 있습니다.
// express.static는 Express 앱이 클라이언트에게 정적 파일들을 쉽게 제공할 수 있도록 도와줍니다. 
// 이 미들웨어를 사용하면 파일을 읽어오는 I/O 작업이 자동으로 처리되어 성능상 이점이 있습니다.
app.use(express.static(path.resolve(__dirname, "build")));

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("일부 오류가 발생했습니다");
    }

    const appContent = renderToString(<App />);
    const finalHtml = data
      .replace('<div id="root"></div>', `<div id="root">${appContent}</div>`)
      .replace("<head>", `<head>${MetaTag}`);

    return res.send(finalHtml);
  });
});
// 404 오류 처리
app.use((req, res) => {
    res.status(404).send('페이지를 찾을 수 없습니다');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`앱이 ${PORT} 포트에서 시작되었습니다`);
});