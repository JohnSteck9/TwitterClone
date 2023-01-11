import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';
import './i18n';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

root.render(
    <React.StrictMode>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <RouterProvider router={router} />
            {/* <HashRouter> */}
            {/*    <App /> */}
            {/* </HashRouter> */}
        </React.Suspense>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
