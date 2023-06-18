function ProgressBar({ progressClass, progressValue, progressColorValue }) {
  return (
    <div
      className={`${progressClass} mb-2 pb-[5px] w-full h-1 rounded-lg bg-[#e9ecef]`}
    >
      <div
        className={`${progressColorValue} pb-[5px] h-1 rounded-lg`}
        style={{ width: progressValue + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
