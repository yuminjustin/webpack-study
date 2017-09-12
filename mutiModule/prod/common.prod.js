require('../build/check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var prodFUNC = require('../webpack/webpack.prod.common')

module.exports = function (flag) {

    var webpackConfig = prodFUNC(flag)
    var spinner = ora('正在打包' + flag + '...')

    config = config[flag]

    spinner.start()

    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
        if (err) 
            throw err
        webpack(webpackConfig, function (err, stats) {
            spinner.stop()
            if (err) 
                throw err
            process
                .stdout
                .write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n\n')

            if (stats.hasErrors()) {
                console.log(chalk.red(flag + '打包失败.\n'))
                process.exit(1)
            }

            console.log(chalk.cyan(flag + '打包成功.\n'))
            console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n  Opening index.' +
                    'html over file:// won\'t work.\n'))
        })
    })
}
