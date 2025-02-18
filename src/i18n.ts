import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // لتكامل i18next مع React
  .use(LanguageDetector) // للكشف التلقائي عن اللغة
  .use(HttpApi) // لتحميل الترجمات من الملفات
  .init({
    fallbackLng: "en", 
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // تخزين اللغة في الكوكيز
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // المسار لتحميل الترجمات
    },
    debug: true, // تفعيل الـ Debugging لمراقبة تحميل الترجمات
  });

export default i18n;
