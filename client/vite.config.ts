import { resolve } from 'path'
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   alias: {
//     '/@/': resolve(__dirname, './src'),
//   },
//   plugins: [vue()],
//   build: {
//     outDir: './dist',
//   },
//   server: {
//     proxy: {
//       '/': 'http://localhost:3001',
//     },
//   },
// })

export default {
  plugins: [vue()],

  alias: {
    '/@/': resolve(__dirname, './src'),
  },

  build: {
    outDir: './dist',
  },

  // server: {
  //   proxy: {
  //     '/': 'http://localhost:3001',
  //   },
  // },
}
