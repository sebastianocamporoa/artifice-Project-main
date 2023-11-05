import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BlogPage from "../components/blog-component/blog";
import { blogData } from "../constants/blogData";

const Blog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const blogData = blogData[params.id - 1];

  useEffect(() => {
    const blogData = blogData.findIndex((e, i) => {
      return e.id == params.id;
    });
    if (blogData === -1) {
      navigate("/*");
    }
  }, []);
  useEffect(() => {
    document.title = `Blogs - ${blogData.title} `;
  }, []);
  return (
    <BlogPage
      id={blogData.id}
      title={blogData.title}
      breif={blogData.shortDescription}
      descr={blogData.mainDescription}
      imageSrc={blogData.image}
    />
  );
};

export default Blog;
