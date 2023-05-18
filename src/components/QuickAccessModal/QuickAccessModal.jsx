import { accessItems } from "../../allDatas";

function QuickAccessModal() {
  return (
    <div onClick={(event) => event.stopPropagation()}
      className="mt-2 w-full lg:w-72 bg-white rounded-lg p-4 lg:absolute lg:left-0 transition-all duration-150 z-40">
      <h5 className="text-sm">دسترسی سریع</h5>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-2 text-sm sm:text-2sm">
        {accessItems.map((item) => (
          <div key={item.id} className={`${item.textClass} ${item.bgClass} rounded-lg py-4 flex flex-col items-center`}>
            {item.icon}
            <span className="pt-2"> {item.title} </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccessModal;