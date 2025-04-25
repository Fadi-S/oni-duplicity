import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import string from 'vite-plugin-string'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    // match PUBLIC_URL_PATH from Webpack
    base: '/',

    plugins: [
        react(),
        tailwindcss(),
        string({
            include: ['**/*.md'], // Include .md files as raw strings
        }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@changelog': path.resolve(__dirname, 'CHANGELOG.md'),
        },
        extensions: ['.js', '.ts', '.tsx', '.json'],
    },

    define: {
        // preserve process.env.NODE_ENV if you use it in code
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
})
