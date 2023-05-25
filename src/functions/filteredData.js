
function filterDataByType (allData, dataType)  {
  if (!allData) return [];
  const filteredData = allData.filter(
    (filterData) => filterData.type === dataType
  );

  return filteredData;
}


export default filterDataByType;