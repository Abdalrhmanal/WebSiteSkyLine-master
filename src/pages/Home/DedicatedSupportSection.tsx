import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const DedicatedSupportSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <motion.div
      className="about-area1 pb-bottom"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-xl-7 col-lg-7 col-md-12"
            style={{ textAlign: textAlignValue }}
          >
            <div className="about-caption about-caption3 mb-50">
              {/* Section Title */}
              <motion.div className="section-tittle section-tittle2 mb-30">
                <h2 style={{ fontSize: "35px" }}>
                  {t("dedicatedSupport.title")}
                </h2>
              </motion.div>
              <p className="mb-40">{t("dedicatedSupport.description")}</p>
              <ul className="mb-30">
                <li>
                  <GppGoodIcon sx={{ fontSize: "25px", mr: 1 }} />
                  <p>{t("dedicatedSupport.points.security")}</p>
                </li>
                <li>
                  <ThumbUpAltIcon sx={{ fontSize: "25px", mr: 1 }} />
                  <p>{t("dedicatedSupport.points.trust")}</p>
                </li>
                <li>
                  <VisibilityOffIcon sx={{ fontSize: "25px", mr: 1 }} />
                  <p>{t("dedicatedSupport.points.privacy")}</p>
                </li>
              </ul>
              <a
                href="#"
                className="btn"
              >
                <i className="fas fa-phone-alt"></i>{" "}
                {t("dedicatedSupport.phoneNumber")}
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">
            {/* about-img */}
            <div className="about-img">
              <img
                style={{ width: "80%" }}
                src="assets/img/gallery/about2.png"
                alt="Support"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DedicatedSupportSection;
