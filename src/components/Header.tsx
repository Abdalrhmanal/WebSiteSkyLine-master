import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SplitButton from "./languageButtom";


interface MenuItem {
  name: string;
  path: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
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

  const { t } = useTranslation();
 
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header">
          <div className="header-bottom header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Logo"
                        width={"100px"}
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-6 d-flex justify-content-end align-items-center  d-lg-none">
                  <button
                    className="mobile-menu-toggle"
                    style={{
                      background: "none",
                      color: "#fff",
                      border: "none",
                      fontSize: "30px",
                    }}
                    onClick={toggleMobileMenu}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <SplitButton />
                </div>

                <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav>
                        <ul id="navigation">
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              <Link to={item.path}>
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
                      background: "#4C1E51",
                      maxHeight: isMobileMenuOpen ? "300px" : "0",
                      transition: "max-height 0.5s ease-out",
                      overflow: "hidden",
                      marginTop: "10px",
                    }}
                  >
                    <ul style={{ padding: "15px 30px" }}>
                      {menuItems.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            padding: "15px 0",
                          }}
                        >
                          {item.path.includes("#") ? (
                            <a
                              href={item.path}
                              onClick={e => handleScrollToSection(e, item.path)}
                            >
                              {t(
                                `menu.${item.name
                                  .toLowerCase()
                                  .replace(/\s/g, "_")}`
                              )}
                            </a>
                          ) : (
                            <Link to={item.path}>
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
