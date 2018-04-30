# FusionExport Core

The `FusionExport Core` is the heart of whole FusionExport system, it has the main backend logic.

The main responsibilities:

    * handles all the processes, boots up the `headless` browser.
    * builds the HTML templates then renders the chart.
    * prepares the exported file for `single-chart`, `multi-chart`, `dashboard` and generates output filenames.


## Installation

Clone it from `Bitbucket` and install the dependencies as follows:

```bash
$ git clone https://bitbucket.org/fusioncharts/fusionexport-core.git
$ cd fusionexport-core
$ git checkout develop
$ npm install
```

## Usage

Simply require this module in your project as follows:

```javascript
const ExportManager = require('fusionexport-core');
```

`ExportManager` is a class and to instantiate, you need to pass the number of workers:

```javascript
const exportManager = new ExportManager({
  workerCount: 2 // The default value is 1
});
```

Before start exporting, you need to boot the system:

```javascript
exportManager.boot();
```

Then call the `export` method with chart configs to export the chart:

```javascript
const options = {
    chartConfig: [/* Chart Configs with data */],
    exportAsZip: true
};
exportManager.export(options)
```

The supported chart configs are followings:

    * `chartConfig` <object> Array of chart config objects.

    * `template` <string> Path to dashboard template.

    * `resources` <object> Nested objects containing images, stylesheets, js and images needed for the template.

    * `callbacks` <string> Path to callback file.

    * `libraryDirectoryPath` <string> Path to FusionCharts library directory.

    * `dashboardLogo` <string> Path to the logo file.

    * `dashboardHeading` <string> Dashboard heading.

    * `dashboardSubheading` <string> Dashboard subheading.

    * `type` <string> Output file type.

    * `exportFile` <string> Output filename template with path.

    * `exportAsZip` <boolean> Weather to export as zip or unzipped.

    * `outputFileDefinition` <object> Object containing methods and array to define the output template.


# An Example

```javascript
const ExportManager = require('fusionexport-core');
const demoChartConf = require('./data/chartConfig');

const exportManager = new ExportManager();

const options = {
    chartConfig: [demoChartConf],
    exportAsZip: true
};

exportManager.export(options).then(images => {
	console.log(images);
}).catch(e => {
    console.error(`Error ${e}`);
    process.exit(1);
});
```
