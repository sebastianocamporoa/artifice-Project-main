import "./blog.css";
import BlogCard from "./blogCard";
import { blogData } from "../../constants/blogData";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
const BlogsComponent = () => {
  return (
    <>
      <div className="bg-[url(/proyects/arena/arena1.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Explora Nuestro Blog</h1>
            <p className="text-xl max-w-md">
              Descubre las últimas tendencias en diseño y decoración
            </p>
          </div>
          <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">+48</h2>
              <p className="text-lg">Artículos publicados</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto grid grid-cols-2 max-md:grid-rows-6 max-md:grid-cols-1 grid-rows-3 p-10 max-lg:px-5 gap-5"
      >
        {blogData.map((e, i) => {
          return (
            <BlogCard
              key={i}
              title={e.title}
              brief={e.shortDescription}
              imgSrc={e.image}
              id={e.id}
              iconSrc={e.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogsComponent;