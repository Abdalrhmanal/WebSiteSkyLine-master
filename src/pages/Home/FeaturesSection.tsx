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

interface Feature {
  key: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    key: "ai",
    icon: <MemoryOutlinedIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />,
  },
  {
    key: "automated",
    icon: (
      <SettingsOutlinedIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />
    ),
  },
  {
    key: "cloud",
    icon: <CloudOutlinedIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />,
  },
  {
    key: "security",
    icon: <SecurityIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />,
  },
  {
    key: "consulting",
    icon: (
      <WorkOutlineOutlinedIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />
    ),
  },
  {
    key: "marketing",
    icon: (
      <CampaignOutlinedIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />
    ),
  },
  {
    key: "mobile",
    icon: <MobileFriendlyIcon sx={{ fontSize: 70, color: "#08b1d6", pb: 3 }} />,
  },
];

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

const FeaturesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <section
      className="team-area section-bg1"
      id="services"
      style={{ textAlign: textAlignValue, paddingTop: "100px" }}
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-105">
              <h2
                style={{
                  color: "#08b1d6",
                  textAlign: "center",
                }}
              >
                {t("services")}
              </h2>
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
                <div
                  className="cat-cap"
                  style={{
                    // border: "1px solid #fff",
                    padding: "16px",
                    minHeight: "250px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.09)",
                    background: "#041742",
                    borderRadius: "10px",
                  }}
                >
                  <div className="text-center">{feature.icon}</div>
                  <h5 className="text-center">
                    <div
                      style={{
                        color: "#eaeaea",
                        fontSize: "22px",
                      }}
                    >
                      {t(`features.${feature.key}.title`)}
                    </div>
                  </h5>
                  <p
                    className="text-center"
                    style={{
                      color: "#777",
                      fontSize: "18px",
                    }}
                  >
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-tittle text-center mb-50 mt-70">
          <h2
            style={{
              color: "#041742",
              textAlign: textAlignValue,
            }}
          >
            {t("service2")}
          </h2>
        </div>
        <div>
          <p style={{ color: "#777", fontSize: "20px" }}>
            {t("company.about")}
          </p>
          <p style={{ color: "#777", fontSize: "20px" }}>
            {t("company.commitment")}
          </p>
          <ol
            style={{
              listStyleType: "inherit",
              lineHeight: 2,
              color: "#121212",
              paddingBottom: "50px",
              fontSize: "14px",
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
