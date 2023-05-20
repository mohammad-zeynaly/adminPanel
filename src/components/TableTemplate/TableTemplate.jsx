import RtlConfigMui from "../RtlConfigMui/RtlConfigMui";
import { TableContainer, Table, Paper } from "@mui/material";

function TableTemplate({ tableScrollSize, children }) {
  return (
    <RtlConfigMui className="">
      <TableContainer dir="rtl" component={Paper}>
        <Table sx={{ minWidth: tableScrollSize }} aria-label="data table ">
          {children}
        </Table>
      </TableContainer>
    </RtlConfigMui>
  );
}

export default TableTemplate;
