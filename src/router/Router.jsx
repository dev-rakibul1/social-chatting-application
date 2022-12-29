import { createBrowserRouter } from "react-router-dom";
import MessageDetails from "../components/messageDetails/MessageDetails";
import MediaLayout from "../layout/MediaLayout";
import ProfileLayout from "../layout/ProfileLayout";
import Root from "../layout/Root";
import EditAbout from "../pages/about/EditAbout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Media from "../pages/media/Media";
import Message from "../pages/message/Message";
import Notifications from "../pages/notifications/Notifications";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/message", element: <Message /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/messageDetails", element: <MessageDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  {
    path: "/",
    element: <ProfileLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/editme/:id",
        element: <EditAbout />,
        loader: () => fetch("https://project-01-server.vercel.app"),
      },
    ],
  },

  {
    path: "/",
    element: <MediaLayout />,
    errorElement: <Error />,

    children: [
      { errorElement: <Error /> },
      {
        path: "/media",
        element: <Media />,
        loader: () => fetch("http://localhost:8000/posts"),
      },
    ],
  },
]);

export default router;
