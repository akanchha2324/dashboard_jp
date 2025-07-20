import { useEffect, useState } from "react";
import {
  PiBellDuotone,
  PiClockCounterClockwiseDuotone,
  PiSidebar,
  PiSunDuotone,
} from "react-icons/pi";
import { AiTwotoneStar } from "react-icons/ai";
import { MdKeyboardCommandKey, MdSearch } from "react-icons/md";

function Header({ toggleSideNav, toggleRightPanel}) {
  const [search, setSearch] = useState();

  useEffect(() => {
    //Add  search logic
  }, [search]);
  return (
    <div className="w-full h-16 py-5 px-7 shadow-md flex items-center justify-between border-b border-gray-200">
      <div className="left_items flex items-center gap-1">
        <div className="actions flex gap-2 mr-4">
          <button className="border-none" onClick={toggleSideNav}>
            <PiSidebar size={20} />
          </button>
          <button className="border-none">
            <AiTwotoneStar size={20} />
          </button>
        </div>
        <div className="breadcrumb text-sm"><span className="text-gray-300"> Dashboard / </span> Default</div>
      </div>
      <div className="right_items flex items-center gap-1">
        <div className="search relative">
          <div className="input-icon absolute flex items-center left-3 top-2 text-gray-400">
            <MdSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 px-7 py-1 rounded-xl focus:outline-none text-[#1c1c1c]"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input-icon absolute flex items-center right-3 top-1 text-gray-400">
            <MdKeyboardCommandKey />
            <span>/</span>
          </div>
        </div>
        <div className="actions flex gap-2 ml-4">
          <button className="border-none">
            <PiSunDuotone size={20} />
          </button>
          <button className="border-none">
            <PiClockCounterClockwiseDuotone size={20} />
          </button>
          <button className="border-none">
            <PiBellDuotone size={20} />
          </button>
          <button className="border-none" onClick={toggleRightPanel}>
            <PiSidebar size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
