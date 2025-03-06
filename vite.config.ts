import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "assets/js/vendor/jquery-1.12.4.min.js",
        "assets/js/popper.min.js",
        "assets/js/bootstrap.min.js",
        "assets/js/main.js",
        "assets/css/bootstrap.min.css",
        "assets/css/owl.carousel.min.css",
        "assets/css/slicknav.css",
      ],
    },
  },
});
