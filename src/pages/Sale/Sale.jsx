import Topbar from "../../components/Topbar/Topbar";
import StatisticsSlider from "../../components/StatisticsSlider/StatisticsSlider";
import ChartBar from "../../components/ChartBar/ChartBar";
import CustomersChart from "../../components/CustomersChart/CustomersChart";
import SalesNetworksChart from "../../components/SalesNetworksChart/SalesNetworksChart"

function Sale() {
  return (
    <div className="w-full">
      <Topbar BreadcrumbTitle="فروش و مدیریت مشتری" BreadcrumbLink="/" />
      <div className="container">
        <StatisticsSlider />
        <ChartBar />
        <CustomersChart />
        <SalesNetworksChart />
      </div>
    </div>
  );
}

export default Sale;
