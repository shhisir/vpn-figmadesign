import React from "react";
import { navItems } from "../navitem";
// import logo from "./"

const navbar = () => {
  return (
    <nav className="w-full px-[150px] py-[46px] flex items-center justify-between ">
      <div>
        <img src="images/logo.png" alt="logo" className="w-full h-full" />
      </div>

      <div className="flex list-none gap-[40px]" >
        {navItems.map((item, index) => {
          return (
            <li key={index}> {item.name}</li> 
        
          )
        })}
        
        </div>
        <div className="flex gap-[20px] items-center">
          <p className="text-[#0B132A] font-[500]">Sign In</p>
          <button className="px-[45px] py-[13px] border-[1px] text-[#F53855] font-[500] text-4  rounded-[50px]  ">Sign Up</button>
        </div>
    </nav>
   
  );
};

export default navbar;
