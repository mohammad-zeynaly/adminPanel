import TableTemplate from "../TableTemplate/TableTemplate";
import useFetchAndFilteredData from "../../hooks/useFetchAndFilteredData";
import useNumberPersian from "../../hooks/useNumberPersian";
import convertToSvgHtml from "../../functions/convertToSvgHtml";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

function RecentIncome() {
  const incomeItems = useFetchAndFilteredData("incomeItems");
  const allIncomeItemData = useFetchAndFilteredData("allIncomeItemData");

  return (
    <section className="mt-5 sm:mt-8 bg-white rounded-lg p-4">
      <SectionTitle sectionClass="font-iranYekanBold my-4 text-center sm:text-right">
        درآمد های اخیر شما
      </SectionTitle>
      <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center">
        {incomeItems.map((incomeBox) => (
          <div key={incomeBox.id} className="flex items-center mb-4 sm:mb-0">
            <div
              className={`flex items-center justify-center border-2 ${incomeBox.borderClass} rounded-lg w-10 h-10`}
              dangerouslySetInnerHTML={convertToSvgHtml(incomeBox.icon)}
            ></div>
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
        <TableTemplate tableScrollSize={575}>
          {/* ------ Table Header ------ */}
          <TableHead>
            <TableRow>
              <TableCell>تاریخ</TableCell>
              <TableCell align="center">تعداد فروش</TableCell>
              <TableCell align="center">سود ناخالص</TableCell>
              <TableCell align="center">کسر مالیات</TableCell>
              <TableCell align="center">سود خالص</TableCell>
            </TableRow>
          </TableHead>
          {/* ------ Table Body ------ */}
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
        </TableTemplate>
      </div>
    </section>
  );
}

export default RecentIncome;
