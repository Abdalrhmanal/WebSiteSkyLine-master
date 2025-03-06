import React from "react";

const ProjectPhotos: React.FC = () => {
  // مصفوفة من الصور التي سيتم عرضها
  const photos = [
    "assets/img/blog/single_blog_1.png",
    "assets/img/blog/single_blog_2.png",
    "assets/img/blog/single_blog_3.png",
    "assets/img/blog/single_blog_3.png",
    "assets/img/blog/single_blog_2.png",
    "assets/img/blog/single_blog_1.png",
  ];

  return (
    <aside className="single_sidebar_widget instagram_feeds d-none d-lg-block">
      <h4
        className="widget_title"
        style={{ color: "#2d2d2d" }}
      >
        Project Photos
      </h4>
      <ul className="instagram_row flex-wrap">
        {photos.map((photo, index) => (
          <li key={index}>
            <a href="#">
              <img
                className="img-fluid"
                src={photo}
                alt={`Project photo ${index + 1}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectPhotos;
