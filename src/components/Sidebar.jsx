import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import { useDisconnect } from "@web3modal/ethers/react";

const Sidebar = () => {
  const { disconnect } = useDisconnect()

  const activeStyle = {
    borderLeft: '1px solid #9C0F94',
    borderRight: '1px solid #9C0F94',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#060E37] w-[25%]  p-8 py-4 h-[100vh] hidden lg:flex flex-col md:flex'>
      <img src={logo} alt="" className="w-[200px] mb-16 mt-4"/>
      <NavLink to="/dashboard" className="text-[18px] text-white flex items-center py-4 mb-4 px-4" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="singlethrift" className="text-[18px] text-white  flex items-center py-4 mb-4 px-6" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Single Thrift</NavLink>
      <NavLink to="groupthrift" className="text-[18px] text-white flex items-center py-4 mb-4 px-6" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Group Thrift</NavLink>
      <button className="text-[18px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" onClick={() => disconnect()}><TbSettings className="mr-4 text-[18px]"  /> Log out</button>
      
    </div>
  );
}

export default Sidebar;
