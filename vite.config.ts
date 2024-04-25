import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/variables";@use "@/scss/mixin";`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Unocss({
      presets: [presetUno()],
    }),
  ],

  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },

  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://sub.test.com', // 代理地址，这里设置的地址会代替axios中设置的baseURL
    //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //     secure: false,
    //   },
    // },
  },
});
