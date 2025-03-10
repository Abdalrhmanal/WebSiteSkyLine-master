import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SliderArea: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [text] = useTypewriter({
    words: [t("slider.title")],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [textAlignValue, setTextAlignValue] = useState<"left" | "right">(
    "left"
  );

  // استخدام useEffect لمراقبة التغيرات في اللغة وتحديث الاتجاه (direction)
  useEffect(() => {
    const dir = i18n.dir();
    setTextAlignValue(dir === "rtl" ? "right" : "left");
  }, [i18n]); // استخدم i18n كمصفوفة اعتماد

  const highlightText = (text: string) => {
    return text.replace(
      "Skyline",
      "<span style='color: #F067FF;font-size:45px'>Skyline</span>"
    );
  };

  return (
    <div className="slider-area slider-bg">
      <div className="slider-active" style={{ textAlign: textAlignValue }}>
        {/* Single Slider */}
        <div className="single-slider d-flex align-items-center slider-height">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <motion.div
                className="col-xl-5 col-lg-5 col-md-9"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="hero__caption mt-30 pt-5">
                  <p
                    data-animation="fadeInLeft"
                    data-delay=".3s"
                    style={{
                      textAlign: i18n.language === "ar" ? "right" : "left",
                      marginTop: "50px",
                    }}
                  >
                    {t("slider.description")}
                  </p>
                  <div className="min-h">
                    <h1
                      style={{
                        fontSize: "40px",
                        textAlign: i18n.language === "ar" ? "right" : "left",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: highlightText(text),
                      }}
                    ></h1>
                  </div>
                  <p
                    data-animation="fadeInLeft"
                    data-delay=".8s"
                    style={{
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {t("slider.paragraph")}
                  </p>
                  {/* Slider btn */}
                  <div className="slider-btns mb-10">
                    {/* Hero-btn */}
                    <Link
                      data-animation="fadeInLeft"
                      data-delay="1s"
                      to="contact"
                      className="btn radius-btn"
                    >
                      {t("slider.button")}
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-xl-6 col-lg-6 flex-center-end"
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="hero__img d-none d-lg-block f-right">
                  <motion.img
                    src="/assets/img/hero/hero_right.png"
                    alt="Hero image"
                    width={"600px"}
                    initial={{ y: 0 }}
                    animate={{ y: -40 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2,
                      // repeatDelay: 0.1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Shape */}
      <div className="slider-shape d-none d-lg-block">
        <img
          className="slider-shape1"
          src="/assets/img/hero/top-left-shape.png"
          alt="Slider shape"
        />
      </div>
    </div>
  );
};

export default SliderArea;
