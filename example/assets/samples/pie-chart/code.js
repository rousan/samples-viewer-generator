FusionCharts.ready(() => {
  const revenueChart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: { /* See data tab */ },
  }).render();
});
