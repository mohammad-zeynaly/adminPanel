import { useState, useEffect, useContext } from "react";
import { AdminPanelContext } from "../context/adminPanelContext";
import filteredData from "../functions/filteredData";

function useFetchAndFilteredData(dataType) {
  const { allData } = useContext(AdminPanelContext);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    if (allData) {
      setMainData(filteredData(allData,dataType));
    }
  }, [allData]);

  return mainData;
}

export default useFetchAndFilteredData;
