import { defineConfig } from 'umi';
import { resolve } from 'path';
import aliyunTheme from '@ant-design/aliyun-theme';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': resolve(__dirname, './src'),
    tmap: resolve(__dirname, '../T-Map/dist/index.common.js'),
    '@components': resolve(__dirname, './src/components'),
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        { exact: true, path: '/demo', component: '@/pages/demo/index.js' },
      ],
    },
  ],
  fastRefresh: {},
  dva: { immer: true, hmr: false },
  antd: {
    dark: false,
  },
  //theme: aliyunTheme,
});
