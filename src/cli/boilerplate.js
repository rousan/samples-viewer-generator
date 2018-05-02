const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const chalk = require('chalk');
const logger = require('./logger');

function generateSampleId(sample) {
  return sample.name.replace(/\s+/g, '-').toLowerCase();
}

function ensureSourceFile(srcFile, resolvePath) {
  srcFile = String(srcFile);
  const srcFileAbsPath = path.resolve(resolvePath, srcFile);
  if (!fs.pathExistsSync(srcFileAbsPath)) {
    throw new Error(`file doesn't exist: ${srcFileAbsPath}`);
  }
  return srcFileAbsPath;
}

async function outSourceFile(srcFile, outRelPath, outputDir) {
  const outAbsPath = path.resolve(outputDir, outRelPath);
  await fs.copy(srcFile, outAbsPath);
}

async function copyTemplate(tmplRelPath, templateDir, outRelPath, outputDir) {
  const tmplAbsPath = path.resolve(templateDir, tmplRelPath);
  const outAbsPath = path.resolve(outputDir, outRelPath);
  await fs.copy(tmplAbsPath, outAbsPath);
}

async function generateSiteAssets(outputConfig, config, resolvePath, outputDir, templatePath) {
  if (!config.site) {
    throw new Error('site config not found');
  }

  const {
    title,
    heading,
    logo,
    favicon,
    customCSS,
  } = config.site;

  outputConfig.heading = heading;

  if (logo) {
    logger.log(`   ${chalk.green('create')} : site logo\n`);
    const logoPath = ensureSourceFile(logo, resolvePath);
    await outSourceFile(logoPath, path.join('images', path.basename(logoPath)), outputDir);
    outputConfig.logo = `images/${path.basename(logoPath)}`;
  }

  if (favicon) {
    logger.log(`   ${chalk.green('create')} : site favicon\n`);
    const faviconPath = ensureSourceFile(favicon, resolvePath);
    await outSourceFile(faviconPath, path.basename(faviconPath), outputDir);
  }

  if (customCSS) {
    logger.log(`   ${chalk.green('create')} : custom CSS\n`);
    const customCSSPath = ensureSourceFile(customCSS, resolvePath);
    await outSourceFile(customCSSPath, path.join('css', 'custom.css'), outputDir);
  }

  logger.log(`   ${chalk.green('create')} : index.html\n`);
  const indexTmplData = {
    title,
    favicon: favicon ? path.basename(path.resolve(resolvePath, favicon)) : undefined,
    customCSS: true,
  };
  const indexTmplPath = path.resolve(templatePath, 'index.html');
  const indexTmpl = await fs.readFile(indexTmplPath, { encoding: 'utf8' });
  const html = ejs.render(indexTmpl, { site: indexTmplData });
  const indexOutPath = path.resolve(outputDir, 'index.html');
  await fs.writeFile(indexOutPath, html);

  logger.log(`   ${chalk.green('create')} : CSS assets\n`);
  await copyTemplate('css', templatePath, 'css', outputDir);

  logger.log(`   ${chalk.green('create')} : JavaScript assets\n`);
  await copyTemplate('js', templatePath, 'js', outputDir);

  logger.log(`   ${chalk.green('create')} : image assets\n`);
  await copyTemplate('images', templatePath, 'images', outputDir);
}

async function generateSamples(outputConfig, config, resolvePath, outputDir) {
  if (!config.samples || !config.samples.length) {
    throw new Error('no samples found');
  }

  outputConfig.samples = [];
  const sLn = config.samples.length;

  for (let i = 0; i < sLn; i += 1) {
    const sample = config.samples[i];
    const sampleId = generateSampleId(sample);
    const outSample = {};

    logger.log(`   ${chalk.green('create')} : sample ${sample.name}\n`);
    outSample.name = sample.name;
    outSample.desc = sample.desc;

    if (sample.icon) {
      const iconPath = ensureSourceFile(sample.icon, resolvePath);
      await outSourceFile(iconPath, path.join('samples', sampleId, path.basename(iconPath)), outputDir);
      outSample.icon = `samples/${sampleId}/${path.basename(iconPath)}`;
    }

    if (sample.chart) {
      const chartPath = ensureSourceFile(sample.chart, resolvePath);
      await outSourceFile(chartPath, path.join('samples', sampleId, 'chart'), outputDir);
      outSample.chart = `samples/${sampleId}/chart/index.html`;
    }

    if (sample.html) {
      const htmlPath = ensureSourceFile(sample.html, resolvePath);
      await outSourceFile(htmlPath, path.join('samples', sampleId, 'code.html'), outputDir);
      outSample.html = `samples/${sampleId}/code.html`;
    }

    if (sample.js) {
      const jsPath = ensureSourceFile(sample.js, resolvePath);
      await outSourceFile(jsPath, path.join('samples', sampleId, 'code.js'), outputDir);
      outSample.js = `samples/${sampleId}/code.js`;
    }

    if (sample.data) {
      const dataPath = ensureSourceFile(sample.data, resolvePath);
      await outSourceFile(dataPath, path.join('samples', sampleId, path.basename(dataPath)), outputDir);
      outSample.data = `samples/${sampleId}/${path.basename(dataPath)}`;
    }

    if (sample.notes) {
      const notesPath = ensureSourceFile(sample.notes, resolvePath);
      await outSourceFile(notesPath, path.join('samples', sampleId, path.basename(notesPath)), outputDir);
      outSample.notes = `samples/${sampleId}/${path.basename(notesPath)}`;
    }

    outputConfig.samples.push(outSample);
  }
}

async function generateApp(config, resolvePath, outputDir, templatePath) {
  const outputConfig = {};

  logger.log('\n');

  await generateSiteAssets(outputConfig, config, resolvePath, outputDir, templatePath);
  await generateSamples(outputConfig, config, resolvePath, outputDir);

  logger.log(`   ${chalk.green('create')} : site config\n`);
  await fs.writeJson(path.resolve(outputDir, 'config.json'), outputConfig, { spaces: 2 });

  logger.log('\n   web app:');
  logger.log(`\n     $ cd ${outputDir}`);
  logger.log('\n');
}

module.exports = {
  generateApp,
};
