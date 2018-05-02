FusionCharts.ready(() => {
  const populationMap = new FusionCharts({
    type: 'world',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: { /* See data tab */ },
  }).render();
});
