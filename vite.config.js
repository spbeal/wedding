import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { fileURLToPath } from 'url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var isProd = process.env.NODE_ENV === "production";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: isProd ? '/wedding/' : '/',
    server: {
        port: 5173,
        open: true,
        host: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
