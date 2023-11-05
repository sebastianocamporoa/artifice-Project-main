import { FaAngleDown, FaBars, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { formatCompactNumber } from "../../constants/formatNumber";
import { scrollToTop } from "../../constants/scrollToTop";
const NavBar = ({ navBar2, showCase1Page }) => {
  const [totalQty, setTotalQty] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const { cartItems, setCartItems, addToCart, modal, setModal } =
    useContext(CartContext);
  const [whenScroll, setWhenScroll] = useState("bg-transparent");
  const [logo, setlogo] = useState("/logo.png");
  const [textColor, setTextColor] = useState("text-white");
  const [showcaseDropDown, setShowcaseDropDown] = useState(false);
  const [viewSideNav, setViewSideNav] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const hideNav = () => {
    setViewSideNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setWhenScroll("bg-white");
        setlogo("/logo.png");
        setTextColor("text-black");
      } else {
        setWhenScroll("transparent");
        setTextColor("text-white");
        setlogo("/logo.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    let totalQuantity = cartItems.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalQty(totalQuantity);
    let total = cartItems.map((e, i) => {
      return e.quantity * e.price;
    });
    let totalPrice = total.reduce((acc, product) => acc + product, 0);
    setSubTotal(totalPrice);
    setCheckOut(false);
  }, [cartItems]);
  useEffect(() => {
    const body = document.getElementsByTagName("body").item(0);
    if (modal) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [modal]);
  return (
    <>
      <div
        style={{ zIndex: 98 }}
        className={
          showCase1Page
            ? " top-0 left-0 right-0 absolute"
            : `${navBar2 ? "bg-white shadow-xl" : whenScroll} ${
                whenScroll === "bg-white" ? "shadow-xl" : ""
              } transition-all fixed top-0 left-0 right-0 `
        }
      >
        <nav
          style={{ maxWidth: 1200 }}
          className="flex justify-between mx-auto items-center gap-4 py-7 max-md:py-5 px-10 max-sm:px-5 font-medium"
        >
          <Link onClick={scrollToTop} to="/">
            <img
              src={navBar2 ? "/logo.png" : logo}
              className="w-44 max-lg:w-36"
              alt="Homyz-logo"
            />
          </Link>
          <ul
            className={
              showCase1Page
                ? "text-xl flex max-lg:hidden justify-center items-center gap-8 text-white"
                : `${
                    navBar2 ? "text-black" : textColor
                  } text-xl flex max-lg:hidden justify-center items-center gap-8`
            }
          >
            <Link
              onClick={scrollToTop}
              className="hover:text-red-500 transition-all"
              to="/"
            >
              Inicio
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:text-red-500 transition-all"
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:text-red-500 transition-all"
              // to="/about"
              to="/"
            >
              Sobre nosotros
            </Link>

            {/* <Link onClick={scrollToTop} to="/contact"> */}
            <Link onClick={scrollToTop} to="/">
              <Button
                content={"Contactanos"}
                fontSize={"text-xl"}
                fontWeight={""}
                padding={"px-5 py-2"}
              />
            </Link>
          </ul>
          <ul
            className={`${
              navBar2 ? "text-black" : textColor
            } text-xl hidden max-lg:flex justify-center items-center gap-8`}
          >
            <FaBars
              onClick={() => {
                setViewSideNav(!viewSideNav);
              }}
              className="cursor-pointer"
            />
          </ul>
        </nav>
      </div>

      {/* side nav bar for mobile view */}
      <div
        onClick={() => {
          setViewSideNav(!viewSideNav);
        }}
        style={{ zIndex: 99 }}
        className={`fixed ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } top-0 left-0 bottom-0 right-0  bg-black/40`}
      ></div>
      <nav
        style={{ zIndex: 100 }}
        // style={{ height: 8000 }}
        className={`fixed top-0 bottom-0 hidden max-lg:block ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } bg-white  left-0 w-96 p-5 px-10 max-sm:px-5 max-sm:w-80 z-30 transition-all font-medium`}
      >
        <div id="header" className="flex justify-between items-center">
          <img className="w-36" src="/logo.png" alt="logo" />
          <div
            onClick={() => {
              setViewSideNav(!viewSideNav);
            }}
            className="cancel cursor-pointer w-7 h-7"
            id="close-modal"
          >
            <div style={{ width: 3 }} className="relative mx-auto h-full">
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 rotate-45"
              ></div>
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-gray-800 transition-all hover:bg-gray-600 max-sm:hover:bg-gray-800 -rotate-45"
              ></div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-3 mt-8 text-xl ">
          <Link
            onClick={() => {
              hideNav();
              scrollToTop();
            }}
            to="/"
            className="hover:text-red-500 transition-all"
          >
            Inicio
          </Link>
          <Link
            onClick={() => {
              hideNav();
              scrollToTop();
            }}
            // to="/blogs"
            to="/"
            className="hover:text-red-500 transition-all"
          >
            Blog
          </Link>
          <div className="relative">
            <div
              className={`transition-all duration-200 absolute  w-full bg-white h-24`}
            >
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                // to={"/about"}
                to="/"
                className="hover:text-red-500 transition-all w-full block"
              >
                Sobre nosotros
              </Link>
              <Link
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                // to={"/contact"}
                to="/"
                className="hover:text-red-500 transition-all w-full block"
              >
                <Button
                  content={"Contact Us"}
                  fontSize={""}
                  padding={"py-[6px] px-3"}
                  furtherClasses={" mt-4"}
                />
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
