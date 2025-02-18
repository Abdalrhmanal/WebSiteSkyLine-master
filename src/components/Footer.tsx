import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

interface ContactInfo {
  icon: JSX.Element;
  text: string;
  to: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <PhoneIcon style={{ color: "#fff", fontSize: "20px" }} />,
    text: "+31 6 37718553",
    to: "https://wa.me/+31637718553",
  },
  {
    icon: <EmailIcon style={{ color: "#fff", fontSize: "20px" }} />,
    text: "skyline6710@gmail.com",
    to: "mailto:skyline6710@gmail.com",
  },
  {
    icon: <LocationOnIcon style={{ color: "#fff", fontSize: "20px" }} />,
    text: "123 Skyline Ave, Tech City",
    to: "",
  },
];

const socialMediaSites = [
  {
    value: "facebook",
    icon: <FacebookIcon style={{ fontSize: "25px" }} />,
    path: "https://www.facebook.com/",
  },
  {
    value: "Instagram",
    icon: <InstagramIcon style={{ fontSize: "25px" }} />,
    path: "https://www.instagram.com/skyline_.company/profilecard/?igsh=OHNsejRnbXo2cWR0",
  },
  {
    value: "Linkedin",
    icon: <LinkedInIcon style={{ fontSize: "25px" }} />,
    path: "https://www.linkedin.com/company/skyline2024/",
  },
  {
    value: "X",
    icon: <XIcon style={{ fontSize: "25px" }} />,
    path: "https://x.com/",
  },
];
const Footer: React.FC<{ quickLinks: { name: string; to: string }[] }> = ({
  quickLinks,
}) => {
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "99e963cc-8628-41ac-9978-871a879f1530");
    formData.append("email", email);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setEmail("");
    }
  };

  const services = [
    { name: t("footer.servicesList.0.name"), to: "/ai-powered-systems" },
    { name: t("footer.servicesList.1.name"), to: "/cloud-services" },
    { name: t("footer.servicesList.2.name"), to: "/technical-support" },
    { name: t("footer.servicesList.3.name"), to: "/technology-consulting" },
    { name: t("footer.servicesList.4.name"), to: "/marketing-media" },
    { name: t("footer.servicesList.5.name"), to: "" },
  ];
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <footer>
      <div
        className="footer-wrappr"
        style={{
          backgroundImage: "url('assets/img/gallery/footer-bg.png')",
          textAlign: textAlignValue,
        }}
      >
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-20">
                  <div className="footer-tittle">
                    <h3 style={{ color: "#fff", marginBottom: "10px" }}>
                      {t("footer.subscribeNewsletter")}
                    </h3>
                    <p>{t("footer.stayUpdated")}</p>
                  </div>
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        className="subscribe_form relative mail_part"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          id="newsletter-form-email"
                          placeholder={t("footer.subscribeNewsletter")}
                          className="placeholder hide-on-focus"
                          onFocus={e => (e.target.placeholder = "")}
                          onBlur={e =>
                            (e.target.placeholder = "Your email address")
                          }
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                        <div className="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            {t("footer.subscribeNewsletter")}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>{t("footer.quickLinks")}</h4>
                    <ul>
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.to}>{t(link.name)}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>{t("footer.ourServices")}</h4>
                    <ul>
                      {services.map((service, index) => (
                        <li
                          key={index}
                          style={{ color: "#C2C5DB" }}
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div
                    className="footer-tittle"
                    style={{ width: "250px" }}
                  >
                    <h4>{t("footer.contactUs")}</h4>
                    <ul>
                      {contactInfo.map((contact, index) => (
                        <li key={index}>
                          {contact.icon}
                          <a
                            href={contact.to}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contact.text}
                          </a>
                        </li>
                      ))}
                      <li>
                        <div className="footer-social">
                          {socialMediaSites.map((site, index) => (
                            <a
                              key={index}
                              href={site.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#fff",
                                display: " inline-flex",
                                justifyContent: " center",
                                alignItems: " center",
                              }}
                            >
                              {site.icon}
                            </a>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-border">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy;{new Date().getFullYear()} All rights
                      reserved | This template is made with{" "}
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                      ></i>{" "}
                      by{" "}
                      <a
                        href="#"
                        rel="noopener noreferrer"
                      >
                        SkyLine
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
