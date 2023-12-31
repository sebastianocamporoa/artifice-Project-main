import Footer from "../components/footer/footer";
import ShowCase1 from "./showcase1";
import NavBar from "../components/navbar-component/navbar";
import Blogs from "./blogs";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import Products from "./products";
import About from "./about";
import Blog from "./blog";
import HomePage from "../components/home-page-components/homePage";
import Contact from "./contact";
import Results from "./results";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <NavBar />
        <Blogs />
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <NavBar navBar2={true} />
        <Results />
        <Footer />
      </>
    ),
  },
  {
    path: "/blogs/:id",
    element: (
      <>
        <NavBar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase1",
    element: (
      <>
        <NavBar showCase1Page={true} />

        <ShowCase1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/showcases/showcase2",
    element: (
      <>
        <NavBar />
        <ShowCase2 />
        <Footer />
      </>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <>
        <NavBar navBar2={true} />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <NavBar />
        <AboutProject />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
