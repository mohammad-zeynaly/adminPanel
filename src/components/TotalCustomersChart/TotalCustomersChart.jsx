import { totalCustomersData } from "../../allDatas";
import useNumberPersian from "../../hooks/useNumberPersian";

function TotalCustomersChart() {

  return (
    <div className="w-full xl:w-[49%] xl:mb-0 flex items-center flex-col xl:flex-row">
      {totalCustomersData.map((chartData) => 
        <div
          key={chartData.id}
          className={`bg-white rounded-lg w-full mb-5 xl:w-[49%] xl:mb-0 ${chartData.classBetween}`}
        >
          <h5 className="border-b p-4 text-2sm font-iranYekanBold">
            {chartData.title}
          </h5>
          <div className="p-4 flex flex-col items-center">
            {chartData.chart}
            <h6
              className={`${chartData.textClass} font-iranYekanBold text-2xl mt-3`}
            >
              {useNumberPersian(chartData.count)}
            </h6>
            <span className="pt-3 text-2sm">{chartData.status}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TotalCustomersChart;
