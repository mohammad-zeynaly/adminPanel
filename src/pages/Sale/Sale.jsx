import Topbar from "../../components/Topbar/Topbar";
import StatisticsSlider from "../../components/StatisticsSlider/StatisticsSlider"
import ChartBar from "../../components/ChartBar/ChartBar"
function Sale() {
  return (
    <div className="w-full">
      <Topbar BreadcrumbTitle="فروش و مدیریت مشتری" BreadcrumbLink="/" />
      <div className="container">
        <StatisticsSlider />
        <ChartBar />
      </div>
    </div>
  );
}

export default Sale;
