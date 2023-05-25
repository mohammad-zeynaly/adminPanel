import { useState, useEffect, useContext } from "react";
import { AdminPanelContext } from "../context/adminPanelContext";

function useFilteredData(dataType) {
  const { allData } = useContext(AdminPanelContext);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    if (allData) {
      const filteredData = allData.filter(
        (filterData) => filterData.type === dataType
      );

      setMainData(filteredData);
    }
  }, [allData]);

  return mainData;
}

export default useFilteredData;
