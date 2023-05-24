import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import TotalViewsTable from "../TotalViewsTable/TotalViewsTable";
import VisitorsBrowsers from "../VisitorsBrowsers/VisitorsBrowsers";

function VisitingUsers() {
  return (
    <div className="mb-5 sm:mb-8">
      <ChartBoxTemplate>
        <TotalViewsTable />
        <VisitorsBrowsers />
      </ChartBoxTemplate>
    </div>
  );
}

export default VisitingUsers;
