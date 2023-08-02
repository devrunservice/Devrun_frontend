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
import { getCookie } from "utils/cookies";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Route from "pages";
import store, { persistor } from "./redux/store";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const ACCESS_TOKEN = getCookie("accessToken");
const EASY_LOTIN_TOKEN = getCookie("easyLoginToken");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Route.NotFound />,
    children: [
      { index: true, element: <Route.HomePage /> },
      { path: "home", element: <Route.HomePage /> },
      { path: "login", element: <Route.Login /> },
      {
        path: "auth/kakao/callback/login",
        element: EASY_LOTIN_TOKEN ? (
          <Route.Login />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      { path: "auth/kakao/callback", element: <Route.Auth2RedirectHandler /> },
      { path: "signup", element: <Route.Signup /> },
      { path: "findaccount:id", element: <Route.FindId /> },
      { path: "findaccount:password", element: <Route.FindPassword /> },
      {
        path: "basket",
        element: ACCESS_TOKEN ? (
          <Route.Basket />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      {
        path: "notice",
        element: ACCESS_TOKEN ? (
          <Route.Notice />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      { path: "noticeWrite", element: <Route.NoticeWrite /> },
      { path: "noticeDetail", element: <Route.NoticeDetail /> },
      { path: "lecture", element: <Route.Lecture /> },
      { path: "detail", element: <Route.DetailPage /> },
      { path: "createVideo", element: <Route.CreateVideo /> },
      { path: "profile", element: <Route.Profile /> },
      { path: "profileupdate", element: <Route.ProfileUpdate /> },
      { path: "dashboard", element: <Route.Dashboard /> },
      { path: "notes", element: <Route.Notes /> },
      { path: "questions", element: <Route.Questions /> },
      { path: "certificate", element: <Route.Certificate /> },
      { path: "coupon", element: <Route.Coupon /> },
      { path: "Receipt", element: <Route.Receipt /> },
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
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </CookiesProvider>,
);

reportWebVitals();
