import ProgressBar from "../ProgressBar/ProgressBar";
import { averageSale } from "../../allDatas";

function SalesNetworksChart() {
  return (
    <div className="w-full mb-5 xl:w-[49%] xl:mb-0 flex items-center flex-col xl:flex-row">
      <div className="bg-white rounded-lg w-full">
        <h4 className="border-b p-4 text-2sm font-iranYekanBold">
          شبکه های فروش
        </h4>
        <div className="p-4">
          <div className="flex flex-col items-center relative">
            <img src="./assets/images/chartCircle.png" alt="نمودار میانگین" />
            <h6 className="flex flex-col items-center text-xl font-iranYekanBold absolute top-[35%]">
              65%
              <span className="text-2sm">میانگین</span>
            </h6>
          </div>
          <div className="flex flex-col">
            {averageSale.map((networksAverage) => (
              <div key={networksAverage.id} className="">
                {networksAverage.title}
                <span className="flex items-center justify-between">
                  <ProgressBar
                    progressClass="mt-2 mb-4"
                    progressValue={networksAverage.progressPercent}
                    progressColorValue={networksAverage.progressValueColor}
                  />
                  <span className="pr-2 text-sm">
                    {networksAverage.progressPercent}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesNetworksChart;
