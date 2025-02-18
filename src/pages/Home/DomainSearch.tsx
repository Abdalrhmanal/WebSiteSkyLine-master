import React, { useState } from "react";

const DomainSearch: React.FC = () => {
  const [domain, setDomain] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // يمكن إضافة الوظائف هنا مثل إرسال الطلب أو تغيير الحالة بناءً على البحث
    console.log(`Searching for domain: ${domain}`);
  };

  return (
    <div className="domain-search-area section-bg1">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <h2>Explore our team knowledge</h2>
            <p>
              We are an integrated team from various modern technological
              fields. We have knowledge of all the needs of modern business
              environment.
            </p>
          </div>
          <div className="col-xl-8 col-lg-7">
            {/* Hero form */}
            <form
              onSubmit={handleSearchSubmit}
              className="search-box"
            >
              <div className="input-form">
                <input
                  type="text"
                  placeholder="Explore our team knowledge"
                  value={domain}
                  onChange={handleSearchChange}
                />
                {/* icon search */}
                <div className="search-form">
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </div>
                {/* icon search */}
                <div className="world-form">
                  <i className="fas fa-globe"></i>
                </div>
              </div>
            </form>

            {/* Domain List */}
            <div className="single-domain pt-30 pb-30">
              <ul>
                <li>
                  <span>AI</span>
                </li>
                <li>
                  <span>Systems Analysis</span>
                </li>
                <li>
                  <span>Marketing and Media</span>
                </li>
                <li>
                  <span>Technology Consulting</span>
                </li>
              </ul>
            </div>
            {/* Domain List End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSearch;
