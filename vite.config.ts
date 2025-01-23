import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { watchAndRun } from 'vite-plugin-watch-and-run'
import path from 'path'
import { copy } from 'vite-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: { $lib: '/src' } },
  build: {
    lib: {
      name: 'SwcComponents',
      entry: 'src/main.ts',
      formats: ['iife'],
      fileName: 'swc-components'
    },
    rollupOptions: {
      input: {
        formComponents: 'src/form-components.js',
        buttonComponents: 'src/button-components.js',
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
