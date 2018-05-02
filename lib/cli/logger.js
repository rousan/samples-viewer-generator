"use strict";

var logOutputStream = process.stdout;

function log(msg) {
  msg = String(msg);
  logOutputStream.write(msg);
}

module.exports = {
  log
};