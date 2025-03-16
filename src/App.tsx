import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader.tsx";
import Layout from "./pages/AppLayout.tsx";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.tsx"));
const BusinessGallery = lazy(
  () => import("./pages/BusinessGallery/BusinessGallery.tsx")
);

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Business-Gallery" element={<BusinessGallery />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
