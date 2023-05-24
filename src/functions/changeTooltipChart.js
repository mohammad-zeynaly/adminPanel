function changeTooltipChart(tooltipValue, tooltipName) {
  if (tooltipName === "success") {
    return `موفقیت: ${tooltipValue}`;
  } else {
    return `بازگشت: ${tooltipValue}`;
  }
}

export default changeTooltipChart;
