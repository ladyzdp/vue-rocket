const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); //Gzip
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 代码压缩
const isProduction = process.env.NODE_ENV !== "development";
const outputDir = "dist";

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: "/",
    runtimeCompiler: true,
    outputDir: outputDir,
    productionSourceMap: false,
  
    devServer: {
        // 反向代理
        proxy: {
            "/api": {
                target: 'http://127.0.0.1:6202/',
                headers: {
                    Connection: "Keep-Alive",
                },
                ws: true,
                secure: false,
                changeOrigin: true,

            },
        },
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@public", resolve("public"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@mixins", resolve("src/mixins"))
            .set("@pages", resolve("src/pages"))
            .set("@api", resolve("src/api"));
    },
    configureWebpack: (config) => {
        if (isProduction) {
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            );
            // gzip压缩
            const productionGzipExtensions = ["html", "js", "css"];
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false, // 删除原文件
                })
            );
            
           
        }
    }

};