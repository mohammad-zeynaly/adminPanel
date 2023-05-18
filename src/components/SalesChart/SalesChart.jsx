import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import SalesNetworksChart from "../SalesNetworksChart/SalesNetworksChart";
import StatusBuyChart from "../StatusBuyChart/StatusBuyChart"

function SalesChart() {
  return (
    <ChartBoxTemplate>
      <SalesNetworksChart />
      <StatusBuyChart />
    </ChartBoxTemplate>
  );
}

export default SalesChart;
