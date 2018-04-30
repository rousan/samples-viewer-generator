# FusionExport Installer GUI

The `FusionExport Installer GUI` built with `electron` and `electron-builder` helps to install the `FusionExport Service` to the target platform e.g. `Windows`, `Linux`, `OS X`. This GUI version of `FusionExport Service` provides an easy to use interface to manage the Export Service.

## Installation

Clone it from `Bitbucket` as follows (It requires `yarn` to install dependencies):

```bash
$ git clone https://bitbucket.org/fusioncharts/fusionexport-installer-gui.git
$ cd fusionexport-installer-gui
$ git submodule update --init
$ git submodule update --recursive
$ git checkout develop
$ cd fusionexport-service && git checkout develop
$ cd fusionexport-service/fusionexport-core && git checkout develop
$ yarn
```

Start the application:

```bash
$ yarn start
```

Build application:
```
yarn dist
```

It will create a `DMG` for Mac, `EXE` for Windows and `DEB` for Linux.

## Usage

Run the generated executable. You will get a GUI like this:

![GUI](https://user-images.githubusercontent.com/12836274/31940447-d507e614-b8db-11e7-9ef2-4bcb3d5e6a33.png "GUI")

Here you can

  * Start/Stop the service with `Start/Stop` toggle button or use the `Restart` button to restart the service. Start/Stop the service with `Start/Stop` toggle button or use the `Restart` button to restart the service. Start/Stop the service with `Start/Stop` toggle button or use the `Restart` button to restart the service.
  * View the logs in the below tab panel and some additional information like host, port and PID of the service.
  * Save the current log, and clear the log.

## In-Depth Explanation

Here is the respective responsibility of every source files:

  * `index.html`: the layout for the GUI interface.
  * `rendered.js`: communicates with the backend of the GUI and handles the different UI aspects and reactions of UI components.
  * `assets`: contains the css, js, font and image files for the UI.
  * `controller.js`: controls all the UI elements of the UI.
  * `modal.js`: controls all type of modal in the UI.
  * `spinner.js`: controls the spinners in the UI.
  * `main.js`: the backend of the UI and it controls the `fusionexport-service` module and retrieves and sends information from and into it. It also monitors an controls the different states of the app, print logs, information and button states.
