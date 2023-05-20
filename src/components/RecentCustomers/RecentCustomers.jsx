import TableTemplate from "../TableTemplate/TableTemplate";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { recentCustomersData } from "../../allDatas";
import SectionTitle from "../SectionTitle/SectionTitle"

function RecentCustomers() {
  return (
    <section className="mt-5 sm:mt-8 mb-5 sm:mb-8">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <div className="w-full">
          <div className="bg-white rounded-lg w-full">
            <SectionTitle sectionClass="p-4 border-b"> مشتریان اخیر </SectionTitle>
            <div className="p-4">
              <TableTemplate tableScrollSize={575}>
                {/* ------ Table Header ------ */}
                <TableHead>
                  <TableRow>
                    <TableCell>نام کاربر</TableCell>
                    <TableCell align="center">نام محصول</TableCell>
                    <TableCell align="center"> تعداد محصول</TableCell>
                    <TableCell align="center"> وضعیت پرداخت</TableCell>
                  </TableRow>
                </TableHead>
                {/* ------ Table Body ------ */}
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
                          <h6 className=" text-secondary font-iranYekanBold">
                            پرداخت شده
                          </h6>
                        ) : (
                          <h6 className="text-third font-iranYekanBold">
                            پرداخت نشده
                          </h6>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableTemplate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentCustomers;
