/* vue-cli 配置 */

var utils = require('../build/utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var baseFUNC = require('./webpack.base.common')

module.exports = function (flag) { // 对应不同模板

    var baseconfig = baseFUNC(flag);

    config = config[flag];

    // add hot-reload related code to entry chunks
    // 公共的样式
    Object    
        .keys(baseconfig.entry)
        .forEach(function (name) {
            baseconfig.entry[name] = ['./build/dev-client'].concat(baseconfig.entry[name])
        })

    return merge(baseconfig, {
        module: {
            rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
        },
        // cheap-module-eval-source-map is faster for development
        devtool: '#cheap-module-eval-source-map',
        plugins: [
            new webpack.DefinePlugin({'process.env': config.dev.env}),
            // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            // https://github.com/ampedandwired/html-webpack-plugin
            new HtmlWebpackPlugin({
                filename: 'login.html',  // 输出 主页
                template: 'login.html',
                inject: true,
                argument: {  // 页面需要的 变量
                    title: config.options.title  
                }
            }),
            new FriendlyErrorsPlugin()
        ]
    })
}
