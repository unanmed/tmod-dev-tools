import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createPages, createMpaPlugin } from 'vite-plugin-virtual-mpa';

const pages = createPages([
    {
        name: 'index',
        entry: '/src/pages/main/main.ts',
        filename: 'index.html',
        data: {
            title: 'tMod 开发小工具'
        }
    },
    {
        name: 'furnitureHighlights',
        entry: '/src/pages/furnitureHighlights/main.ts',
        filename: 'furnitureHighlights/index.html',
        data: {
            title: '家具贴图描边'
        }
    }
]);

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), createMpaPlugin({ pages })],
    base: '/tmod-dev-tools/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                furnitureHighlights: resolve(
                    __dirname,
                    'src/pages/furnitureHighlights'
                )
            }
        }
    }
});
