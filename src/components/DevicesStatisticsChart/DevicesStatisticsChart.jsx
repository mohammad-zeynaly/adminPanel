import CircleIcon from "../CircleIcon/CircleIcon";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { devicesStatisticsChartData } from "../../allDatas";

function DevicesStatisticsChart() {
  const getTooltipLabel = (value, name) => {
    if (name === "mobile") {
      return ` موبایل: ${value}`;
    } else if (name === "desktop") {
      return `دسکتاپ: ${value}`;
    } else {
      return `سایر: ${value}`;
    }
  };

  return (
    <section className="mt-5 sm:mt-8">
      <div className="bg-white rounded-lg">
        <h5 className="p-4 border-b">آمار دستگاه ها</h5>
        <div className="p-4">
          <div className="flex items-center justify-around my-5">
            <div className="flex items-center ">
              <CircleIcon bgCircle="bg-primary" />
              <h6 className="text-[#a7abc3] mt-1 mr-2">موبایل</h6>
            </div>
            <div className="flex items-center mr-4">
              <CircleIcon bgCircle="bg-secondary" />
              <h6 className="text-[#a7abc3] mt-1 mr-2"> دسکتاپ </h6>
            </div>
            <div className="flex items-center mr-4">
              <CircleIcon bgCircle="bg-[#FFB822]" />
              <h6 className="text-[#a7abc3] mt-1 mr-2">سایر</h6>
            </div>
          </div>
          <div id="devicesStatisticsChart">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={devicesStatisticsChartData}
                margin={{ top: 5, bottom: 5, right: 5, left: 5 }}
                style={{ direction: "ltr" }}
              >
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis dataKey="desktop" />
                <YAxis hide />
                <Tooltip
                  formatter={(value, name) => [getTooltipLabel(value, name)]}
                />
                <Line
                  label={({ value }) => getTooltipLabel(value, "mobile")}
                  type="monotone"
                  dataKey="mobile"
                  stroke="#5867DD"
                  strokeWidth={2}
                />
                <Line
                  label={({ value }) => getTooltipLabel(value, "desktop")}
                  type="monotone"
                  dataKey="desktop"
                  stroke="#0abb87"
                  strokeWidth={2}
                />
                <Line
                  label={({ value }) => getTooltipLabel(value, "other")}
                  type="monotone"
                  dataKey="other"
                  stroke="#FFB822"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevicesStatisticsChart;