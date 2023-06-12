"use client";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import menu from "../../public/images/burger-menu-svgrepo-com.svg";
import { useState } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="lg:px-44 lg:pt-8">
      <div className="flex justify-between m-5 ">
        <div className="lg:flex lg:space-x-6 lg:items-center ">
          <Image src={logo} width={121} height={33} alt="/" />
          <div className="desktop-menu hidden lg:flex  ">
            <ul className=" lg:flex  lg:space-x-8 hidden text-GrayishViolet">
              <li className="hover:text-black">Features</li>
              <li className="hover:text-black">Pricing</li>
              <li className="hover:text-black">Resources</li>
            </ul>
          </div>
        </div>

        <Image
          src={menu}
          width={67}
          height={30}
          alt="/"
          onClick={handleMenu}
          className="lg:hidden"
        />

        <div className="desktop-menu-btns lg:space-x-8 hidden lg:flex">
          <button className="text-GrayishViolet hover:text-black">Login</button>
          <button className="bg-Cyan rounded-full p-2 px-7 text-white hover:opacity-75">
            Sign Up
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="bg-DarkViolet text-white rounded-md w-[20rem] h-[27rem] mx-4 p-8 ">
          <ul className="p-6 pb-16 flex flex-col gap-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <hr />
          <div className="flex flex-col p-4 pt-10 gap-4">
            <button>Login</button>
            <button className="bg-Cyan rounded-full p-2 px-7 text-white hover:opacity-75">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
