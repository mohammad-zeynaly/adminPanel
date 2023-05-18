import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import ReportsChart from "../ReportsChart/ReportsChart";
import SalesChart from "../RegionalSalesChart/RegionalSalesChart";

function ChartBar() {
  return (
    <ChartBoxTemplate>
      <ReportsChart />
      <SalesChart />
    </ChartBoxTemplate>
  );
}

export default ChartBar;
