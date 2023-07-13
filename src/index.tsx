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
import { PersistGate } from "redux-persist/integration/react";
import {
  Notice,
  Basket,
  HomePage,
  Login,
  Signup,
  NotFound,
  Lecture,
  DetailPage,
  CreateVideo,
  NoticeWrite,
  NoticeDetail,
  FindId,
  FindPassword,
  Profile,
  Certificate,
} from "pages";
import store, { persistor } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const ACCESS_TOKEN = getCookie("accessToken");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "basket",
        element: ACCESS_TOKEN ? <Basket /> : <Navigate replace to="/login" />,
      },
      { path: "notice", element: <Notice /> },
      { path: "findaccount:id", element: <FindId /> },
      { path: "findaccount:password", element: <FindPassword /> },
      { path: "noticeWrite", element: <NoticeWrite /> },
      { path: "noticeDetail", element: <NoticeDetail /> },
      { path: "lecture", element: <Lecture /> },
      { path: "detail", element: <DetailPage /> },
      { path: "createVideo", element: <CreateVideo /> },
      { path: "Profile", element: <Profile /> },
      { path: "Certificate", element: <Certificate /> },
      {
        path: "createVideo",
        element: ACCESS_TOKEN ? (
          <CreateVideo />
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
