import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/style.css', 
                'resources/js/theme.js',
                
                'resources/css/app.css', 
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});