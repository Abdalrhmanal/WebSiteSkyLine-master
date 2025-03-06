import React from "react";

const TagCloudWidget: React.FC = () => {
  const tags = [
    "FrontEnd",
    "BackEnd",
    "Mobile Development ",
    "UI/UX",
    "AI",
    "Cloud Computing",
    "Design",
  ];

  return (
    <aside className="single_sidebar_widget tag_cloud_widget d-none d-lg-block">
      <h4
        className="widget_title"
        style={{ color: "#2d2d2d", marginBottom: "20px" }}
      >
        Tag Clouds
      </h4>
      <ul
        className="list"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {tags.map((tag, index) => (
          <li key={index}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TagCloudWidget;
