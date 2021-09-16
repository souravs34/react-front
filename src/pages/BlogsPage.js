import React from "react";
import allBlogs from "../components/allBlogs";
import BlogPageContent from "../components/BlogPageContent";
import Title from "../components/Title";
const BlogsPage = () => {
  return (
    <>
      <div className="i--title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <BlogPageContent
              key={blog.id}
              image={blog.image}
              link={blog.link}
              title={blog.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogsPage;
