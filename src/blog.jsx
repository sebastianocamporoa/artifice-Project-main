import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BlogPage from "../components/blog-component/blog";
import { blogData } from "../constants/blogData";

const Blog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const serviceData = blogData[params.id - 1];

  useEffect(() => {
    const serviceData = blogData.findIndex((e, i) => {
      return e.id == params.id;
    });
    if (serviceData === -1) {
      navigate("/*");
    }
  }, []);
  useEffect(() => {
    document.title = `Blogs - ${serviceData.title} `;
  }, []);
  return (
    <BlogPage
      id={serviceData.id}
      title={serviceData.title}
      breif={serviceData.shortDescription}
      descr={serviceData.mainDescription}
      imageSrc={serviceData.image}
    />
  );
};

export default Blog;
