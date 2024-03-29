/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import externalGlobals from 'rollup-plugin-external-globals';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/project2',

  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:4200/',
        changeOrigin: true,
      },
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components', '../../libs/components/src'],
      dts: './src/components.d.ts',
    }),
    nxViteTsPaths(),
    {
      ...externalGlobals({
        vue: 'Vue',
        'vue-demi': 'VueDemi',
        'vue-i18n': 'VueI18n',
        'vue-router': 'VueRouter',
        axios: 'axios',
      }),
      enforce: 'post',
      apply: 'build',
    },
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/project2',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['vue', 'vue-demi', 'vue-i18n', 'vue-router', 'axios'],
    },
  },
});
