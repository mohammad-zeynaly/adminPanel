import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useNumberPersian from "../../hooks/useNumberPersian";
const data = [
  {
    name: "آفریقا",
    population: 1216,
  },
  {
    name: "آسیا",
    population: 4561,
  },
  {
    name: "اروپا",
    population: 746,
  },
  {
    name: "آمریکا",
    population: 1002,
  },
  {
    name: "استرالیا",
    population: 26,
  },
];
function SalesChart() {
  const getLabel = (value, name) => {
    if (name === "population") {
      return ` جمعیت: ${value} میلیون`;
    }
  };

  return (
    <div className="w-full xl:w-[49%]">
      <div className="bg-white rounded-lg p-4 w-full">
        <h5> فروش های منطقه ای </h5>

        <div className="flex justify-center mt-3 sm:mt-4 mr-4 w-full ">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={data}
              layout="vertical"
              barSize={15}
              style={{ direction: "ltr" }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />

              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value, name) => [getLabel(value, name)]} />

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
          <div className="text-[#e04b4b] mt-3">
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

export default SalesChart;