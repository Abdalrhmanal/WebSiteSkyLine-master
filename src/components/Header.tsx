import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SplitButton from "./languageButtom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Business Gallery", path: "/business-gallery" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent, path: string) => {
    if (path.includes("#")) {
      e.preventDefault();
      const section = document.getElementById(path.replace("#", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { t, i18n } = useTranslation();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9999,
        background: "rgba(4, 23, 66, 0.8)",
      }}
    >
      <div className="header-area">
        <div className="main-header">
          <div className="header-bottom header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-6 d-flex justify-content-end align-items-center d-lg-none">
                  <button
                    className="mobile-menu-toggle"
                    style={{
                      background: "none",
                      color: "#eaeaea",
                      border: "none",
                      fontSize: "30px",
                      zIndex: 999999999,
                    }}
                    onClick={toggleMobileMenu}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <SplitButton />
                </div>

                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "15px 0",
                    }}
                    className="logo"
                  >
                    <Link to="/">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Logo"
                        width={"80px"}
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav>
                        <ul id="navigation">
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              <Link
                                style={{
                                  color: "#eaeaea",
                                  fontWeight: "bold",
                                  fontSize: "22px",
                                }}
                                to={item.path}
                              >
                                {t(
                                  `menu.${item.name
                                    .toLowerCase()
                                    .replace(/\s/g, "_")}`
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>

                    <SplitButton />
                  </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className="col-12 d-block d-lg-none ">
                  <div
                    className={`mobile-menu-dropdown ${
                      isMobileMenuOpen ? "open" : ""
                    }`}
                    style={{
                      background: "#eaeaea",
                      maxHeight: isMobileMenuOpen ? "300px" : "0",
                      transition: "max-height 0.5s ease-out",
                      overflow: "hidden",
                      marginTop: "10px",
                      fontWeight: "bold",
                      fontSize: "22px",
                      textAlign: `${i18n.dir() === "rtl" ? "right" : "left"}`,
                      zIndex: 1100202030,
                    }}
                  >
                    <ul style={{ padding: "15px 30px" }}>
                      {menuItems.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            padding: "15px 0",
                            color: "#121212",
                          }}
                        >
                          {item.path.includes("#") ? (
                            <a
                              href={item.path}
                              onClick={(e) =>
                                handleScrollToSection(e, item.path)
                              }
                              style={{ color: "#041742" }}
                            >
                              {t(
                                `menu.${item.name
                                  .toLowerCase()
                                  .replace(/\s/g, "_")}`
                              )}
                            </a>
                          ) : (
                            <Link to={item.path} style={{ color: "#041742" }}>
                              {t(
                                `menu.${item.name
                                  .toLowerCase()
                                  .replace(/\s/g, "_")}`
                              )}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
