// https://umijs.org/config/
import path from 'path'
import pageRoutes from './router.config'

export default {
  // 添加 url-loader 的 exclude
  urlLoaderExcludes: [/.(png|jpg|gif)$/],

  // 添加 loader
  chainWebpack(config, { webpack }) {
    config.module
      .rule('img-with-file')
      .test(/.(png|jpg|gif)$/)
      .use('url-loader')
      .loader(require.resolve('umi-url-pnp-loader'))
      .options({
        limit: 10000000,
        name: 'static/[name].[hash:8].[ext]',
      })
  },

  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: undefined,
        //   {
        //   loadingComponent: './components/PageLoading/index',
        //   webpackChunkName: true,
        // },
        title: {
          defaultTitle: 'music-yx',
        },
        dll: false,
        pwa: false,
        hd: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  //   exportStatic: {},
  // 路由配置
  routes: pageRoutes,
  history: 'hash',
  // Theme for antd-mobile
  // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
  theme: {
    // 'brand-primary': '#00CC99',
    // 'brand-primary-tap': '#00CC66',
  },
  //   ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssnano: {
    mergeRules: false,
  },
  targets: {
    android: 6,
    ios: 7,
  },
  outputPath: './deploy/dist',
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  copy: [
    {
      from: 'node_modules/pdfjs-dist/cmaps/',
      to: 'cmaps/',
    },
  ],

}
