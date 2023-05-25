import useFetchAndFilteredData from "../../hooks/useFetchAndFilteredData";
import useNumberPersian from "../../hooks/useNumberPersian";
import convertToSvgHtml from "../../functions/convertToSvgHtml";
import TableTemplate from "../TableTemplate/TableTemplate";
import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";
import SectionTitle from "../SectionTitle/SectionTitle"

function VisitorsBrowsers() {

  const visitorsBrowserItems = useFetchAndFilteredData("visitorsBrowserItems")

  return (
    <div className="w-full xl:w-[49%] xl:mr-4">
      <div className="bg-white rounded-lg">
        <SectionTitle sectionClass="p-4 border-b text-2sm"> مرورگرهای بازدیدکنندگان </SectionTitle>
        <div>
          <TableTemplate tableScrollSize={450}>
            {/* ------ Table Header ------ */}
            <TableHead>
              <TableRow>
                <TableCell>
                  <h5 className="text-[#a7abc3] font-iranYekanBold">مرورگر</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 className="text-[#a7abc3] font-iranYekanBold">
                    درصد استفاده
                  </h5>
                </TableCell>
                <TableCell align="center">
                  <h5 className="text-[#a7abc3] font-iranYekanBold">
                    تعداد کاربر
                  </h5>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* ------ Table Body ------ */}
            <TableBody>
              {visitorsBrowserItems.map((visitorBrowserItem) => (
                <TableRow
                  key={visitorBrowserItem.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <div className="flex items-center" >
                      <div dangerouslySetInnerHTML={convertToSvgHtml(visitorBrowserItem.icon)}></div>
                      <h6 className="mr-3">{visitorBrowserItem.name}</h6>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <ProgressBar
                      progressValue={visitorBrowserItem.percent}
                      progressColorValue={visitorBrowserItem.progressValueColor}
                    />
                  </TableCell>
                  <TableCell align="center" className="!text-secondary">
                    {useNumberPersian(visitorBrowserItem.count)}
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

export default VisitorsBrowsers;
