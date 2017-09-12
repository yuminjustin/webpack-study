// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

function configMaker(flag, port, proxyTable) {   // 针对不同的模板
  return {
    build: {
      env: require('./prod.env'),
      index: path.resolve(__dirname, '../dist/' + flag + '/login.html'),
      assetsRoot: path.resolve(__dirname, '../dist/' + flag + '/'),
      assetsSubDirectory: 'static',
      assetsPublicPath: './',
      productionSourceMap: true,
      productionGzip: false,
      productionGzipExtensions: [
        'js', 'css'
      ],
      bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
      env: require('./dev.env'),
      port: port,
      autoOpenBrowser: true,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: proxyTable || {},   // 代理都可以单独设置
      cssSourceMap: false
    },
    options: {
      title: 'Hi there'  // 页面使用
    }
  }
}

module.exports = {
  mod1: configMaker('mod1', 8333),   // 不同模板 使用不同端口 隔离开发
  mod2: configMaker('mod2', 8334)
  main: {  // 主要配置 给 build文件夹中的文件使用
    build: {
      productionSourceMap: true,
      assetsSubDirectory: 'static'
    },
    dev: {
      cssSourceMap: false,
      assetsSubDirectory: 'static'
    }
  }
}
