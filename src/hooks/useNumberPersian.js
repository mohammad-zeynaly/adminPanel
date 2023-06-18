
function useNumberPersian(numberData) {
  const persianNumber = new Intl.NumberFormat("fa");
  const convertToPersianNumber = persianNumber.format(numberData);

  return [convertToPersianNumber];
}

export default useNumberPersian;
