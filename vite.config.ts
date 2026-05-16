import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Set base to "/" for custom user/organization GitHub Pages site (sunnyzoloo.github.io)
// or a Vercel deployment. If deploying to a project page like
// https://sunnyzoloo.github.io/my-repo/, change base to "/my-repo/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
