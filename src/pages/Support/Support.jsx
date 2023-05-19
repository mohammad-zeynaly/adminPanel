import Topbar from "../../components/Topbar/Topbar";
import SupportTime from "../../components/SupportTime/SupportTime";
import TicketMessages from "../../components/TicketMessages/TicketMessages";
import TicketStatusChart from "../../components/TicketStatusChart/TicketStatusChart"


function Support() {
  return (
    <div className>
      <Topbar BreadcrumbTitle="داشبورد پشتیبانی" BreadcrumbLink="/support" />
      <>
        <SupportTime />
        <TicketMessages />
        <TicketStatusChart />
      </>
    </div>
  );
}

export default Support;
