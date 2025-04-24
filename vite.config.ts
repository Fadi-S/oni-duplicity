import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
    // match PUBLIC_URL_PATH from Webpack
    base: '/',

    plugins: [
        react(),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@changelog': path.resolve(__dirname, 'CHANGELOG.md'),
        },
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },

    assetsInclude: ['**/*.md'],

    define: {
        // preserve process.env.NODE_ENV if you use it in code
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
})
