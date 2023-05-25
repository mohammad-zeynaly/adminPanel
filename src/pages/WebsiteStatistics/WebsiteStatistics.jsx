import Topbar from "../../components/Topbar/Topbar";
import GeneralStatistics from "../../components/GeneralStatistics/GeneralStatistics";
import DevicesStatisticsChart from "../../components/DevicesStatisticsChart/DevicesStatisticsChart";
import VisitingUsers from "../../components/VisitingUsers/VisitingUsers";
import Loader from "../../components/Loader/Loader";

function WebsiteStatistics() {
  
  return (
    <div>
      <Topbar
        BreadcrumbTitle="داشبورد آمار سایت"
        BreadcrumbLink="/statistics"
      />
      <>
        <GeneralStatistics />
        <DevicesStatisticsChart />
        <VisitingUsers />
        <Loader />
      </>
    </div>
  );

}

export default WebsiteStatistics;
