import ProgressBar from "../ProgressBar/ProgressBar";

function StatisticsSliderBox(props) {
  let {
    textColor,
    bgColor,
    progressValueColor,
    icon,
    title,
    count,
    progressValue,
  } = props;

  return (
    <div className="p-5 rounded-lg flex flex-col border file:border-[#dee2e6] ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            className={`${bgColor} w-8 h-8 flex items-center justify-center rounded-full`}
          >
            {icon}
          </div>
          <span className="pr-3 text-sm "> {title} </span>
        </div>
        <h6 className={`text-2xl font-iranYekanBold ${textColor}`}>{count}</h6>
      </div>
      <ProgressBar
        progressClass="mt-3"
        progressValue={progressValue}
        progressColorValue={progressValueColor}
      />
    </div>
  );
}
export default StatisticsSliderBox;
