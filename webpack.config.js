const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './mesh-entry.js',
    mode: 'production',
    output: {
        filename: 'mesh.bundle.js',
        path: path.resolve(__dirname, 'public/js'),
        library: 'Mesh',
        libraryTarget: 'window',
    },
    experiments: {
        topLevelAwait: true,
    },
    resolve: {
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'),
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
            buffer: require.resolve('buffer/'),
            process: require.resolve('process'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process',
        }),
    ], 
};