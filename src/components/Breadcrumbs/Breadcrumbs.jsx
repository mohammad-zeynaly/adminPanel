import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function Breadcrumb({ BreadcrumbTitle, BreadcrumbLink }) {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="font-iranYekanMedium text-black text-[15px]" to="/">
          داشبورد
        </Link>
        <Link
          className="font-iranYekanMedium text-primary text-[15px]"
          to={`/${BreadcrumbLink}`}
        >
          {BreadcrumbTitle}
        </Link>
      </Breadcrumbs>
    </>
  );
}

export default Breadcrumb;
