import TableTemplate from "../TableTemplate/TableTemplate";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";
import { totalViewsItems } from "../../data/allDatas";
import SectionTitle from "../SectionTitle/SectionTitle"

function TotalViewsTable() {
  return (
    <div className="w-full mb-5 xl:mb-0 xl:w-[49%]">
      <div className="bg-white rounded-lg">
        <SectionTitle sectionClass="p-4 border-b text-2sm">مجموع بازدید</SectionTitle>
        <div>
          <TableTemplate tableScrollSize={450}>
            {/* ------ Table Header ------ */}
            <TableHead>
              <TableRow>
                <TableCell>
                  <h5 className="text-[#a7abc3] font-iranYekanBold">
                    عنوان صفحه
                  </h5>
                </TableCell>
                <TableCell align="center">
                  <h5 className="text-[#a7abc3] font-iranYekanBold">درصد</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 className="text-[#a7abc3] font-iranYekanBold">مقدار</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* ------ Table Body ------ */}
            <TableBody>
              {totalViewsItems.map((totalViewsItem) => (
                <TableRow
                  key={totalViewsItem.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {totalViewsItem.title}
                  </TableCell>
                  <TableCell align="center">
                    <ProgressBar
                      progressValue={totalViewsItem.percent}
                      progressColorValue={totalViewsItem.progressColor}
                    />
                  </TableCell>
                  <TableCell align="center" className="!text-secondary">
                    {totalViewsItem.percent}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableTemplate>
        </div>
      </div>
    </div>
  );
}

export default TotalViewsTable;
