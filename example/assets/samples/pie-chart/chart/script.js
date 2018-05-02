FusionCharts.ready(() => {
  const revenueChart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Split of revenue by product categories',
        subCaption: 'Last year',
        numberPrefix: '$',
        startingAngle: '20',
        showPercentValues: '1',
        showPercentInTooltip: '0',
        showLabels: '0',
        enableSmartLabels: '0',
        enableMultiSlicing: '0',
        showLegend: '1',
        decimals: '1',
        // Theme
        theme: 'fint',
      },
      data: [
        {
          label: 'Food',
          value: '285040',
        },
        {
          label: 'Apparels',
          value: '146330',
        },
        {
          label: 'Electronics',
          value: '105070',
        },
        {
          label: 'Household',
          value: '49100',
          isSliced: '1',
        },
      ],
    },
  }).render();
});
