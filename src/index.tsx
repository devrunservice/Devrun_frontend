import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {HelmetProvider} from 'react-helmet-async';
import {GlobalStyle, defaultTheme} from 'style/Theme';
import {getCookie} from 'utils/cookies';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import * as Route from 'pages';
import store, {persistor} from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ACCESS_TOKEN = getCookie('accessToken');

const protectedRoute = (component: ReactNode) =>
  ACCESS_TOKEN ? component : <Navigate replace to="/login" />;

const router = createBrowserRouter([
  {
    path: "home",
    element: <App />,
    errorElement: <Route.NotFound />,
    children: [
      { index: true, element: <Route.HomePage /> },
      {
        path: "home",
        element: ACCESS_TOKEN ? (
          <Route.HomePage />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      { path: "login", element: <Route.Login /> },
      { path: "auth/kakao/callback", element: <Route.Auth2RedirectHandler /> },
      { path: "signup", element: <Route.Signup /> },
      { path: "signupconfirm", element: <Route.SignupConfirm /> },
      {
        path: "signupcompletion",
        element: <Route.SignupCompletion />,
      },
      { path: "findaccount/id", element: <Route.FindId /> },
      { path: "findaccount/password", element: <Route.FindPassword /> },
      { path: "basket", element: protectedRoute(<Route.Basket />) },
      {
        path: "noticeWrite",
        element: protectedRoute(<Route.NoticeWrite />),
      },
      { path: "notice", element: <Route.Notice /> },
      {
        path: "notice/:noticeNo",
        element: <Route.NoticeDetail />,
      },
      {
        path: "notice/:noticeNo/retouch",
        element: protectedRoute(<Route.NoticeRetouch />),
      },
      {
        path: "lecture/:lectureBigCategory",
        element: <Route.Lecture />,
      },
      { path: "detail/:id", element: <Route.Detailsell /> },
      { path: "details", element: <Route.DetailPage /> },
      { path: "createVideo", element: <Route.CreateVideo /> },
      { path: "profile", element: protectedRoute(<Route.Profile />) },
      { path: "dashboard", element: protectedRoute(<Route.Dashboard />) },
      { path: "notes", element: protectedRoute(<Route.Notes />) },
      { path: "notes/:lectureId", element: protectedRoute(<Route.Note />) },
      {
        path: "notes/:lectureId/:noteId",
        element: protectedRoute(<Route.NoteDetail />),
      },
      { path: "questions", element: protectedRoute(<Route.Questions />) },
      {
        path: "questions/:questionId",
        element: protectedRoute(<Route.QuestionDetail />),
      },
      { path: "cert", element: protectedRoute(<Route.Cert />) },
      { path: "certDetail", element: protectedRoute(<Route.CertDetail />) },
      { path: "coupon", element: protectedRoute(<Route.Coupon />) },
      { path: "receipt", element: <Route.Receipt /> },
      { path: "learning", element: protectedRoute(<Route.Learning />) },
      { path: "point", element: protectedRoute(<Route.Point />) },
      { path: "createcoupon", element: protectedRoute(<Route.CreateCoupon />) },
      {
        path: "lectures/:lectureId",
        element: <Route.Detailsell />,
      },
      { path: "createVideo", element: protectedRoute(<Route.CreateVideo />) },
      {
        path: "videoView/:lectureId/:videoId",
        element: protectedRoute(<Route.VideoView />),
      },
      {path: 'details', element: <Route.DetailPage />},
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;

const element = (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </ThemeProvider>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, element);
} else {
  ReactDOM.createRoot(rootElement).render(element);
}

reportWebVitals();
