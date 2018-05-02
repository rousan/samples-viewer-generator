#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const _ = require('lodash');
const logger = require('./logger');
const pkg = require('../../package.json');
const boilerplate = require('./boilerplate');

async function run(configFile, outputPath) {
  if (_.isUndefined(configFile)) {
    throw new Error('config file is not specified');
  }
  if (_.isUndefined(outputPath)) {
    outputPath = 'samples-viewer';
  }

  configFile = path.resolve(configFile);
  outputPath = path.resolve(outputPath);

  if (!fs.pathExistsSync(configFile)) {
    throw new Error(`config file does not exist: ${configFile}`);
  }
  await fs.ensureDir(outputPath);

  const config = await fs.readJson(configFile);
  const configFileDir = path.dirname(configFile);
  const templatePath = path.resolve(__dirname, '..', '..', 'template');

  await boilerplate.generateApp(config, configFileDir, outputPath, templatePath);
}

function onError(err) {
  const errMsg = err instanceof Error ? err.message : String(err);
  logger.log(`\n   ${chalk.red('error')}: ${errMsg}\n`);
}

program
  .version(pkg.version, '-v, --version')
  .option('-c, --config <path>', 'config file path')
  .option('-o, --out <path>', 'output path where web app files will be generated.')
  .parse(process.argv);

const { config: configFile, out: outputPath } = program;

run(configFile, outputPath)
  .catch(onError);
