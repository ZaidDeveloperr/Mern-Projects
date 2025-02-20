import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboardPage/DashboardPage';
import ChatPage from './routes/chatPage/ChatPage';
import Rootlayout from './layouts/rootlayout/Rootlayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/signInPage/SignInPage';
import SignUpPage from './routes/signUpPage/SignUpPage';

// // Importing Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// } // --------> Used in RootLayout.jsx

const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path:"/",
        element: <Homepage />,
      },
      {
        path:"/sign-in/*", // * means every children of the sign-in page
        element: <SignInPage />,
      },
      {
        path:"/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element:<DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
