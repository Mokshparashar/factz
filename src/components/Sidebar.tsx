import { FC } from "react";
import "../style/sidebar.css";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/factz-white.png";

import { useAppContext } from "../context";
const Sidebar: FC = () => {
  const { showSidebar, setShowSidebar } = useAppContext();

  return (
    <div className={`sidebar ${showSidebar ? "open" : ""} `}>
      <div className="flex items-center justify-between relative -top-2">
        <img src={Logo} alt="factz" className="w-20" />
        <RxCross2
          className="  text-white  text-2xl mr-2"
          onClick={() => setShowSidebar(false)}
        />
      </div>

      <div className="w-3/4 relative  m-auto">
        <input
          type="text"
          name="text"
          className="bg-black outline-none border-solid border-2 border-white rounded-md focus:bg-black text-white pl-4 w-full m-auto h-10"
          placeholder="search specific word"
          autoComplete="off"
        />

        <ul className="text-white columns-2">
          <li>Sports</li>
          <li>Technology</li>
          <li>Democracy</li>
          <li>Politics</li>
          <li>Science</li>
          <li>Hollywood</li>
          <li>Bollywood</li>
          <li>India</li>
          <li>USA</li>
          <li>War</li>
          <li>Space</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Music</li>
          <li>Business</li>
          <li>Finance</li>
          <li>Economy</li>
          <li>AI & ML</li>
          <li>Education</li>
          <li>China</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
