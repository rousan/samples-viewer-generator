FusionCharts.ready(() => {
  const salesChart = new FusionCharts({
    type: 'area2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: { /* See data tab */ },
  }).render();
});
