import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from "./app/pages/Dashboard";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import Home from "./app/pages/Home";
import ErrorPage from "./app/pages/ErrorPage";
import Root from "./app/pages/Root";
import Who from './app/pages/who';
import Contact from './app/pages/Contact';
import CoursesPage from './features/courses/pages/CoursesPage';
import Course from './features/courses/pages/CoursePage';
import About from './app/pages/About';

function App() {  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },{
          path: 'about',
          element: <About />
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
          path: 'courses',
          element: <CoursesPage />
        },
        {
          path: 'courses/:courseId',
          element: <Course />
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
