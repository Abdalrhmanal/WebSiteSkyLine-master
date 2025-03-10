import Header from "../../components/Header";
import Slider from "./Slider";
import BlogSection from "./BlogSection";
import Footer from "../../components/Footer";

const BusinessGallery = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Slider />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default BusinessGallery;
