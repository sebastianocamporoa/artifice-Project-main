import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[url(/proyects/artco/artco1.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-8xl font-bold">Quienes somos</h1>
            <p className="text-xl max-w-md">
              Innovación y Diseño en Cada Espacio
            </p>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                LO QUE REPRESENTAMOS
              </h1>
            </div>
            <div className="w-full">
              <img
                src="/about-page-images/what-we-do.jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">Misión</h2>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur. Malesuada vehicula netus
                urna in elit amet.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">Visión</h2>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur. Malesuada vehicula netus
                urna in elit amet.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">Valores</h2>
              <p className="text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur. Malesuada vehicula netus
                urna in elit amet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <p className="text-xl mt-5">
              Lo simplificamos en una frase, “el espacio es tuyo, el diseño
              interior es nuestro”. Por eso nos encanta a yudar a buscar la
              mejor solución que permita mejorar la calidad de vida de nuestro
              clientes a través de la creación de espacios armónicos y
              funcionales.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">
              Familias que han mejorado su calidad de vida
            </h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                200+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/we-focus.jpg" alt="" />
            </div>

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full ">
              <h1 className="font-semibold ">
                Vinculamos cuatro aspectos escenciales que nos convierten en
              </h1>
              <h1 className="font-semibold  text-red-500">
                pioneros en el medio
              </h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-4 max-md:grid-cols-1 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font mt-7  font-medium text-red-500">
                Asesoría y acompañamiento personalizado
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font mt-7  font-medium text-red-500">
                Diseño
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font mt-7  font-medium text-red-500">
                Producción
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font mt-7  font-medium text-red-500">
                Entrega
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
      {/* we focus section start */}
      <div
        className="bg-[50%] max-lg:bg-[55%] max-md:bg-[90%] bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/faq-bannar.jpg')" }}
      >
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 flex justify-end  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 max-lg:w-2/3 max-md:w-full"
          >
            <h1 className="text-5xl ">
              Ganamos experiencia en diseño y decoración, trabajando con
              constructoras y clientes particulares mediante nuestros
              <span className="text-red-500"> servicios y productos</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              Daniela Silva, nuestra fundadora
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              profesional en diseño de inte riores egresada de la universidad
              LaSalleCo llege y futura arquitecta, fundadora de Idealo Espacios
              en 2020. Su vida siempre ha girado en torno al diseño interior y
              la contrucción, con gustos por el color, las formas y con alto
              potencial para crear. Constantemente trabaja por la innovación en
              los diseños, además de la actualización de tendencias y estilos de
              decoración.
            </motion.p>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="/daniela_silva.png"
                className="absolute w-full h-full object-contain"
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* appreciation section end */}
      {/* review section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/daniela_silva.png"}
                title={"empleado 1"}
                from={"cargo 1"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/daniela_silva.png"}
                title={"empleado 2"}
                from={"cargo 2"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/daniela_silva.png"}
                title={"empleado 3"}
                from={"cargo 3"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Conoce a los Expertos
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div>
      {/* review section end */}
      {/* partner brand section start */}
      {/* <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div>
        </div>
      </div> */}
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
