
function ProgressBar({ progressClass, progressValue, progressColorValue }) {
  return (
    <progress
      className={`${progressClass} py-[5px] w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-[#e9ecef] ${progressColorValue}`}
      value={progressValue}
      max="100"
    ></progress>
  );
}

export default ProgressBar;
