const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            .set('@api', path.resolve(__dirname, './src/api'))
            .set('@components', path.resolve(__dirname, './src/components'));
  }
}