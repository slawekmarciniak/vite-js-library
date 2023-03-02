import { resolve } from 'pathe';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MyLib',
            fileName: 'main',
            formats: ['cjs', 'es']
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {
                },
            },
        },
    },
    plugins: [dts({
        insertTypesEntry: true,
    })],
});
