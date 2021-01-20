const path = require('path')

const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CracoLessPlugin = require('craco-less');


const resolve = dir => path.resolve(__dirname, dir)

module.exports = ({
  env
}) => {
  console.log('env', env)
  return {
    webpack: {
      plugins: [
        // new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
          analyzerPort: 'auto',
          openAnalyzer: true,
          generateStatsFile: false,
          defaultSizes: 'gzip',
          analyzerMode: 'server'
        }),
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + ['js', 'css'].join('|') +
            ')$'
          ),
          threshold: 1024,
          minRatio: 0.8,
          // include: new RegExp(`build-${compressInclude}`),
          // exclude: /build/
        })
      ],
      alias: { // 配置别名
        '@': resolve('src')
      },
      configure: (webpackConfig, {
        env,
        paths
      }) => {
        // console.log(env, paths)
        return webpackConfig
      }
    },
    babel: {
      plugins: [
        [
          'import',
          {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true
          }
        ]
      ]
    },
    plugins: [{
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff'
            }, //主题颜色
            javascriptEnabled: true
          }
        }
      }
    }]
  }
}