import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, defaultTheme} from 'style/Theme';
import { Provider } from "react-redux";
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
  SignupSuccess,
  FindId,
} from "pages";
import store from "./redux/store";
import App from './App';
import reportWebVitals from './reportWebVitals';

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
      { path: "signup/:id", element: <SignupSuccess /> },
      { path: "basket", element: <Basket /> },
      { path: "notice", element: <Notice /> },
      { path: "findid", element: <FindId /> },
      { path: "noticeWrite", element: <NoticeWrite /> },
      { path: "noticeDetail", element: <NoticeDetail /> },
      { path: "lecture", element: <Lecture /> },
      { path: "detail", element: <DetailPage /> },
      { path: "createVideo", element: <CreateVideo /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </ThemeProvider>
  
);

reportWebVitals();
