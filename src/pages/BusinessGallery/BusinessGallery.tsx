import Header from "../../components/Header";
import Slider from "./Slider";
import BlogSection from "./BlogSection";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

const BusinessGallery = () => {
  const { t } = useTranslation();

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

  return (
    <div style={{ overflow: "hidden" }}>
      <Header menuItems={menuItems} />
      <Slider />
      <BlogSection />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default BusinessGallery;
