import { useEffect } from "react";
import BlogsComponent from "../components/blogs-page-components/blogs";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blog - artifice";
  }, []);
  return (
    <div className="overflow-hidden">
      <BlogsComponent />
    </div>
  );
};

export default Blogs;
