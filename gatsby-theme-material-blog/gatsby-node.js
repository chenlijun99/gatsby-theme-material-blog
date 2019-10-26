/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-blog-core`);

const hookModules = require(`./gatsby-node/`);
const withDefaultsOptions = require(`./src/utils/withDefaultOptions`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();
  const { contentPath, assetPath } = withDefaultsOptions(themeOptions);

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const callLifecycleHookForEachModule = async (lifecycleHookName, ...args) => {
  for (const module in hookModules) {
    if (hookModules[module][lifecycleHookName]) {
      await hookModules[module][lifecycleHookName](...args);
    }
  }
};

exports.createSchemaCustomization = async (...args) => {
  await callLifecycleHookForEachModule("createSchemaCustomization", ...args);
};

exports.sourceNodes = async (...args) => {
  await callLifecycleHookForEachModule("sourceNodes", ...args);
};

exports.onCreateNode = async (...args) => {
  await callLifecycleHookForEachModule("onCreateNode", ...args);
};

exports.createPages = async (...args) => {
  await callLifecycleHookForEachModule("createPages", ...args);
};
