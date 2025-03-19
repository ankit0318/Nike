import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger  from "../assets/icons/hamburger.svg";
import { navLinks } from "../Constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}></img>
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label} className="text-lg text-slate-gray font-montserrat leading-normal">
              <a href={items.href}>{items.label}</a>{" "}
            </li>
          ))}
        </ul>
        <div className="text-lg font-montserrat font-medium max-lg:hidden">
        <a href="/">Sign in</a>
        <span> / </span>
          <a href='/'>Explore now</a>
          </div>
        <div className="hidden max-lg:inline">
          <img src={hamburger} alt="hamburger" width={25} height={25}/>
      
        </div>
        
      </nav>
    </header>
  );
};

export default Nav;
