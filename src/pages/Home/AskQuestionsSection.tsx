import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface Question {
  question: string;
  answer: string;
}
const questions: Question[] = [
  {
    question: "How can AI improve my company's operations?",
    answer:
      "Skyline's AI-driven systems help automate processes, optimize decision-making, and improve resource allocation, leading to more efficient and effective business operations.",
  },
  {
    question: "What type of cloud services does Skyline offer?",
    answer:
      "We provide scalable cloud solutions designed to integrate seamlessly with your current systems, enhancing performance, security, and flexibility.",
  },
  {
    question: "How does Skyline ensure data security?",
    answer:
      "Our solutions include advanced security protocols and regular system testing to safeguard your data and ensure privacy in all your business operations.",
  },
  {
    question: "What kind of technological consulting does Skyline provide?",
    answer:
      "Our team of experts provides consulting services to help you choose and implement the right technological solutions to optimize your business and drive growth.",
  },
];

const AskQuestionsSection: React.FC = () => {
  const { t,i18n } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <section
      className="ask-questions section-bg1 section-padding30 fix"
      id="help"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            {/* Section Title */}
            <div className="section-tittle text-center mb-90">
              <h2>{t("askQuestions.sectionTitle")}</h2>
              <p>{t("askQuestions.sectionDescription")}</p>
            </div>
          </div>
        </div>
        <div className="row"             style={{ textAlign: textAlignValue }}
        >
          {questions.map((question,index) => (
            <motion.div
              key={question.question }
              className="col-lg-6 col-md-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              <div className="single-question d-flex mb-50">
                <span> Q.</span>
                <div className="pera">
                  <h2>{t(`askQuestions.questions.${index}.question`)}</h2>
                  <p>{t(`askQuestions.questions.${index}.answer`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="more-btn text-center mt-20">
              <Link
                to="content"
                className="btn"
              >
                {t("askQuestions.buttonText")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionsSection;
