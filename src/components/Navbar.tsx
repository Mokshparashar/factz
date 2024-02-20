import Logo from "../assets/factz.png";

import { IoMenu } from "react-icons/io5";
import { FC, useEffect } from "react";
import { useAppContext } from "../context";
import GetHomeData from "../dataFetching";

const Navbar: FC = () => {
  const { setShowSidebar, fetchedData, setFetchedData } = useAppContext();

  return (
    <nav className="p-4 flex items-center justify-between bg-blue-50  h-12">
      <div>
        <img src={Logo} alt="factz" className="w-12" />
      </div>
      <div></div>
      <div className="hover:cursor-pointer">
        <IoMenu className="text-xl" onClick={() => setShowSidebar(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
