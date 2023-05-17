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
    name: "1391",
    uv: 100,
    pv: 200,
  },
  {
    name: "1392",
    uv: 200,
    pv: 300,
  },
  {
    name: "1393",
    uv: 300,
    pv: 400,
  },
  {
    name: "1394",
    uv: 400,
    pv: 500,
  },
  {
    name: "1395",
    uv: 500,
    pv: 600,
  },
  {
    name: "1396",
    uv: 600,
    pv: 700,
  },
  {
    name: "1397",
    uv: 700,
    pv: 800,
  },
  {
    name: "1398",
    uv: 800,
    pv: 900,
  },
];

function Reports() {
  const getLabel = (value, name) => {
    if (name === "pv") {
      return `مجموع فروش: ${value}`;
    } else {
      return `میانگین: ${value}`;
    }
  };

  return (
    <div className="w-full lg:w-[49%] mb-4">
      <div className="bg-white rounded-lg p-4 w-full">
        <h5>گزارشات </h5>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
          <div className="text-primary">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(56234076)} 
              <span className="text-base">  تومان  </span>

            </h6>
            <span className="text-sm"> مجموع فروش </span>
          </div>
          <div className="text-secondary mt-3 sm:mt-0">
            <h6 className="text-lg font-iranYekanBold">
              {useNumberPersian(620076)} 
              <span className="text-base">  تومان  </span>
            </h6>
            <span className="text-sm"> میانگین </span>
          </div>
        </div>
        <div className="flex justify-center sm:mt-4 mr-4 w-full">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              className="flex justify-center"
              data={data}
              barSize={15}
              style={{ direction: "ltr" }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis className="mr-8" />
              <Tooltip formatter={(value, name) => [getLabel(value, name)]} />

              <Bar
                dataKey="pv"
                fill="#55A6EB"
                label={({ value }) => getLabel(value, "pv")}
              />
              <Bar
                dataKey="uv"
                fill="#5867DD"
                label={({ value }) => getLabel(value, "uv")}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Reports;
