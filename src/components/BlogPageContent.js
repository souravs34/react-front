import React from "react";

const BlogPageContent = ({ image, link, title }) => {
  return (
    <div className="blog">
      <div className="blog--content">
        <img src={image} alt="" />
        <a href={link} className="blog--link" target="_blank">
          {title}
        </a>
      </div>
    </div>
  );
};

export default BlogPageContent;
