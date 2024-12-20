import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createPages, createMpaPlugin } from 'vite-plugin-virtual-mpa';
import jsx from '@vitejs/plugin-vue-jsx';

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
    },
    {
        name: 'furnitureGenerator',
        entry: '/src/pages/furnitureGenerator/main.ts',
        filename: 'furnitureGenerator/index.html',
        data: {
            title: '家具贴图描边'
        }
    }
]);

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), createMpaPlugin({ pages }), jsx()],
    base: '/tmod-dev-tools/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
});
