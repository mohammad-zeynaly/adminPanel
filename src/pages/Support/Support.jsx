import Topbar from "../../components/Topbar/Topbar";
import SupportTime from "../../components/SupportTime/SupportTime";
import TicketMessages from "../../components/TicketMessages/TicketMessages";
import TicketStatusChart from "../../components/TicketStatusChart/TicketStatusChart";
import Loader from "../../components/Loader/Loader";

function Support() {
  return (
    <div className>
      <Topbar BreadcrumbTitle="داشبورد پشتیبانی" BreadcrumbLink="/support" />
      <>
        <SupportTime />
        <TicketMessages />
        <TicketStatusChart />
        <Loader />
      </>
    </div>
  );
}

export default Support;
