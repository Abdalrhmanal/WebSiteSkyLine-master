import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./AboutSection";
import AskQuestionsSection from "./AskQuestionsSection";
import DedicatedSupportSection from "./DedicatedSupportSection";
import FeaturesSection from "./FeaturesSection";
import OurValues from "./OurValues";
import SliderArea from "./SliderArea";
import TestimonialSection from "./TestimonialSection";
import Vision from "./Vision";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <SliderArea />
      <Vision />
      <OurValues />
      {/* <DomainSearch /> */}
      <FeaturesSection />
      <AboutSection />
      <DedicatedSupportSection />
      <AskQuestionsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
