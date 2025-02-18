import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const GoToWhatsApp: React.FC = () => {
  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div
      id="back-top"
      style={{
        zIndex: 999,
        backgroundColor: "#46c559",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        target="_blank"
        title="whats App "
        href="https://wa.me/+31637718553"
        style={{ display: "flex" }}
        // onClick={handleClick}
      >
        <WhatsAppIcon sx={{ fontSize: "35px" }} />
      </a>
    </div>
  );
};

export default GoToWhatsApp;
