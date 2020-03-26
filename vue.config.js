const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    lintOnSave: devMode,
    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: devMode,
                                reloadAll: true,
                            },
                        },
                        'css-loader',
                    ],
                },
            ],
        },
    },
};
