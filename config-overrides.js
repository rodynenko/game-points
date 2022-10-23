const path = require('node:path')
const { addWebpackResolve, addBabelPlugins, override } = require('customize-cra')

module.exports = override(
  addBabelPlugins(['@emotion']),
  addWebpackResolve({
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  })
)