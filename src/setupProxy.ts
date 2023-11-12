import { Express } from "express";
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: Express) {
  app.use(
    "/page", // 프록시 경로
    createProxyMiddleware({
      target: "https://googleads.g.doubleclick.net", // 대상 서버
      changeOrigin: true,
      onProxyRes: function (proxyRes: any, req: any, res: any) {
        // 프록시 서버 응답에 CORS 관련 헤더 추가
        res.setHeader("Access-Control-Allow-Origin", "*");
      },
    })
  );
};
export {};
