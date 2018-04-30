# FusionExport CLI

FusionExport is FusionCharts' all purpose Export product which works across all OS. It is primarily a CLI based system for easy exporting of charts, dashboards in multiple image and data formats (PNG, JPEG, SVG, PDF, CSV, XLS and HTML). FusionExport comes with language SDKs (NodeJS, Java, C#, PHP, Python and Golang) for easy integration and support across technologies.

Below are the major features of the product:

   1. Export charts as PNG, JPEG, SVG, PDF, CSV, XLS and HTML files.
   1. Export charts directly from backend without a browser.
   1. Multiple charts can be exported simultaneously with minimal configuration.
   1. Sharing, scheduling etc. can be done.
   1. Export dashboards using user defined template.
   1. Supports statistics logging of all chart exports in a private setup/central remote server.
   1. Save files to FTP or S3.
   1. Export from remote server.
   1. Easy configuration management.

## Prerequisites

You need to have `node >= 8.0.0` and `npm >= 5.0.0` installed in your system to install the CLI.

## Installation

### FusionExport Installation

Download **FusionExport** installer from [here](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/installation/install-fusionexport-desktop.html).

Primary functionalities those can be performed on the screen are:
  1. Service Start
  2. Service Stop
  3. Service Restart

Log various operation and view in the log panel.
View additional information like host, port and PID of the service.

Save and clear logs as per requirement.

### FusionExport CLI Installation

To install the CLI in your system run the following command:
```
npm i -g fusionexport-cli
```

## Usage
After installing, you should have access to `fusionexport` command. `fe` is an alias to `fusionexport`

```
fusionexport <options>
```

Or,

```
fe <options>
```


## Command Line Arguments

Option | Alias | Default |Type | Description
-------|-------|---------|-----|------------
--config | -e | fusioncharts_export.json | file, json | A JSON file that contains any or all of the CLI options.
--chart-config | -c | fusioncharts_chart.json | file, json | A JSON or JS file that contains an array of json objects or just an object, which can be passed to the chart constructor for rendering the chart. <br><br> Note: If it's a JS file, the object should be exported. <br><br> It can also take multiple files, directory path or glob pattern in a space separated format. For files containing single chart config, it will create a single exported file. For files containing multiple chart config, it will create a directory named after the respective filename that will contain the individual exported file.
--chart-config-options | -O | {} | json | JSON object that provides an option to override the chart configuration that has been passed through the chart-config option. <br><br> In case of multiple charts, all the charts will be affected.
--input-file | -i | chart.svg | file | SVG file that needs to be converted. <br><br> It is ignored if chart-config is already provided. <br><br> The path will be taken into account if it is provided.
--output-file | -o | | string | Output files that need to be generated. A template can also be given that will be resolved for multiple files. <br><br> The zipped output will always be named fusioncharts_export.zip. <br><br> If an extension is provided with the filename the output type will be inferred from that. <br><br> It can also take a directory path; in that case, it should end with a path separator respective to the os.
--output-file-definition | -F | | file | JS or JSON file that contains methods and arrays to be used for naming the output files.
--output-as-zip | -z | | bool | Exports the output files either as individual files or as a zip.
--type | -t | png | ext | Specifies the output file type. This will override any extension provided in the output-file option.
--width | -W | 600 | value | Specifies the chart width.
--height | -H | 400 | value | Specifies the chart height.
--callbacks | -b | fusioncharts_export_callbacks.js | file | JS file that provides an option for binding custom methods to events fired by the FusionCharts library.
--template | -T | template.html | file | JS file that provides an option for binding custom methods to events fired by the FusionCharts library.
--resources | -r | resources.json | file, json | JSON file that contains all the resources that will be injected into the template while rendering charts.
--library-path | -L | | path | JSON file that contains all the resources that will be injected into the template while rendering charts.
--dashboard-logo | -G | | file | Logo path (only for dashboard export)
--dashboard-heading | -D | | string | Heading of the exported dashboard.
--dashboard-subheading | -B | | string | Subheading of the exported dashboard.
--async-capture | -a | false | bool | Enable async-capture.
--async-capture-timeout | -m | 6000 | integer | Maximum time that system will wait for async-capture event to trigger.
--log-dest | -d | | path | Enables logging and sets the log destination.
--log-file | -f | fusioncharts_export.log | file | Log file.
--log-level | -l | 2 | level | Log level. <br><br> 0: error, 1: warn, 2: info, 3: verbose, 4: debug, 5: silly
--remote-export-enabled | -R | false | bool | If enabled, the CLI will use the export server API to export the images. <br><br> By default this option is set to false in which case it won’t export using export server.
--export-url | -u | export.api3.fusioncharts.com | url | Export server url.

## API Reference

You can find the full reference [here](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/cli-reference.html).

## Examples

### Export a simple column chart using a single configuration in PNG format.
`column_chart_config.json` contains a sample fusioncharts column chart config
**column_chart_config.json**
```json
[
   {
      "type": "column2d",
      "renderAt": "chart-container",
      "width": "550",
      "height": "350",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "data": [
            {
               "label": "Mon",
               "value": "15123"
            },
            {
               "label": "Tue",
               "value": "14233"
            },
            {
               "label": "Wed",
               "value": "25507"
            }
         ]
      }
   }
]
```

```bash
$ fe -c column_chart_config.json
```

_This will export the column chart in PNG format in the current working directory._

### Export multiple charts in PDF format.

