import { resolve } from 'pathe';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'main',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: [],
      output: {
        // entryFileNames: `[name].[hash].mjs`,
        // chunkFileNames: `[name].[hash].mjs`,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'import.meta.env.DEV': 'true',
          'import.meta.env.PROD': 'false',
        },
      },
    },
  },
  plugins: [dts({
    insertTypesEntry: true,
  })]
})