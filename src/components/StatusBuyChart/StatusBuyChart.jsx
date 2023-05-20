import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import useNumberPersian from "../../hooks/useNumberPersian";
import CircleIcon from "../CircleIcon/CircleIcon";
import { statusBuyChartData } from "../../allDatas";

function StatusBuyChart() {
  const getLabel = (value, name) => {
    if (name === "success") {
      return `موفقیت: ${value}`;
    } else {
      return `بازگشت: ${value}`;
    }
  };

  return (
    <div className="w-full xl:w-[49%] xl:mb-0 flex items-center flex-col xl:flex-row">
      <div className="bg-white rounded-lg w-full">
        <h4 className="border-b p-4 text-2sm font-iranYekanBold">وضعیت خرید</h4>
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <CircleIcon bgCircle="bg-secondary" />
              <h6 className="mr-2 text-2sm">موفقیت</h6>
            </div>
            <div className="flex items-center mr-4">
              <CircleIcon bgCircle="bg-third" />
              <h6 className="mr-2 text-2sm">بازگشت</h6>
            </div>
          </div>

          <div
            id="chart"
            className="my-4 flex justify-center w-full status-chart"
          >
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={statusBuyChartData}
                width="100%"
                height={250}
                style={{ direction: "ltr" }}
                className="translate-x-[-7%] sm:translate-x-[-4%] translate-y-[0%] chart__status-buy"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip formatter={(value, name) => [getLabel(value, name)]} />

                <Line
                  type="monotone"
                  dataKey="success"
                  stroke="#0abb87"
                  strokeDasharray="5 5"
                  label={({ value }) => getLabel(value, "success")}
                />
                <Line
                  type="monotone"
                  dataKey="back"
                  stroke="#e04b4b"
                  activeDot={{ r: 8 }}
                  strokeDasharray="5 5"
                  label={({ value }) => getLabel(value, "back")}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center my-5 ">
            <div className="w-full sm:w-[48%] mb-4 sm:mb-0 bg-[rgba(10,187,135,0.3)] text-secondary rounded-lg p-4 text-center">
              <h5 className="text-lg sm:text-xl font-iranYekanBold">
                {useNumberPersian(234_076)}
                <span className="text-base"> تومان </span>
              </h5>
              <span className="block mt-2 text-sm">مجموع فروش</span>
            </div>
            <div className="w-full sm:w-[48%] bg-[rgba(224,75,75,0.3)]  text-third rounded-lg p-4 text-center">
              <h5 className="text-lg sm:text-xl font-iranYekanBold">
                {useNumberPersian(20_076)}
                <span className="text-base"> تومان </span>
              </h5>
              <span className="block mt-2 text-sm"> بازگشت </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBuyChart;
