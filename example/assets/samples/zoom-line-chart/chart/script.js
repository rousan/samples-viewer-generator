FusionCharts.ready(() => {
  const visitChart = new FusionCharts({
    type: 'zoomlinedy',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Impact of weather on sales',
        subcaption: 'Precipitation factor on each day of the previous calendar year',
        pYAxisName: 'Precipitation (mm)',
        sYAxisName: 'Sales ($)',
        compactDataMode: '1',
        dataSeparator: '|',
        sFormatNumberScale: '1',
        pixelsPerPoint: '0',
        lineThickness: '1.5',
        pYAxisMaxValue: '100',
        pYAxisMinValue: '0',
        sYAxisMaxValue: '23000',
        sYAxisMinValue: '7500',
        pyaxisnamefontcolor: '0075c2',
        theme: 'zune',
      },
      categories: [{
        category: 'Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31',
      }],
      dataset: [{
        seriesname: 'Precipitation Rate',
        color: '0075c2',
        data: '0.00|0.00|13.97|2.54|2.79|0.00|0.00|1.27|0.00|0.00|3.05|0.76|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.25|0.00|0.00|0.00|0.00|1.52|1.02|0.00|0.76|0.00|0.00|3.30|3.05|0.00|1.27|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|1.52|0.25|0.00|0.00|0.25|0.00|2.54|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|3.81|1.02|3.30|0.00|0.25|0.00|1.02|0.00|0.00|0.00|6.86|0.00|0.00|0.00|1.78|1.02|2.03|24.13|0.00|0.00|0.00|3.56|0.00|0.00|8.64|0.00|0.00|10.67|0.00|0.00|0.00|0.00|7.37|8.64|0.00|0.00|0.00|0.00|0.00|0.00|0.00|5.08|0.00|20.07|0.00|0.00|7.11|9.65|4.06|3.56|0.00|0.00|3.30|0.76|0.00|0.00|0.00|0.00|0.51|0.00|0.00|0.00|11.18|1.52|10.67|1.52|0.00|4.57|20.07|1.27|0.00|0.00|0.00|0.00|0.00|0.00|11.18|2.54|0.00|2.29|5.08|4.32|4.83|24.89|6.10|0.00|8.38|12.19|0.00|5.59|0.00|1.02|0.00|0.00|4.06|17.78|0.00|0.00|0.76|0.00|0.00|0.00|0.00|0.00|0.00|14.22|6.35|0.00|1.02|0.00|0.76|1.52|16.76|0.00|0.00|13.21|0.76|0.76|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|1.78|0.00|0.00|0.00|26.92|0.00|0.00|0.00|0.00|0.00|0.00|0.00|6.35|0.00|0.00|0.00|4.32|4.32|0.00|10.41|23.88|0.00|0.00|0.00|0.00|2.29|0.00|0.00|0.00|0.00|0.00|9.40|0.00|0.00|0.00|0.00|0.00|0.00|0.51|0.00|0.00|23.11|0.00|5.08|5.84|4.06|0.00|0.00|0.00|0.00|6.60|80.01|1.02|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|1.02|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|2.29|0.00|0.00|1.02|3.05|0.00|0.00|9.65|4.06|0.00|0.00|19.30|0.00|0.00|0.00|0.00|0.00|11.94|0.00|0.00|0.00|0.00|18.54|0.51|0.00|0.00|0.00|0.76|11.18|6.60|0.00|3.05|13.97|0.00|0.00|0.00|0.51|13.72|20.57|0.00|0.00|3.81|3.81|3.30|0.00|0.00|0.0|0.00|0.00|0.00|0.00|0.00|0.00|0.00|19.81|9.40|0.00|2.29|0.00|0.00|0.00|0.76|18.29|0.25|21.34|0.00|0.00|6.10|4.06|46.23|0.00|1.52|0.00',
      }, {
        seriesname: 'Retail Sales',
        color: 'ff0000',
        parentYAxis: 'S',
        data: '17270|17290|15823|17116|17301|17740|17450|17303|17370|17390|17165|17484|17620|17340|17270|17300|17230|17170|17370|17355|18170|17090|17070|17000|16918|17268|17400|17124|17270|17300|16980|17095|17600|17543|17450|17400|17320|17270|17370|17720|17810|17420|17340|17170|17470|17410|17490|17500|17130|17190|17100|16920|17020|17280|17310|16678|16785|16870|16880|16425|16430|16526|16830|16430|16390|16360|16310|16480|16560|16740|16450|16370|16340|16390|16310|16450|16480|16310|16190|16260|16170|15729|16118|15940|16220|16175|16230|16138|16250|16400|16720|15984|16690|16600|16650|16552|16688|16497|14177|16620|16580|16650|16414|16830|16580|15706|16590|16600|15563|16670|16740|16620|16590|15833|15726|16610|16650|16700|16540|16590|17150|16530|16562|16950|14923|16980|17330|16219|15925|16454|16454|16790|17060|16910|16874|16870|16840|16890|16810|16899|16980|16810|16690|15642|16518|15543|16568|16770|16243|14713|16673|16400|16370|16400|16510|16490|16320|15152|15916|16160|16011|15392|15438|15257|13281|15080|15620|14832|14501|15770|15051|15570|15488|15600|15580|15264|13922|15590|15540|15544|15610|15570|15800|15870|15770|15760|14368|15185|15830|15898|16090|15864|15838|14344|16090|16150|14919|16214|16124|16110|16090|16150|16100|16250|16310|16190|16180|16220|16140|16002|16220|16250|16100|14428|17000|16940|16900|17000|17020|16520|16540|15805|16470|16630|16770|16368|16068|16470|15259|13832|16210|16220|16250|16150|15861|16100|16070|16020|16100|16200|15060|15940|16220|16170|16190|16100|16150|16179|16290|16200|13779|16120|15572|15566|15864|16330|16080|16070|16090|15440|8129|16068|16240|16120|16090|16070|16090|16110|16150|16200|16040|16090|16110|16280|16370|16388|16570|16450|16470|16560|16680|16770|16890|17000|16900|16860|16940|16980|17010|17250|17310|17110|16791|17090|16990|16838|16815|17210|17020|15975|16464|16890|16970|14640|16350|16330|16370|16470|16490|15486|16740|16520|16590|16640|14746|16589|16800|16890|16800|16734|15672|16200|16840|16595|15593|16900|16910|16880|16789|15448|14833|17000|16940|17009|17099|16980|17270|17290|17220|17370|17580|17740|17450|17430|17370|17390|15489|16620|17620|17111|17270|17300|17230|17094|15541|17355|15036|17090|17070|16390|16664|17577|17220|17048|16600',
      }, {
        seriesname: 'Online Sales',
        color: '1aaf5d',
        parentYAxis: 'S',
        data: '21270|21290|21220|21370|21580|21740|21450|21430|21370|21390|21470|21560|21620|21340|21270|21300|21230|21170|21370|21380|22170|21090|21070|21000|21070|21370|21400|21200|21270|21300|21310|21400|21600|21670|21450|21400|21320|21270|21370|21720|21810|21420|21340|21170|21470|21410|21490|21500|21130|21190|21100|20920|21020|21280|21310|20830|20810|20870|20880|20450|20430|20780|20830|20430|20390|20360|20310|20480|20560|20740|20450|20370|20340|20390|20310|20450|20480|20310|20190|20260|20170|20110|20220|20270|20220|20200|20230|20240|20250|20400|20720|20670|20690|20600|20650|20730|20790|20700|20590|20620|20580|20650|20770|20830|20580|20570|20590|20600|20630|20670|20740|20620|20590|20570|20590|20610|20650|20700|20540|20590|21150|20530|21070|20950|20930|20980|21330|20930|20890|20860|20810|20790|21060|21240|20950|20870|20840|20890|20810|20950|20980|20810|20690|20760|20670|20610|20720|20770|20700|20720|20800|20400|20370|20400|20510|20490|20320|20270|20170|20160|20240|19900|19870|19740|19770|19690|19620|19670|19720|19770|19610|19570|19590|19600|19580|19670|19700|19590|19540|19620|19610|19570|19800|19870|19770|19760|19790|19820|19830|20000|20090|19940|19990|20020|20090|20150|20240|20290|20200|20110|20090|20150|20100|20250|20310|20190|20180|20220|20140|20180|20220|20250|20100|21120|21000|20940|20900|21000|21020|20520|20540|20440|20470|20630|20770|20800|20500|20470|20300|20220|20210|20220|20250|20150|20090|20100|20070|20020|20100|20200|20000|19940|20220|20170|20190|20100|20150|20230|20290|20200|20090|20120|20080|20150|20270|20330|20080|20070|20090|20100|22730|20170|20240|20120|20090|20070|20090|20110|20150|20200|20040|20090|20110|20280|20370|20490|20570|20450|20470|20560|20680|20770|20890|21000|20900|20860|20940|20980|21010|21250|21310|21110|21020|21090|20990|20940|21120|21210|21020|20940|20870|20890|20970|20570|20350|20330|20370|20470|20490|20680|20740|20520|20590|20640|20600|20640|20800|20890|20800|20810|20790|20860|20840|20900|20990|20900|20910|20880|20840|20820|20890|21000|20940|21390|21480|21310|21270|21290|21220|21370|21580|21740|21450|21430|21370|21390|21470|21560|21620|21340|21270|21300|21230|21170|21370|21380|21170|21090|21070|21000|21070|22200|21220|21200|20140',
      }],
    },
  }).render();
});
