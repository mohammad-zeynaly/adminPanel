import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RtlConfigMui from "../RtlConfigMui/RtlConfigMui";
import { recentCustomersData } from "../../allDatas";

function RecentCustomers() {
  return (
    <section className="mt-5 sm:mt-8 mb-5 sm:mb-8">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full">
          <div className="bg-white rounded-lg w-full">
            <h4 className="p-4 border-b"> مشتریان اخیر </h4>
            <div className="p-4">
              <RtlConfigMui className="">
                <TableContainer dir="rtl" component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>نام کاربر</TableCell>
                        <TableCell align="center">نام محصول</TableCell>
                        <TableCell align="center"> تعداد محصول</TableCell>
                        <TableCell align="center"> وضعیت پرداخت</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentCustomersData.map((customerData) => (
                        <TableRow
                          key={customerData.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <div className="flex items-center">
                              <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={customerData.avatar}
                                alt="عکس مشتری"
                              />
                              <span className="pr-3">{customerData.name}</span>
                            </div>
                          </TableCell>
                          <TableCell align="center" className="">
                            {customerData.productName}
                          </TableCell>
                          <TableCell align="center" className="">
                            {customerData.productCount}
                          </TableCell>
                          <TableCell align="center">
                            {customerData.statusPayment ? (
                              <h6 className=" text-secondary font-iranYekanBold font-extrabold">
                                پرداخت شده
                              </h6>
                            ) : (
                              <h6 className="text-third font-iranYekanBold font-bold">
                                پرداخت نشده
                              </h6>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </RtlConfigMui>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentCustomers;
