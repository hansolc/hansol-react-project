const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
        plugin: CracoAlias,
        options: {
            source: "tsconfig",
            baseUrl: '.',
            tsConfigPath: "tsconfig.paths.json"
        }
    }
  ],
};