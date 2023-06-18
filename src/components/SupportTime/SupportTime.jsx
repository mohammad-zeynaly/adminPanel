import useFilteredData from "../../hooks/useFilteredData";

function SupportTime() {
  const supportTimeBoxes = useFilteredData("supportTimeBoxes");

  return (
    <section className="mt-5 sm:mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {supportTimeBoxes.map((supportTimeItem) => (
          <div
            key={supportTimeItem.id}
            className="bg-white p-4 rounded-lg w-full mb-5 lg:w-[49%] lg:mb-0"
          >
            <div className="flex flex-col lg:flex-row items-center my-3 lg:my-0">
              <div className="relative flex flex-col items-center">
                <img
                  className="object-cover"
                  src={supportTimeItem.img}
                  alt={`نمودار ${supportTimeItem.title}`}
                />
                <span className="flex flex-col items-center absolute top-[30%]">
                  <h6 className="text-xl">{supportTimeItem.percent}%</h6>
                  <span className="text-[#a7abc3] text-sm font-iranYekanBold">
                    دستیابی
                  </span>
                </span>
              </div>
              <div className="flex flex-col text-2sm lg:text-sm mr-3 mt-4 lg:my-0">
                <h6 className="font-iranYekanBold">{supportTimeItem.title}</h6>
                <span className="pt-3 text-[#a7abc3]">
                  {supportTimeItem.caption}
                </span>
                <span className="pt-3 text-[#a7abc3]">
                  {supportTimeItem.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SupportTime;
