import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "style/Theme";
import { CookiesProvider } from "react-cookie";
import { getCookie } from "api/cookies";
import { Provider } from "react-redux";
import * as Route from "pages";

import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const ACCESS_TOKEN = getCookie("accessToken");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Route.NotFound />,
    children: [
      { index: true, element: <Route.HomePage /> },
      { path: "home", element: <Route.HomePage /> },
      { path: "login", element: <Route.Login /> },
      { path: "signup", element: <Route.Signup /> },
      {
        path: "basket",
        element: ACCESS_TOKEN ? (
          <Route.Basket />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      { path: "notice", element: <Route.Notice /> },
      { path: "findaccount:id", element: <Route.FindId /> },
      { path: "findaccount:password", element: <Route.FindPassword /> },
      { path: "noticeWrite", element: <Route.NoticeWrite /> },
      { path: "noticeDetail", element: <Route.NoticeDetail /> },
      { path: "lecture", element: <Route.Lecture /> },
      { path: "detail", element: <Route.DetailPage /> },
      { path: "createVideo", element: <Route.CreateVideo /> },
      { path: "profile", element: <Route.Profile /> },
      { path: "certificate", element: <Route.Certificate /> },
      { path: "learning", element: <Route.Learning /> },
      {
        path: "createVideo",
        element: ACCESS_TOKEN ? (
          <Route.CreateVideo />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <CookiesProvider>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </CookiesProvider>,
);

reportWebVitals();
