import { useState } from "react";
import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import ProgressBar from "../ProgressBar/ProgressBar";

function SalesNetworksChart() {
  const [averageSale, setAverageSale] = useState([
    {
      id: 1,
      title: "گوگل",
      progressPercent: 42,
      progressValueColor: "[&::-webkit-progress-value]:bg-[#FF3D00]",
    },
    {
      id: 2,
      title: "اینستاگرام",
      progressPercent: 34,
      progressValueColor: "[&::-webkit-progress-value]:bg-[#3f729b]",
    },
    {
      id: 3,
      title: "واتس اپ",
      progressPercent: 60,
      progressValueColor: "[&::-webkit-progress-value]:bg-[#43d854]",
    },
    {
      id: 4,
      title: "فیسبوک",
      progressPercent: 20,
      progressValueColor: "[&::-webkit-progress-value]:bg-[#3b5998]",
    },
    {
      id: 5,
      title: "لینکدین",
      progressPercent: 30,
      progressValueColor: "[&::-webkit-progress-value]:bg-[#55a6eb]",
    },
  ]);

  return (
    <ChartBoxTemplate>
      <div className="w-full xl:w-[49%] xl:mb-0 flex items-center flex-col xl:flex-row">
        <div className="bg-white rounded-lg w-full">
          <h5 className="border-b p-4 text-2sm font-iranYekanBold">
            شبکه های فروش
          </h5>
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
                      {" "}
                      {networksAverage.progressPercent}%{" "}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[49%] xl:mb-0 flex items-center flex-col xl:flex-row"></div>
    </ChartBoxTemplate>
  );
}

export default SalesNetworksChart;
