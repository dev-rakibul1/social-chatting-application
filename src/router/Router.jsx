import { createBrowserRouter } from "react-router-dom";
import MediaLayout from "../layout/MediaLayout";
import ProfileLayout from "../layout/ProfileLayout";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Media from "../pages/media/Media";
import Message from "../pages/message/Message";
import Notifications from "../pages/notifications/Notifications";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/message", element: <Message /> },
      { path: "/notifications", element: <Notifications /> },
    ],
  },

  {
    path: "/",
    element: <ProfileLayout />,
    children: [{ path: "/profile", element: <Profile /> }],
  },

  {
    path: "/",
    element: <MediaLayout />,
    children: [
      { path: "/media", element: <Media />, loader: () => fetch("/post.json") },
    ],
  },
]);

export default router;
