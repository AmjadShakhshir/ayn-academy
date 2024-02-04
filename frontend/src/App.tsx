import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from "./app/pages/Dashboard";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import Home from "./app/pages/Home";
import ErrorPage from "./app/pages/ErrorPage";
import Root from "./app/pages/Root";
import Who from './app/pages/who';
import Contact from './app/pages/Contact';

function App() {  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'who',
          element: <Who />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <ErrorPage />
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;
