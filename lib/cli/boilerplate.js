'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var outSourceFile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(srcFile, outRelPath, outputDir) {
    var outAbsPath;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            outAbsPath = path.resolve(outputDir, outRelPath);
            _context.next = 3;
            return fs.copy(srcFile, outAbsPath);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function outSourceFile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var copyTemplate = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(tmplRelPath, templateDir, outRelPath, outputDir) {
    var tmplAbsPath, outAbsPath;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tmplAbsPath = path.resolve(templateDir, tmplRelPath);
            outAbsPath = path.resolve(outputDir, outRelPath);
            _context2.next = 4;
            return fs.copy(tmplAbsPath, outAbsPath);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function copyTemplate(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var generateSiteAssets = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(outputConfig, config, resolvePath, outputDir, templatePath) {
    var _config$site, title, heading, logo, favicon, customCSS, logoPath, faviconPath, customCSSPath, indexTmplData, indexTmplPath, indexTmpl, html, indexOutPath;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (config.site) {
              _context3.next = 2;
              break;
            }

            throw new Error('site config not found');

          case 2:
            _config$site = config.site, title = _config$site.title, heading = _config$site.heading, logo = _config$site.logo, favicon = _config$site.favicon, customCSS = _config$site.customCSS;


            outputConfig.heading = heading;

            if (!logo) {
              _context3.next = 10;
              break;
            }

            logger.log(`   ${chalk.green('create')} : site logo\n`);
            logoPath = ensureSourceFile(logo, resolvePath);
            _context3.next = 9;
            return outSourceFile(logoPath, path.join('images', path.basename(logoPath)), outputDir);

          case 9:
            outputConfig.logo = `images/${path.basename(logoPath)}`;

          case 10:
            if (!favicon) {
              _context3.next = 15;
              break;
            }

            logger.log(`   ${chalk.green('create')} : site favicon\n`);
            faviconPath = ensureSourceFile(favicon, resolvePath);
            _context3.next = 15;
            return outSourceFile(faviconPath, path.basename(faviconPath), outputDir);

          case 15:
            if (!customCSS) {
              _context3.next = 20;
              break;
            }

            logger.log(`   ${chalk.green('create')} : custom CSS\n`);
            customCSSPath = ensureSourceFile(customCSS, resolvePath);
            _context3.next = 20;
            return outSourceFile(customCSSPath, path.join('css', 'custom.css'), outputDir);

          case 20:

            logger.log(`   ${chalk.green('create')} : index.html\n`);
            indexTmplData = {
              title,
              favicon: favicon ? path.basename(path.resolve(resolvePath, favicon)) : undefined,
              customCSS: true
            };
            indexTmplPath = path.resolve(templatePath, 'index.html');
            _context3.next = 25;
            return fs.readFile(indexTmplPath, { encoding: 'utf8' });

          case 25:
            indexTmpl = _context3.sent;
            html = ejs.render(indexTmpl, { site: indexTmplData });
            indexOutPath = path.resolve(outputDir, 'index.html');
            _context3.next = 30;
            return fs.writeFile(indexOutPath, html);

          case 30:

            logger.log(`   ${chalk.green('create')} : CSS assets\n`);
            _context3.next = 33;
            return copyTemplate('css', templatePath, 'css', outputDir);

          case 33:

            logger.log(`   ${chalk.green('create')} : JavaScript assets\n`);
            _context3.next = 36;
            return copyTemplate('js', templatePath, 'js', outputDir);

          case 36:

            logger.log(`   ${chalk.green('create')} : image assets\n`);
            _context3.next = 39;
            return copyTemplate('images', templatePath, 'images', outputDir);

          case 39:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function generateSiteAssets(_x8, _x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

var generateSamples = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(outputConfig, config, resolvePath, outputDir) {
    var sLn, i, sample, sampleId, outSample, iconPath, chartPath, htmlPath, jsPath, dataPath, notesPath;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!config.samples || !config.samples.length)) {
              _context4.next = 2;
              break;
            }

            throw new Error('no samples found');

          case 2:

            outputConfig.samples = [];
            sLn = config.samples.length;
            i = 0;

          case 5:
            if (!(i < sLn)) {
              _context4.next = 46;
              break;
            }

            sample = config.samples[i];
            sampleId = generateSampleId(sample);
            outSample = {};


            logger.log(`   ${chalk.green('create')} : sample ${sample.name}\n`);
            outSample.name = sample.name;
            outSample.desc = sample.desc;

            if (!sample.icon) {
              _context4.next = 17;
              break;
            }

            iconPath = ensureSourceFile(sample.icon, resolvePath);
            _context4.next = 16;
            return outSourceFile(iconPath, path.join('samples', sampleId, path.basename(iconPath)), outputDir);

          case 16:
            outSample.icon = `samples/${sampleId}/${path.basename(iconPath)}`;

          case 17:
            if (!sample.chart) {
              _context4.next = 22;
              break;
            }

            chartPath = ensureSourceFile(sample.chart, resolvePath);
            _context4.next = 21;
            return outSourceFile(chartPath, path.join('samples', sampleId, 'chart'), outputDir);

          case 21:
            outSample.chart = `samples/${sampleId}/chart/index.html`;

          case 22:
            if (!sample.html) {
              _context4.next = 27;
              break;
            }

            htmlPath = ensureSourceFile(sample.html, resolvePath);
            _context4.next = 26;
            return outSourceFile(htmlPath, path.join('samples', sampleId, 'code.html'), outputDir);

          case 26:
            outSample.html = `samples/${sampleId}/code.html`;

          case 27:
            if (!sample.js) {
              _context4.next = 32;
              break;
            }

            jsPath = ensureSourceFile(sample.js, resolvePath);
            _context4.next = 31;
            return outSourceFile(jsPath, path.join('samples', sampleId, 'code.js'), outputDir);

          case 31:
            outSample.js = `samples/${sampleId}/code.js`;

          case 32:
            if (!sample.data) {
              _context4.next = 37;
              break;
            }

            dataPath = ensureSourceFile(sample.data, resolvePath);
            _context4.next = 36;
            return outSourceFile(dataPath, path.join('samples', sampleId, path.basename(dataPath)), outputDir);

          case 36:
            outSample.data = `samples/${sampleId}/${path.basename(dataPath)}`;

          case 37:
            if (!sample.notes) {
              _context4.next = 42;
              break;
            }

            notesPath = ensureSourceFile(sample.notes, resolvePath);
            _context4.next = 41;
            return outSourceFile(notesPath, path.join('samples', sampleId, path.basename(notesPath)), outputDir);

          case 41:
            outSample.notes = `samples/${sampleId}/${path.basename(notesPath)}`;

          case 42:

            outputConfig.samples.push(outSample);

          case 43:
            i += 1;
            _context4.next = 5;
            break;

          case 46:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function generateSamples(_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();

var generateApp = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(config, resolvePath, outputDir, templatePath) {
    var outputConfig;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            outputConfig = {};


            logger.log('\n');

            _context5.next = 4;
            return generateSiteAssets(outputConfig, config, resolvePath, outputDir, templatePath);

          case 4:
            _context5.next = 6;
            return generateSamples(outputConfig, config, resolvePath, outputDir);

          case 6:

            logger.log(`   ${chalk.green('create')} : site config\n`);
            _context5.next = 9;
            return fs.writeJson(path.resolve(outputDir, 'config.json'), outputConfig, { spaces: 2 });

          case 9:

            logger.log('\n   web app:');
            logger.log(`\n     $ cd ${outputDir}`);
            logger.log('\n');

          case 12:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function generateApp(_x17, _x18, _x19, _x20) {
    return _ref5.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var fs = require('fs-extra');
var ejs = require('ejs');
var chalk = require('chalk');
var logger = require('./logger');

function generateSampleId(sample) {
  return sample.name.replace(/\s+/g, '-').toLowerCase();
}

function ensureSourceFile(srcFile, resolvePath) {
  srcFile = String(srcFile);
  var srcFileAbsPath = path.resolve(resolvePath, srcFile);
  if (!fs.pathExistsSync(srcFileAbsPath)) {
    throw new Error(`file doesn't exist: ${srcFileAbsPath}`);
  }
  return srcFileAbsPath;
}

module.exports = {
  generateApp
};