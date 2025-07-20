import React, { useState } from "react";

import { MdAccountCircle, MdChevronRight } from "react-icons/md";
import SideNavItem from "../components/sideNavItem/SideNavItem";
import { SIDE_NAV_ITEMS } from "../constant";

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [selectedMenu, setSelectedMenu] = useState("");

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  function toggleMenu(menu) {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  }

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 bg-white h-screen shadow-md flex flex-col z`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="avatar">
            <MdAccountCircle size={20} />
          </div>
          {!collapsed && (
            <span className="pl-2 text-sm/5 text-[#1C1C1C]">ByeWind</span>
          )}
        </div>

        <button
          onClick={toggleCollapsed}
          className={`text-gray-500 ml-auto ${!collapsed ? "rotate-180" : ""}`}
        >
          <MdChevronRight size={20} />
        </button>
      </div>
      <div>
        {SIDE_NAV_ITEMS.map(({ label, id, items }) => {
          return (
            <div key={id}>
              <div
                className={`text-xs text-gray-400 px-4 mt-4 mb-2 ${
                  collapsed ? "h-4" : ""
                }`}
              >
                {!collapsed ? label : ""}
              </div>
              {items.map(({ label, icon, id, children }) => {
                return (
                  <SideNavItem
                    key={id}
                    id={id}
                    selectedMenu={selectedMenu}
                    showLabel={!collapsed}
                    icon={icon}
                    label={label}
                    children={children}
                    toggleMenu={toggleMenu}
                    setSelectedMenu={setSelectedMenu}
                    openMenus={openMenus}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
