import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import TotalViewsTable from "../TotalViewsTable/TotalViewsTable"
import VisitorsBrowsers from "../VisitorsBrowsers/VisitorsBrowsers"

function VisitingUsers() {
  return (
    <ChartBoxTemplate>
      <TotalViewsTable />
      <VisitorsBrowsers />
    </ChartBoxTemplate>
  );
}

export default VisitingUsers;
