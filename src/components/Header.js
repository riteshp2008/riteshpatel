import React from "react";
//images
// import logo from "../assets/logo.svg";
const Header = () => {
  return ( 
    <header className="py-8 hidden lg:flex flex-1">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          
            <img src="/images/logo.svg" alt="" />
          
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
 