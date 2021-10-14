import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({

    base: '/',

    plugins: [
        React(),
    ],

    server: {
        watch: {
            usePolling: true,
        }
    }
})
