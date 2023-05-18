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
    average: 100,
    sale: 200,
  },
  {
    name: "1392",
    average: 200,
    sale: 300,
  },
  {
    name: "1393",
    average: 300,
    sale: 400,
  },
  {
    name: "1394",
    average: 400,
    sale: 500,
  },
  {
    name: "1395",
    average: 500,
    sale: 600,
  },
  {
    name: "1396",
    average: 600,
    sale: 700,
  },
  {
    name: "1397",
    average: 700,
    sale: 800,
  },
  {
    name: "1398",
    average: 800,
    sale: 900,
  },
];

function Reports() {
  const getLabel = (value, name) => {
    if (name === "sale") {
      return `مجموع فروش: ${value}`;
    } else {
      return `میانگین: ${value}`;
    }
  };

  return (
    <div className="w-full mb-5 xl:w-[49%] xl:mb-0">
      <div className="bg-white rounded-lg p-4 w-full">
        <h4>گزارشات </h4>
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
        <div className="flex justify-center mt-3 sm:mt-4 mr-4 w-full">
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
                dataKey="sale"
                fill="#55A6EB"
                label={({ value }) => getLabel(value, "sale")}
              />
              <Bar
                dataKey="average"
                fill="#5867DD"
                label={({ value }) => getLabel(value, "average")}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Reports;
