import ReportsChart from "../ReportsChart/ReportsChart"
import SalesChart from "../SalesChart/SalesChart"
function ChartBar() {
  return (
    <section className="mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <ReportsChart />
        <SalesChart />
      </div>
    </section>
  );
}

export default ChartBar;
