import React from "react";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "motion/react";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import { useTranslation } from "react-i18next";
const secondaryTheme = "#F067FF";
interface Feature {
  key: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    key: "ai",
    icon: (
      <MemoryOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    key: "automated",
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    key: "cloud",
    icon: (
      <CloudOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    key: "security",
    icon: <SecurityIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />,
  },
  {
    key: "consulting",
    icon: (
      <WorkOutlineOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    key: "marketing",
    icon: (
      <CampaignOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    key: "mobile",
    icon: (
      <MobileFriendlyIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
];

const FeaturesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <section
      className="team-area section-bg1"
      id="services"
      style={{ textAlign: textAlignValue }}
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-105">
              <h2>{t("services")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-4 col-sm-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="single-cat">
                <div className="cat-icon">{feature.icon}</div>
                <div className="cat-cap">
                  <h5>
                    <div>{t(`features.${feature.key}.title`)}</div>
                  </h5>
                  <p>{t(`features.${feature.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="section-tittle text-center mb-50">
          <h2>{t("service2")}</h2>
        </div>
        <div style={{ color: "#A5A7C5" }}>
          <p style={{ color: "#A5A7C5", fontSize: "20px" }}>
            {t("company.about")}
          </p>
          <p style={{ color: "#A5A7C5", fontSize: "20px" }}>
            {t("company.commitment")}
          </p>
          <ol
            style={{
              listStyleType: "inherit",
              lineHeight: 2,
              color: "#fff",
              paddingBottom: "50px",
            }}
          >
            <li>{t("company.features.ai_integration")}</li>
            <li>{t("company.features.flexible_projects")}</li>
            <li>{t("company.features.modern_ui")}</li>
            <li>{t("company.features.customer_support")}</li>
            <li>{t("company.features.maintenance_support")}</li>
            <li>{t("company.features.continuous_updates")}</li>
            <li>{t("company.features.modern_tech")}</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
