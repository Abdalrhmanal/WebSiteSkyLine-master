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

const values = [
  { key: "innovation", color: "#08b1d6" },
  { key: "quality", color: "#eaeaea" },
  { key: "transparency", color: "#08b1d6" },
  { key: "collaboration", color: "#eaeaea" },
];
export default function OurValues() {
  const { t } = useTranslation();

  return (
    <section
      className="team-area section-bg1"
      id="services"
      style={{ padding: "100px 0px", background: "#041742" }}
    >
      <div className="container">
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
                {t("company.values.title")}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eaeaea",
                  color: value.color,
                  padding: "20px",
                  margin: "10px",
                  minHeight: "120px",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* <h3 style={{ color: "#08b1d6" }}>
                {t(`company.values.${value.key}`.split(":")[0])}
              </h3> */}
                <p>{t(`company.values.${value.key}`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
