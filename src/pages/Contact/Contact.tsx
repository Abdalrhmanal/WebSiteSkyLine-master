import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";
import Slider from "./Slider";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Business Gallery", path: "/business-gallery" },
    { name: "Contact", path: "/contact" },
  ];
  const quickLinks = [
    { name: t("footer.quickLinksList.0.name"), to: "/#aboutUs" },
    { name: t("footer.quickLinksList.1.name"), to: "/business-gallery" },
    { name: t("footer.quickLinksList.2.name"), to: "/#help" },
    { name: t("footer.quickLinksList.3.name"), to: "/#services" },
    { name: t("footer.quickLinksList.4.name"), to: "/contact" },
  ];
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <div style={{ overflow: "hidden", textAlign: textAlignValue }}>
      <Header menuItems={menuItems} />
      <Slider />
      <ContactForm />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default Contact;
