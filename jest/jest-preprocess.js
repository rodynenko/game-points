const babelOptions = {
  plugins: ['@emotion'],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)