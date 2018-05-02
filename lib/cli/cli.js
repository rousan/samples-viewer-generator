#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var run = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(configFile, outputPath) {
    var config, configFileDir, templatePath;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_.isUndefined(configFile)) {
              _context.next = 2;
              break;
            }

            throw new Error('config file is not specified');

          case 2:
            if (_.isUndefined(outputPath)) {
              outputPath = 'samples-viewer';
            }

            configFile = path.resolve(configFile);
            outputPath = path.resolve(outputPath);

            if (fs.pathExistsSync(configFile)) {
              _context.next = 7;
              break;
            }

            throw new Error(`config file does not exist: ${configFile}`);

          case 7:
            _context.next = 9;
            return fs.ensureDir(outputPath);

          case 9:
            _context.next = 11;
            return fs.readJson(configFile);

          case 11:
            config = _context.sent;
            configFileDir = path.dirname(configFile);
            templatePath = path.resolve(__dirname, '..', '..', 'template');
            _context.next = 16;
            return boilerplate.generateApp(config, configFileDir, outputPath, templatePath);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function run(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var program = require('commander');
var chalk = require('chalk');
var fs = require('fs-extra');
var _ = require('lodash');
var logger = require('./logger');
var pkg = require('../../package.json');
var boilerplate = require('./boilerplate');

function onError(err) {
  var errMsg = err instanceof Error ? err.message : String(err);
  logger.log(`\n   ${chalk.red('error')}: ${errMsg}\n`);
}

program.version(pkg.version, '-v, --version').option('-c, --config <path>', 'config file path').option('-o, --out <path>', 'output path where web app files will be generated.').parse(process.argv);

var configFile = program.config,
    outputPath = program.out;


run(configFile, outputPath).catch(onError);