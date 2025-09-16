import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
    if (mode === 'lib') {
        return {
            plugins: [
                vue(),
                dts({
                insertTypesEntry: true,
                copyDtsFiles: true
            })],
            build: {
                lib: {
                    entry: resolve(__dirname, 'src/index.ts'),
                    name: 'SelectionComponents',
                    fileName: (format) => `index.${format}.js`,
                    formats: ['es', 'cjs', 'umd']
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue'
                        }
                    }
                }
            }
        }
    }
    return {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        }
    }
})