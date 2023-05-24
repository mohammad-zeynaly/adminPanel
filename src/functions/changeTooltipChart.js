function changeTooltipChart(
  tooltipValue,
  tooltipName,
  firstTooltipLabel,
  secondTooltipLabel,
  thirdTooltipLabel,
  firstChartDataName,
  secondChartDataName
) {

  if (secondChartDataName) {

    if (tooltipName === firstChartDataName) {
      return `${firstTooltipLabel}: ${tooltipValue}`;
    } else if (tooltipName === secondChartDataName) {
      return `${secondTooltipLabel}: ${tooltipValue}`;
    } else {
      return `${thirdTooltipLabel}: ${tooltipValue}`;
    }

  } else {
    
    if (tooltipName === firstChartDataName) {
      return `${firstTooltipLabel}: ${tooltipValue}`;
    } else {
      return `${secondTooltipLabel}: ${tooltipValue}`;
    }
    
  }

}

export default changeTooltipChart;
