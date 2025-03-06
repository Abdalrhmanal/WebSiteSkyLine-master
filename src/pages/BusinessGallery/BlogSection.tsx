import React from "react";
import { useTranslation } from "react-i18next";
import BlogItem from "./BlogItem";
// import BlogPagination from "./BlogPagination";

import ProjectPhotos from "./ProjectPhotos.tsx";
import TagCloudWidget from "./TagCloudWidget.tsx";

const BlogSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const blogItemsData = [
    {
      imageSrc: "assets/img/blog/single_blog_1.png",
      date: "2024",
      month: "Jan",
      titleKey: t("blog.fsnCreditStoreTitle"),
      descriptionKey: t("blog.fsnCreditStoreDescription"),
    },
    {
      imageSrc: "assets/img/blog/single_blog_2.png",
      date: "2024",
      month: "Mar",
      titleKey: t("blog.tawsellaStarTaxiTitle"),
      descriptionKey: t("blog.tawsellaStarTaxiDescription"),
    },
    {
      imageSrc: "assets/img/blog/single_blog_3.png",
      date: "2024",
      month: "Apr",
      titleKey: t("blog.storeTitle"),
      descriptionKey: t("blog.storeDescription"),
    },
  ];
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 mb-5 mb-lg-0"
            style={{ textAlign: textAlignValue }}
          >
            <div className="blog_left_sidebar">
              {blogItemsData.map((item, index) => (
                <BlogItem
                  key={index}
                  imageSrc={item.imageSrc}
                  date={item.date}
                  month={item.month}
                  title={item.titleKey}
                  description={t(item.descriptionKey)}
                />
              ))}
              {/* <BlogPagination /> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* <SearchWidget /> */}
              <TagCloudWidget />
              <ProjectPhotos />
              {/* <NewsletterWidget /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
