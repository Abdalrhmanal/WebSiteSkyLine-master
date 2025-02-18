import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./AboutSection";
import AskQuestionsSection from "./AskQuestionsSection";
import DedicatedSupportSection from "./DedicatedSupportSection";

import FeaturesSection from "./FeaturesSection";
import SliderArea from "./SliderArea";
import TestimonialSection from "./TestimonialSection";
const Home = () => {
  const { t } = useTranslation();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Business Gallery", path: "/business-gallery" },
    { name: "Help", path: "#help" },
    { name: "Contact", path: "/contact" },
  ];
  const quickLinks = [
    { name: t("footer.quickLinksList.0.name"), to: "#aboutUs" },
    { name: t("footer.quickLinksList.1.name"), to: "/business-gallery" },
    { name: t("footer.quickLinksList.2.name"), to: "#help" },
    { name: t("footer.quickLinksList.3.name"), to: "#services" },
    { name: t("footer.quickLinksList.4.name"), to: "/contact" },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Header menuItems={menuItems} />
      <SliderArea />
      {/* <DomainSearch /> */}
      <FeaturesSection />
      <AboutSection />
      <DedicatedSupportSection />
      <AskQuestionsSection />
      <TestimonialSection />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default Home;
