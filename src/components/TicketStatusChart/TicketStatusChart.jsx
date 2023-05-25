import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import useFilteredData from "../../hooks/useFilteredData";
import changeTooltipChart from "../../functions/changeTooltipChart";
import SectionTitle from "../SectionTitle/SectionTitle";
import CircleIcon from "../CircleIcon/CircleIcon";

function TicketStatusChart() {

  const ticketStatusChartData = useFilteredData("ticketStatusChartData")

  return (
    <section className="mt-5 mb-5 sm:mt-8 sm:mb-8">
      <div className="bg-white rounded-lg p-4">
        <SectionTitle>وضعیت تیکت </SectionTitle>
        <div className="my-5 flex flex-wrap items-center justify-center">
          <div className="flex items-center text-sm font-iranYekanBold mr-4 mb-3 sm:mb-0">
            <CircleIcon bgCircle="bg-[#BAC2FF]" />
            <h6 className="mr-2">تیکت های جدید </h6>
          </div>
          <div className="flex items-center text-sm font-iranYekanBold mr-4 mb-3 sm:mb-0">
            <CircleIcon bgCircle="bg-[#B2E8D8]" />
            <h6 className="mr-2"> تیکت های حل شده </h6>
          </div>
          <div className="flex items-center text-sm font-iranYekanBold mr-4 mb-3 sm:mb-0">
            <CircleIcon bgCircle="bg-[#EDA5A5]" />
            <h6 className="mr-2">تیکت های در انتظار</h6>
          </div>
        </div>
        <div className="w-full mt-5 mr-4 sm:mr-0 ticket-chart">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={ticketStatusChartData}
              margin={{
                top: 5,
                bottom: 5,
                right: 5,
                left: 5,
              }}
              style={{ direction: "ltr" }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  changeTooltipChart(value,name,"تیکت های جدید","تیکت های حل شده","تیکت های در انتظار","newTicket","solvedTicket"),
                ]}
              />
              <Bar
                dataKey="newTicket"
                stackId="a"
                fill="#BAC2FF"
                label={({ value }) => changeTooltipChart(value, "newTicket")}
              />
              <Bar
                dataKey="solvedTicket"
                stackId="a"
                fill="#B2E8D8"
                label={({ value }) => changeTooltipChart(value, "solvedTicket")}
              />
              <Bar
                dataKey="pendingTicket"
                stackId="a"
                fill="#EDA5A5"
                label={({ value }) =>
                  changeTooltipChart(value, "pendingTicket")
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default TicketStatusChart;
