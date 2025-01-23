import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { watchAndRun } from 'vite-plugin-watch-and-run'
import path from 'path'
import { copy } from 'vite-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: { $lib: '/src' } },
  build: {
    rollupOptions: {
      input: {
        formComponents: 'src/form-components.ts',
        buttonComponents: 'src/button-components.ts',
      },
      output: {
        inlineDynamicImports: false,
        dir: 'dist',
        format: 'esm'
      },
      plugins: [
        copy({
          targets: [
            {
              src: path.resolve(__dirname, 'src/styles.css'),
              dest: path.resolve(__dirname, 'dist')
            }
          ]
        })
      ]
    }
  },
  plugins: [
    svelte(),
    watchAndRun([{
      name: 'gen',
      watchKind: ['add', 'change', 'unlink'],
      watch: path.resolve('src/**/*.(svelte)'),
      run: 'npm run build',
      delay: 300
    }])
  ],
})
