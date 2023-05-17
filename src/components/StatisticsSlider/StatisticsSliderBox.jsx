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
      <progress
        className={`mt-3 p-[5px] w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-[#e9ecef] ${progressValueColor}`}
        value={progressValue}
        max="100"
      ></progress>
    </div>
  );
}
export default StatisticsSliderBox;
