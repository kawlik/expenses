import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({

    base: '/expenses/',

    plugins: [
        React(),
    ],

    server: {
        watch: {
            usePolling: true,
        }
    }
})
