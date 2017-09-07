// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    // 入口html
    index: path.resolve(__dirname, '../../Public/index.html'),
    app2: path.resolve(__dirname, '../../Public/app2.html'),
    // 输出目录
    assetsRoot: path.resolve(__dirname, '../../Public'),
   // 静态资源目录
    assetsSubDirectory: 'static',
    // 根目录
    assetsPublicPath: '/Public/',
    // sourcemap
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    // 远程接口代理
      '/abc': {
        target: 'http://域名', 
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      },
      '/efg': {
        target: 'http://域名',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
          //'^/review/getPageReview.do': '/static/chatList.json'
        }，
        '/xxx/xxx/xxx.do': { // 指定某接口
        target: 'http://域名',
        changeOrigin: true,
        pathRewrite: {
          '^/xxx/xxx/xxx.do': '/static/本地.json'  // 代理成本地mock数据
        }
      }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
