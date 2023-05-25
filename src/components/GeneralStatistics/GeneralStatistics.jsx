import useFilteredData from "../../hooks/useFilteredData";
import convertToSvgHtml from "../../functions/convertToSvgHtml";
import useNumberPersian from "../../hooks/useNumberPersian";

function GeneralStatistics() {
  const generalStatisticsData = useFilteredData("generalStatisticsData");

  return (
    <section className="mt-5 sm:mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {generalStatisticsData.map((statistics) => (
          <div
            key={statistics.id}
            className="bg-white p-4 rounded-lg flex justify-between items-center"
          >
            <div className="font-iranYekanBold">
              <h5 className="text-xl">
                {statistics.statisticsCount < 100
                  ? useNumberPersian(statistics.statisticsCount) + "%"
                  : useNumberPersian(statistics.statisticsCount)}
              </h5>
              <h6 className={`${statistics.color} text-sm mt-2`}>
                {statistics.watch}
              </h6>
              <span className="text-sm block mt-2 font-iranYekanMedium text-[#a7abc3]">
                {statistics.caption}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={convertToSvgHtml(statistics.avatar)}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneralStatistics;
