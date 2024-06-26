import React from "react";
// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ToastContainer from "./components/ToastContainer";

const App = () => {
  return (
    <>
    <ToastContainer />
    <div className="bg-black bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
    </>
  );
};

export default App;
