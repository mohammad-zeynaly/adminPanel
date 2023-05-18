import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import SalesProducts from "../SalesProducts/SalesProducts";
import TotalCustomersChart from "../TotalCustomersChart/TotalCustomersChart";

function CustomersChart() {
  return (
    <ChartBoxTemplate>
      <TotalCustomersChart />
      <SalesProducts />
    </ChartBoxTemplate>
  );
}

export default CustomersChart;
