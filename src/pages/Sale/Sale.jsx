import Topbar from "../../components/Topbar/Topbar";
import StatisticsSlider from "../../components/StatisticsSlider/StatisticsSlider"

function Sale() {
  return (
    <div className="w-full">
      <Topbar BreadcrumbTitle="فروش و مدیریت مشتری" BreadcrumbLink="/" />
      <div className="container">
        <StatisticsSlider />
      </div>
    </div>
  );
}

export default Sale;
