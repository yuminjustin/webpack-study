### 有时候会遇到打包vendor非常大，很头疼，不仅影响加载，有时候还会使UglifyJsPlugin抽风，没法压缩
解决方法：(vue项目为例)
     
        splitChunks:{
           .....
           cacheGroups:{
                 'vue-vendor': {
                        chunks: 'initial',
                        test: /[\\/]node_modules[\\/](axios|vue|vuex|vue-router)[\\/]/,   // 把这些module单独拎出来
                        name: 'vue-vendor',
                        priority: -9,  // 优先级调高
                        enforce: true,
                    },
                    vendor: {
                        test: /node_modules/,   // 打包上面遗留的其他module
                        chunks: "initial",
                        name: "vendor",
                        priority: -10,   // 优先级调低
                        enforce: true
                    },
                    commons: {   // 页面相关 自己写的业务
                        chunks: "all",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0
                    }
           }
        }
         
用TerserJSPlugin 取代  UglifyJsPlugin 一劳永逸

          minimizer:[
                // new UglifyJsPlugin({
                //     cache: true,
                //     parallel: true,
                //     sourceMap: true
                // }),
                new TerserJSPlugin({
                    cache: true, // 是否缓存
                    parallel: true, // 是否并行打包
                    sourceMap: true,
                }),
          ]
