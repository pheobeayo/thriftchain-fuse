import Sidebar from "../components/Sidebar"
import { Navigate, Outlet } from "react-router-dom"
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const DashboardLayout = () => {
  const { isConnected } = useWeb3ModalAccount();

  return !isConnected ? <Navigate to={'/'} /> : (
    <div>   
        <div className="flex justify-between">
            <Sidebar />
            <div className="px-6 w-[100%] lg:w-[72%] md:w-[72%] h-auto lg:h-[100vh] md:h-[100vh] overflow-y-scroll flex flex-col">
              <div className="my-8 ml-auto">
              <w3m-button />
              </div>
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout