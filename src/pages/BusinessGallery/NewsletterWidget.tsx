import React from "react";

const NewsletterWidget: React.FC = () => {
  return (
    <aside className="single_sidebar_widget newsletter_widget">
      <h4
        className="widget_title"
        style={{ color: "#2d2d2d" }}
      >
        Newsletter
      </h4>
      <form action="#">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Enter email")}
            placeholder="Enter email"
            required
          />
        </div>
        <button
          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </aside>
  );
};

export default NewsletterWidget;
