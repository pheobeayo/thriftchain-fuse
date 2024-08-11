import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useDisconnect } from "@web3modal/ethers/react";
import logo from "../assets/logo.svg";

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const { disconnect } = useDisconnect();

  const activeStyle = {
    borderLeft: '1px solid #9C0F94',
    borderRight: '1px solid #9C0F94',
    width: "100%",
    padding: "20px",
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between mb-8 relative p-4 items-center border-b border-[#9C0F94]">
      <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color="#fff"
        direction="right"
      />
      {isOpen && (
        <div className="bg-[#070624] text-[white] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50'">
          <NavLink
            to="/dashboard"
            className="text-[18px] text-white flex items-center py-4 mb-4 px-4"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="singlethrift"
            className="text-[18px] text-white  flex items-center py-4 mb-4 px-6"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <BiBox className="mr-4" /> Single Thrift
          </NavLink>
          <NavLink
            to="groupthrift"
            className="text-[18px] text-white flex items-center py-4 mb-4 px-6"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <BiBox className="mr-4" /> Group Thrift
          </NavLink>
          <button
            className="text-[18px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]"
            onClick={() => disconnect()}
          >
            <TbSettings className="mr-4 text-[18px]" /> Log out
          </button>
          <div>
          <w3m-button />
            </div>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
