[![Build Status](https://travis-ci.org/rousan/samples-viewer-generator.svg?branch=develop)](https://travis-ci.org/rousan/samples-viewer-generator)
[![NPM version](https://img.shields.io/npm/v/samples-viewer-generator.svg)](https://www.npmjs.com/package/samples-viewer-generator)
[![Required Node version](https://img.shields.io/node/v/samples-viewer-generator.svg)](https://www.npmjs.com/package/samples-viewer-generator)
[![NPM total downloads](https://img.shields.io/npm/dt/samples-viewer-generator.svg)](https://www.npmjs.com/package/samples-viewer-generator)
[![Contributors](https://img.shields.io/github/contributors/rousan/samples-viewer-generator.svg)](https://github.com/rousan/samples-viewer-generator/graphs/contributors)
[![License](https://img.shields.io/github/license/rousan/samples-viewer-generator.svg)](https://github.com/rousan/samples-viewer-generator/blob/master/LICENSE)

# samples-viewer-generator

A CLI utility to generate an web app structure as `samples viewer` quickly for `presentation` purpose. It
can be used to present your existing data visualization samples in professional way.

> An utility tool to generate data viz samples viewer web app quickly.

## Demo

[Here](http://rousan.io/samples-viewer-generator/) is the demo.

## Requirements

`node` >= `v4.0.0`

**Note**: If `node` and `npm` are not installed, Install them from [here](https://nodejs.org/en/download/).

## Installation

Install this tool using `npm`:

```bash
$ npm install -g samples-viewer-generator
```

It installs two binaries: `samples-viewer-generator` and `svgen` to your system path.

## Usage

At first you need to create a `config` file in `JSON` format consisting of sample details,
`favicon`, `title` for web app etc. as follows:

The `config.json` file:

```json
{
  "site": {
    "title": "<site title>",
    "heading": "<site heading>",
    "logo": "<site logo> [optional]",
    "favicon": "<site favicon> [optional]",
    "customCSS": "<custom css file to override the existing style> [optional]"
  },
  "samples": [
    {
      "name": "<name of the sample, it should be unique across all samples>",
      "desc": "<a short description of sample>",
      "icon": "<sample icon in .png, .jpeg, or .svg format> [optional]",
      "chart": "<a folder consisting of necessary files (e.g. index.html, js codes) to render the chart on an iframe>",
      "html": "<html code for sample> [optional]",
      "js": "<javascript code for sample> [optional]",
      "data": "<data for sample> [optional]",
      "notes": "<notes for samples in markdown format, supported github flavoured markdown(gfm)> [optional]"
    }
  ]
}
```

See [example](https://github.com/rousan/samples-viewer-generator/tree/master/example) folder for more info.

Then you need to run the cli command `svgen` (alias of `samples-viewer-generator`) as follows:

```bash
$ svgen -c config.json -o my-samples-viewer

   create : site logo
   create : site favicon
   create : custom CSS
   create : index.html
   create : CSS assets
   create : JavaScript assets
   create : image assets
   create : sample Simple column chart
   create : sample Area 2D chart with gradient
   create : sample Pie chart with legend
   create : sample Zoom line dual Y axis chart
   create : sample Simple World map
   create : site config

```

Voila! Your samples viewer is generated within seconds.

**Note**: You should open the generated web app via any local server or remote one. It wouldn't work, if
you open through
 `file://` protocol.

## Contributing

Your PRs and stars are always welcome.

Checkout the [CONTRIBUTING](https://github.com/rousan/samples-viewer-generator/blob/master/CONTRIBUTING.md) guides.