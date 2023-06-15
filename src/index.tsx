import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, defaultTheme} from 'style/Theme';
import {Provider} from 'react-redux';
import App from './App';
import HomePage from 'pages/HomePage/HomePage';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import NotFound from 'pages/NotFound/NotFound';
import Basket from 'pages/Basket/Basket';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'home', element: <HomePage />},
      {path: 'login', element: <Login />},
      {path: 'signup', element: <Signup />},
      {path: 'basket', element: <Basket />},
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
