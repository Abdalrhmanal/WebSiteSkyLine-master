import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

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

export default function Vision() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div
        style={{
          padding: "50px 0",
        }}
      >
        <motion.div
          // className="col-lg-4 col-md-4 col-sm-6"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              {/* Section Title */}
              <div className="section-tittle text-center mb-90">
                <h2
                  style={{
                    color: "#08b1d6",
                    textAlign: "center",
                  }}
                >
                  {t("our-vision.title")}
                </h2>
                <p
                  style={{
                    color: "#777",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  {t("our-vision.content")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          // className="col-lg-4 col-md-4 col-sm-6"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              {/* Section Title */}
              <div className="section-tittle text-center mb-90">
                <h2
                  style={{
                    color: "#08b1d6",
                    textAlign: "center",
                  }}
                >
                  {t("our-mission.title")}
                </h2>
                <p
                  style={{
                    color: "#777",
                    fontSize: "24px",
                    textAlign: "center",
                  }}
                >
                  {t("our-mission.content")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
