FusionCharts.ready(() => {
  const visitChart = new FusionCharts({
    type: 'zoomlinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: { /* See data tab */ },
  }).render();
});
