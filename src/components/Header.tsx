import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
function Header() {
  const [home, setHome] = useState(true);
  const [clock, setClock] = useState(false);

  function homeHandler() {
    setHome(true);
    setClock(false);
  }

  function clockHandler() {
    setHome(false);
    setClock(true);
  }
  return (
    <div className="w-full m-auto flex items-center justify-around mt-4 border-solid border-b-2 border-gray-100 ">
      <div
        className="flex items-center justify-between flex-col hover:cursor-pointer"
        onClick={homeHandler}
      >
        {home ? (
          <IoHomeSharp className="text-2xl text-blue-500" />
        ) : (
          <IoHomeOutline className="text-2xl" />
        )}
        <h2
          className={`text-center font-medium ${
            home ? "text-blue-500" : "text-black"
          }`}
        >
          Top stories
        </h2>
      </div>
      <div
        className="flex items-center justify-between flex-col hover:cursor-pointer"
        onClick={clockHandler}
      >
        {clock ? (
          <FaClock className="text-2xl text-blue-500" />
        ) : (
          <FaRegClock className="text-2xl" />
        )}
        <h2
          className={`text-center font-medium ${
            clock ? "text-blue-500" : "text-black"
          }`}
        >
          Latest
        </h2>
      </div>
    </div>
  );
}

export default Header;
