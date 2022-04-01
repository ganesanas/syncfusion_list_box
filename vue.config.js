const path = require('path');
module.exports = {
  devServer: {
    host: 'localhost'
  },
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, 'node_modules/@syncfusion')]
      }
    }
  }
}
