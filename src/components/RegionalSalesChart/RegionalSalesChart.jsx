import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { regionalSalesChartData } from "../../data/allDatas";
import useNumberPersian from "../../hooks/useNumberPersian";
import SectionTitle from "../SectionTitle/SectionTitle";
import changeTooltipChart from "../../functions/changeTooltipChart";

function RegionalSalesChart() {

  return (
    <div className="w-full xl:w-[49%]">
      <div className="bg-white rounded-lg p-4 w-full">
        <SectionTitle> فروش های منطقه ای </SectionTitle>

        <div className="flex justify-center mt-3 sm:mt-4 mr-4 w-full ">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={regionalSalesChartData}
              layout="vertical"
              barSize={15}
              style={{ direction: "ltr" }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />

              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" />
              <Tooltip
                formatter={(value, name) => [
                  changeTooltipChart(value,name,"جمعیت","","","population"),
                ]}
              />

              <Bar background dataKey="population" fill="#1B35FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-primary mt-3">
            <h6 className=" text-lg font-iranYekanBold">
              {useNumberPersian(4_234_076)}
              <span className="text-base"> تومان </span>
            </h6>
            <span className=" text-sm"> کل فروش </span>
          </div>
          <div className="text-[#ffb822] mt-3">
            <h6 className=" text-lg font-iranYekanBold font-black">
              {useNumberPersian(620_076)}
              <span className="text-base"> تومان </span>
            </h6>
            <span className=" text-sm"> میانگین </span>
          </div>
          <div className="text-third mt-3">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(20_076)}
              <span className="text-base"> تومان </span>
            </h6>
            <span className="text-sm"> بازگشت </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionalSalesChart;
