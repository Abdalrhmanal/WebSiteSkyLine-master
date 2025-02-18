import React, { useState, useEffect } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // التحقق من حالة الصفحة
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isLoading ? (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img
              src="assets/img/logo/loder.png"
              alt="Preloader logo"
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Preloader;
