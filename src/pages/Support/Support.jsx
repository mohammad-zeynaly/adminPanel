import Topbar from "../../components/Topbar/Topbar";
import SupportTime from "../../components/SupportTime/SupportTime";

function Support() {
  return (
    <div className>
      <Topbar BreadcrumbTitle="داشبورد پشتیبانی" BreadcrumbLink="/support" />
      <>
        <SupportTime />
      </>
    </div>
  );
}

export default Support;
