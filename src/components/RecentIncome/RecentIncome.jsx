import useNumberPersian from "../../hooks/useNumberPersian";
import { incomeItems } from "../../allDatas";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RtlConfigMui from "../RtlConfigMui/RtlConfigMui";
import { allIncomeItemData } from "../../allDatas";

function RecentIncome() {
  return (
    <section className="mt-5 sm:mt-8 bg-white rounded-lg p-4">
      <h5 className="font-iranYekanBold my-4 text-center sm:text-right">
        درآمد های اخیر شما
      </h5>
      <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center">
        {incomeItems.map((incomeBox) => (
          <div key={incomeBox.id} className="flex items-center mb-4 sm:mb-0">
            <div
              className={`flex items-center justify-center border-2 ${incomeBox.borderClass} rounded-lg w-10 h-10`}
            >
              {incomeBox.icon}
            </div>
            <span className="pr-3">
              <span className="text-sm"> {incomeBox.title} </span>
              <h6 className="text-lg sm:text-xl font-iranYekanBold mt-1">
                {useNumberPersian(incomeBox.price)}
                <span className="text-base "> تومان </span>
              </h6>
            </span>
          </div>
        ))}
      </div>
      <div className="my-6">
        <RtlConfigMui className="">
          <TableContainer dir="rtl" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>تاریخ</TableCell>
                  <TableCell align="center">تعداد فروش</TableCell>
                  <TableCell align="center">سود ناخالص</TableCell>
                  <TableCell align="center">کسر مالیات</TableCell>
                  <TableCell align="center">سود خالص</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allIncomeItemData.map((incomeData) => (
                  <TableRow
                    key={incomeData.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {incomeData.date}
                    </TableCell>
                    <TableCell align="center">
                      {useNumberPersian(incomeData.saleCount)}
                    </TableCell>
                    <TableCell align="center" className="!text-secondary">
                      {useNumberPersian(incomeData.grossProfit)} تومان
                    </TableCell>
                    <TableCell align="center" className="!text-third">
                      {useNumberPersian(incomeData.tax)} تومان
                    </TableCell>
                    <TableCell align="center">
                      {useNumberPersian(incomeData.netProfit)} تومان
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </RtlConfigMui>
      </div>
    </section>
  );
}

export default RecentIncome;
