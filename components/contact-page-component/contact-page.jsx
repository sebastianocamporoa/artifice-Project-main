import React, { useState } from "react";
import {
  FaCoins,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhone,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import WhatWeDoCard from "../home-page-components/whatwedocard";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const ContactPage = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      // setBtnLoader(true);
      // axios
      //   .post("https://homyz-server.vercel.app/contact", formData)
      //   .then((response) => {
      //     showToast();
      //     setFormData({
      //       firstName: "",
      //       lastName: "",
      //       phoneNo: "",
      //       email: "",
      //       message: "",
      //     });
      //     setBtnLoader(false);
      //   })
      //   .catch((error) => {
      //     setBtnLoader(false);
      //     errorToast(error.message, "error");
      //     console.error("Error submitting form:", error);
      //   });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className="  flex bg-[url('/hero-bg-image.jpg')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover  ">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg "
          >
            Contactanos
          </motion.h1>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid gap-4 w-full text-start grid-cols-3 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-3"
          >
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaEnvelope className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Servicios</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaCoins className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Precios</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaMobileAlt className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">Soporte</h2>
              </div>
              <p>Neque porro quisquam est, qui dolorem ipsum.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* </Reveal> */}
      </div>

      {/* contact form section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 py-28 max-sm:px-5 flex max-lg:flex-wrap-reverse  gap-12"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-1/2 max-lg:w-full p-6 py-7 rounded-md flex flex-col h-auto justify-between items-start gap-5"
        >
          <div className="name w-full gap-5 text-white max-sm:flex-col flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              _focus={{ borderWidth: 0.1 }}
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="Nombres"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              maxLength={20}
              autoComplete="off"
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder="Apellidos"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={40}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            max={15}
            maxLength={15}
            autoComplete="off"
            color={"black"}
            _placeholder={{ color: "#696969" }}
            type="number"
            placeholder="# de teléfono"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <Textarea
            pl={3}
            fontSize={19}
            variant={"outline"}
            borderColor={"#002b561a"}
            focusBorderColor="#001d3b4d"
            autoComplete="off"
            maxLength={200}
            color={"black"}
            _placeholder={{ color: "#696969" }}
            placeholder="Mensaje"
            minHeight={"180px"}
            className="w-ful text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#826651" }}
            backgroundColor={"#826651"}
            color={"white"}
            borderColor={"#826651"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={handleSubmit}
            className="w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Enviar
          </Button>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/2 flex flex-col gap-5 max-lg:w-full"
        >
          <div className="text-5xl max-md:text-4xl max-md:text-center">
            <h1 className="font-semibold ">
              Contactanos para empezar a hacer{" "}
              <span className="font-semibold title-font  text-red-500">
                realidad tus sueños
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaEnvelope className="text-red-500" />
              </div>
              <p>carrera 1 #20 - 50, Bogotá</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaPhone className="rotate-90 text-red-500" />
              </div>
              <p>+57 3011111111</p>
            </div>
            <div className="flex  gap-3 text-xl items-center">
              <div>
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <p>contacto@artifice.com</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto  p-10 py-28 max-md:py-14 max-md:px-5 "
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="text-5xl max-md:text-4xl font-semibold text-center  mb-16 max-md:mb-12"
        >
          Preguntas frecuentes
        </motion.h1>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion className="flex max-md:flex-col gap-5 " allowToggle={true}>
            <div className=" w-1/2 max-md:w-full text-xl flex flex-col gap-5 ">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
            </div>
            <div className=" w-1/2 max-md:w-full text-xl flex flex-col gap-5 ">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#826651" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Lorem ipsum dolor sit amet?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  beatae ex reiciendis? Ipsa nulla rem et adipisci cum vitae?
                  Vero ipsam sit ab repellendus facere tempore, provident quia
                  qui similique.
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
