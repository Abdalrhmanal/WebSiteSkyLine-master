import { Outlet } from "react-router-dom";
import BackToTop from "./components/GoToWhatsApp";
import "./i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl"); // تعيين اتجاه النص من اليمين لليسار
    } else {
      document.documentElement.setAttribute("dir", "ltr"); // تعيين اتجاه النص من اليسار لليمين
    }
  }, [i18n.language]);
  return (
    <>
      <BackToTop />
      <Outlet />
    </>
  );
};

export default App;
