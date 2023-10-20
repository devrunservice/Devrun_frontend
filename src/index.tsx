import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
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
    path: '/',
    element: <App />,
    errorElement: <Route.NotFound />,
    children: [
      {index: true, element: <Route.HomePage />},
      {
        path: 'home',
        element: ACCESS_TOKEN ? (
          <Route.HomePage />
        ) : (
          <Navigate replace to="/login" />
        ),
      },
      {path: 'login', element: <Route.Login />},
      {path: 'auth/kakao/callback', element: <Route.Auth2RedirectHandler />},
      {path: 'signup', element: <Route.Signup />},
      {path: 'signupconfirm', element: <Route.SignupConfirm />},
      {
        path: 'signupcompletion',
        element: <Route.SignupCompletion />,
      },
      {path: 'findaccount/id', element: <Route.FindId />},
      {path: 'findaccount/password', element: <Route.FindPassword />},
      {path: 'basket', element: protectedRoute(<Route.Basket />)},

      {
        path: 'noticeWrite',
        element: (<Route.NoticeWrite />),
      },
      {path: 'notice', element: (<Route.Notice />)},
      {
        path: 'notice/:noticeNo',
        element: (<Route.NoticeDetail />),
      },
      {
        path: "notice/:noticeNo/retouch",
        element: protectedRoute(<Route.NoticeRetouch />),
      },
      { path: "lecture", element: <Route.Lecture /> },
      { path: "detail", element: <Route.DetailPage /> },
      { path: "createVideo", element: <Route.CreateVideo /> },
      { path: "profile", element: <Route.Profile /> },
      { path: "dashboard", element: <Route.Dashboard /> },
      { path: "notes", element: <Route.Notes /> },
      { path: "questions", element: <Route.Questions /> },
      { path: "cert", element: <Route.Cert /> },
      { path: "certDetail", element: <Route.CertDetail /> },
      { path: "coupon", element: <Route.Coupon /> },
      { path: "Receipt", element: <Route.Receipt /> },
      { path: "learning", element: <Route.Learning /> },
      { path: "point", element: <Route.Point /> },
      { path: "createcoupon", element: <Route.CreateCoupon /> },
      {
        path: 'createVideo',
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
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

reportWebVitals();