**multiple_charts_config.json**
```json
[
   {
      "type": "pie2d",
      "renderAt": "pie_chart",
      "width": "500",
      "height": "400",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Mon"
                  },
                  {
                     "label": "Tue"
                  },
                  {
                     "label": "Wed"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Los Angeles Topanga",
               "data": [
                  {
                     "value": "13400"
                  },
                  {
                     "value": "12800"
                  },
                  {
                     "value": "22800"
                  }
               ]
            }
         ]
      }
   },
   {
      "type": "mscolumn2d",
      "renderAt": "column_chart",
      "width": "450",
      "height": "420",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Bakersfield Central"
                  },
                  {
                     "label": "Garden Groove harbour"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Food Products",
               "data": [
                  {
                     "value": "17000"
                  },
                  {
                     "value": "19500"
                  }
               ]
            },
            {
               "seriesname": "Non-Food Products",
               "data": [
                  {
                     "value": "25400"
                  },
                  {
                     "value": "29800"
                  }
               ]
            }
         ]
      }
   }
]
```

```bash
$ fe -c multiple_charts_config.json -t pdf -o ./exported-charts/
```

### Export entire Dashboard using CLI in PDF format.

To export dashboards using CLI, provide a template file with the layout and supporting static resources (JS, CSS, images, fonts).

The template must contain placeholder elements (preferably divs) for the charts. The chart configuration array must contain the charts with the `renderAt` attributes that matches the id of the elements stated above.

The resources option is optional and only needed when `remote-export-enabled` is `true`. Most resources that are stated in the template in link, script or image tags are found intelligently. If any additional fonts, links present in css or dynamic links in JS is present one has to specify them in resources option.

The format of the resources option is as follows:

```json
{
    "images": [
        "filename.jpg",
        "img/cat.png"
    ],
    "stylesheets": [
        "",
        ""
    ],
    "javascripts": [
        "",
        ""
    ],
    "fonts": [
        "",
        ""
    ]
}
```

**template.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chart</title>
  </head>
  <body>
    <div id="pie_chart"></div>
    <div id="column_chart"></div>
  </body>
</html>
```

**multiple_charts_config.json**
```json
[
   {
      "type": "pie2d",
      "renderAt": "pie_chart",
      "width": "500",
      "height": "400",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Mon"
                  },
                  {
                     "label": "Tue"
                  },
                  {
                     "label": "Wed"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Los Angeles Topanga",
               "data": [
                  {
                     "value": "13400"
                  },
                  {
                     "value": "12800"
                  },
                  {
                     "value": "22800"
                  }
               ]
            }
         ]
      }
   },
   {
      "type": "mscolumn2d",
      "renderAt": "column_chart",
      "width": "450",
      "height": "420",
      "dataFormat": "json",
      "dataSource": {
         "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)"
         },
         "categories": [
            {
               "category": [
                  {
                     "label": "Bakersfield Central"
                  },
                  {
                     "label": "Garden Groove harbour"
                  }
               ]
            }
         ],
         "dataset": [
            {
               "seriesname": "Food Products",
               "data": [
                  {
                     "value": "17000"
                  },
                  {
                     "value": "19500"
                  }
               ]
            },
            {
               "seriesname": "Non-Food Products",
               "data": [
                  {
                     "value": "25400"
                  },
                  {
                     "value": "29800"
                  }
               ]
            }
         ]
      }
   }
]
```

```bash
$ fe -c multiple_charts_config.json -T template.html -t PDF -o ./exported-dashboards/
```

### Output File Naming

The `output-file` option can take a template which is then resolved using ejs, so that the output filenames can be generated exactly as you wanted it to be.

There are 2 inbuilt functions and you can also provide custom functions in another JS file and pass it in the option `output-file-definition`

The 2 inbuilt functions are

1. `number(start, end, step)`: It increments a number from `start` to `end` with `step` as provided. `end` and `step` are optional.

2. `timestamp()`: It provides the current time is millisecond.

You can provide custom functions or arrays in definition file. Example:

```javascript
module.exports = {
  caption: (chartConfig, index) => {
    const caption = chartConfig.dataSource.chart.caption;
    return `${index}__${caption}`;
  },
  art: ['S1', 'S2', 'S3', 'S4'],
};
```

Functions will get 3 arguments, current chart config, index and array of all the chart configs.

Arrays will the iterated one by one and the last one will be repeated if more output files are generated.

Example filenames:

```shell
path/to/export--<%= number(1, 100) %>
# path/to/export--1.png

path/to/export--<%= number(2) %>__<%= caption() %>-<%= timestamp() %>
# path/to/export--2__Some Caption-23423438788.png
```

### Remote Export file saving in FTP & S3

Output files can be saved in **FTP** and **AWS S3** directly.

First you need to provide the credentials in the configuration file. FTP configs are in `config/ftp.json` and S3 configs are in `config/s3.json`.

In the `output-file` options, to upload through FTP specify the filename as
```
ftp:path/to/export--<%= number(1) %>
```
to upload files to S3 specify the filename as
```
s3:export--<%= number(1) %>
```

## Testing

Some preconfigured test configs are present in the `uat` folder. You can pass those export configuration files to the `-e` or `--config` options to run a quick test, or take a look inside it to get an idea how options can be passed in different situations.

Some example commands for running a quick test are

```
fe -e uat/fusioncharts_export.json
fe -e uat/fusioncharts_export_svg.json
fe -e uat/fusioncharts_export_tmpl.json
fe -e uat/fusioncharts_export_20charts.json
fe -e uat/fusioncharts_export_50charts.json
```
