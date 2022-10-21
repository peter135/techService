import { defineConfig } from "umi";
import routes from "./routes"

export default defineConfig({
    hash: true,
    title:"小王科技",
    routes,
    theme: {
        '@primary-color': 'rgba(56, 166, 229,1)',
    },
    manifest: {
        basePath: '/',
    },
});