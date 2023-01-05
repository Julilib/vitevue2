import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue2';
import htmlTemplate from 'vite-plugin-html-template';

// https://vitejs.dev/config/
export default defineConfig(() => {
  process.env = { ...process.env, ...loadEnv(process.cwd(), '') };
  const app = process.env.VITE_APP;

  return {
    plugins: [
      vue(),
      htmlTemplate.default({
        pages: {
          index: {
            template: 'public/index.html',
            entry: 'src/main.js',
          },
          logout: {
            entry: 'src/main.js',
          },
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/style.scss";
            @import "@/assets/vite/scss/colors.scss";
            `,
          // NOT WORKING:
          // additionalData: () => {
          // let prepends = '';
          // prepends += `$app: ${app};`;
          // prepends += `@import "@/style.scss";`;
          // prepends += `@import "@/assets/vite/scss/colors.scss";`;
          // return prepends;}
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          homepage: 'public/index.html',
          logout: 'public/logout.html',
        },
        output: {
          entryFileNames: '[name].bundle.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
      outDir: path.resolve(__dirname, 'dist/' + app),
      sourcemap: true,
      emptyOutDir: true,
      minify: true,
    },
  };
});
