import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useNumberPersian from "../../hooks/useNumberPersian";

const data = [
  {
    name: "آفریقا",
    uv: 100,
  },
  {
    name: "آسیا",
    uv: 200,
  },
  {
    name: "اروپا",
    uv: 300,
  },
  {
    name: "آمریکای لاتین",
    uv: 400,
  },
  {
    name: "آمریکای شمالی",
    uv: 500,
  },
];

function SalesChart() {
  const getLabel = (value, name) => {
    if (name === "uv") {
      return ` جمعیت: ${value}`;
    }
  };

  return (
    <div className="w-full lg:w-[49%] mb-4">
      <div className="bg-white rounded-lg p-4 w-full">
        <h5> فروش های منطقه ای </h5>

        <div className="flex justify-center sm:mt-4 mr-4 w-full">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              className="flex justify-center"
              data={data}
              barSize={15}
              style={{ direction: "ltr" }}
              layout="vertical" // اینجا تغییر داده شده است
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false}  />
              <XAxis dataKey="name" />
              <YAxis className="mr-8" />
              <Tooltip formatter={(value, name) => [getLabel(value, name)]} />

              <Bar
                dataKey="uv"
                fill="#1B35FE"
                label={({ value }) => getLabel(value, "uv")}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
          <div className="text-primary">
            <h6 className=" text-lg font-iranYekanBold">
              {useNumberPersian(4_234_076)} 
              <span className="text-base">  تومان  </span>
            </h6>
            <span className=" text-sm"> کل فروش </span>
          </div>
          <div className="text-[#ffb822]">
            <h6 className=" text-lg font-iranYekanBold font-black">
              {useNumberPersian(620_076)} 
              <span className="text-base">  تومان  </span>

            </h6>
            <span className=" text-sm">  میانگین </span>
          </div>
          <div className="text-[#e04b4b]">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(20_076)} 
              <span className="text-base">  تومان  </span>
            </h6>
            <span className="text-sm">  بازگشت </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;
