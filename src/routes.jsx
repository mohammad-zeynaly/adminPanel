import Home from "./pages/Home/Home";
import Support from "./pages/Support/Support";
import Statistics from "./pages/Statistics/Statistics";
import Profile from "./pages/Profile/Profile";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/support", element: <Support /> },
  { path: "/statistics", element: <Statistics /> },
  { path: "/profile", element: <Profile /> },
];

export default routes;
