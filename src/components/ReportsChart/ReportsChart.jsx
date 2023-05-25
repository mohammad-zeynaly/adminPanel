import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetchAndFilteredData from "../../hooks/useFetchAndFilteredData";
import useNumberPersian from "../../hooks/useNumberPersian";
import changeTooltipChart from "../../functions/changeTooltipChart";
import SectionTitle from "../SectionTitle/SectionTitle";

function Reports() {

  const reportChartData = useFetchAndFilteredData("reportChartData");

  return (
    <div className="w-full mb-5 xl:w-[49%] xl:mb-0">
      <div className="bg-white rounded-lg p-4 w-full">
        <SectionTitle>گزارشات</SectionTitle>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
          <div className="text-primary">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(56234076)}
              <span className="text-base"> تومان </span>
            </h6>
            <span className="text-sm"> مجموع فروش </span>
          </div>
          <div className="text-secondary mt-3 sm:mt-0">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(620076)}
              <span className="text-base"> تومان </span>
            </h6>
            <span className="text-sm"> میانگین </span>
          </div>
        </div>
        <div className="flex justify-center my-4 sm:mt-5 w-full mr-4 report-chart">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              className="flex justify-center"
              data={reportChartData}
              barSize={14}
              style={{ direction: "ltr" }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis className="mr-8" />
              <Tooltip
                formatter={(value, name) => [
                  changeTooltipChart(value,name,"مجموع فروش","میانگین","","sale"),
                ]}
              />

              <Bar
                dataKey="sale"
                fill="#55A6EB"
                label={({ value }) => changeTooltipChart(value, "sale")}
              />
              <Bar
                dataKey="average"
                fill="#5867DD"
                label={({ value }) => changeTooltipChart(value, "average")}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Reports;
