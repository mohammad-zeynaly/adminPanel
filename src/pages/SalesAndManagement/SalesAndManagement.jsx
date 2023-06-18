import Topbar from "../../components/Topbar/Topbar";
import StatisticsSlider from "../../components/StatisticsSlider/StatisticsSlider";
import ChartBar from "../../components/ChartBar/ChartBar";
import CustomersChart from "../../components/CustomersChart/CustomersChart";
import SalesChart from "../../components/SalesChart/SalesChart";
import RecentIncome from "../../components/RecentIncome/RecentIncome";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import Loader from "../../components/Loader/Loader";

function Sale() {
  return (
    <div className="w-full">
      <Topbar BreadcrumbTitle="فروش و مدیریت مشتری" BreadcrumbLink="/" />
      <>
        <StatisticsSlider />
        <ChartBar />
        <CustomersChart />
        <SalesChart />
        <RecentIncome />
        <RecentCustomers />
        <Loader />
      </>
    </div>
  );
}

export default Sale;
