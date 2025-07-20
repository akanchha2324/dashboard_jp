import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import SideNavItem from "../components/sideNavItem/SideNavItem";
import { SIDE_NAV_ITEMS } from "../constant";

function SideNav({ isCollapsed }) {
  const [openMenus, setOpenMenus] = useState({});
  const [selectedMenu, setSelectedMenu] = useState("");
  const navigate = useNavigate();
  function toggleMenu(menu) {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  }

  function handleMenuClick({ id, path }) {
    setSelectedMenu(id);
    if (path) {
      navigate(path);
    }
  }

  return (
    <div
      className={`bg-white h-screen shadow-md flex flex-col ${
        !isCollapsed ? "w-60" : "w-12"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="avatar">
            <MdAccountCircle size={20} />
          </div>
          {!isCollapsed && (
            <span className="pl-2 text-sm/5 text-[#1C1C1C]">Akanchha</span>
          )}
        </div>
      </div>
      <div>
        {SIDE_NAV_ITEMS.map(({ label, id, items }) => {
          return (
            <div key={id}>
              <div
                className={`text-xs text-gray-400 px-4 mt-4 mb-2 ${
                  isCollapsed ? "h-4" : ""
                }`}
              >
                {!isCollapsed ? label : ""}
              </div>
              {items.map(({ label, icon, id, children, path }) => {
                return (
                  <SideNavItem
                    key={id}
                    id={id}
                    selectedMenu={selectedMenu}
                    showLabel={!isCollapsed}
                    icon={icon}
                    label={label}
                    children={children}
                    toggleMenu={toggleMenu}
                    setSelectedMenu={handleMenuClick}
                    openMenus={openMenus}
                    path={path}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
