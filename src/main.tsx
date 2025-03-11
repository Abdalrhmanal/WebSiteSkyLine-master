import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import BusinessGallery from "./pages/BusinessGallery/BusinessGallery.tsx";
import Preloader from "./components/Preloader.tsx";
import "./index.css";
import { ThemeContextProvider } from "./theme/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Preloader />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Business-Gallery" element={<BusinessGallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
