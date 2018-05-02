FusionCharts.ready(() => {
  const salesData = {
    chart: {
      caption: 'Sales of liquor',
      subCaption: 'Last week',
      xAxisName: 'Day',
      yAxisName: 'Sales (In USD)',
      numberPrefix: '$',
      theme: 'fint',
      usePlotGradientColor: '1',
      plotGradientColor: '#f2c500',
      plotFillRatio: '1:100',
      plotFillAngle: '270',
    },
    data: [
      {
        label: 'Mon',
        value: '4123',
      },
      {
        label: 'Tue',
        value: '4633',
      },
      {
        label: 'Wed',
        value: '5507',
      },
      {
        label: 'Thu',
        value: '4910',
      },
      {
        label: 'Fri',
        value: '5529',
      },
      {
        label: 'Sat',
        value: '5803',
      },
      {
        label: 'Sun',
        value: '6202',
      },
    ],
  };

  new FusionCharts({
    type: 'area2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: salesData,
  }).render();
});
