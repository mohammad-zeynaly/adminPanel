import SalesAndManagement from "../pages/SalesAndManagement/SalesAndManagement";
import Support from "../pages/Support/Support";
import WebsiteStatistics  from "../pages/WebsiteStatistics/WebsiteStatistics";
import Profile from "../pages/Profile/Profile";

const routes = [
  { path: "/", element: <SalesAndManagement /> },
  { path: "/support", element: <Support /> },
  { path: "/statistics", element: <WebsiteStatistics /> },
  { path: "/profile", element: <Profile /> },
];

export default routes;
