import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";
import Slider from "./Slider";

const Contact = () => {
  const { i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <div style={{ overflow: "hidden", textAlign: textAlignValue }}>
      <Header />
      <Slider />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
