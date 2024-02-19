import Logo from "../assets/factz.png";

import { IoMenu } from "react-icons/io5";
import { FC } from "react";
import { useAppContext } from "../context";

const Navbar: FC = () => {
  const { setShowSidebar, fetchedData } = useAppContext();
  console.log(fetchedData.);

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
