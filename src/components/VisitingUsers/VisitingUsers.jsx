import ChartBoxTemplate from "../ChartBoxTemplate/ChartBoxTemplate";
import RtlConfigMui from "../RtlConfigMui/RtlConfigMui";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";

function VisitingUsers() {
  return (
    <ChartBoxTemplate>
      <div className="w-full mb-5 xl:mb-0 xl:w-[49%] ml-4">
        <div className="bg-white rounded-lg">
          <h4 className="p-4 border-b">مجموع بازدید</h4>
          <div className="p-4">
            <RtlConfigMui className="">
              <TableContainer dir="rtl" component={Paper}>
                <Table sx={{ minWidth: 575 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h5 className="text-[#a7abc3] font-iranYekanBold">عنوان صفحه</h5>
                      </TableCell>
                      <TableCell align="center">
                        <h5 className="text-[#a7abc3] font-iranYekanBold">درصد</h5>
                      </TableCell>
                      <TableCell align="center">
                        <h5 className="text-[#a7abc3] font-iranYekanBold">مقدار</h5>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        صفحه اصلی
                      </TableCell>
                      <TableCell align="center">
                        <ProgressBar
                          progressValue={65.35}
                          progressColorValue="bg-[#55a6eb]"
                        />
                      </TableCell>
                      <TableCell align="center" className="!text-secondary">
                        65.35%
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </RtlConfigMui>
          </div>
        </div>
      </div>
    </ChartBoxTemplate>
  );
}

export default VisitingUsers;
