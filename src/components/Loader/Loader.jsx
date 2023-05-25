import { createPortal } from "react-dom";
import { useContext } from "react";
import { AdminPanelContext } from "../../context/AdminPanelContext";

function Loader() {
  const { loadingTime } = useContext(AdminPanelContext);

  return createPortal(
    <div className={`page-loader ${loadingTime === true ? "flex" : " hidden"}`}>
      <div className="spinner-loader"></div>
    </div>,
    document.querySelector("#page-loader")
  );
}

export default Loader;
