import { MdChevronRight } from "react-icons/md";
import DynamicIcon from "../dynamicIcon/DynamicIcon";

function SideNavItem({
  label,
  children,
  icon,
  id,
  showLabel = false,
  selectedMenu,
  setSelectedMenu,
  toggleMenu,
  openMenus,
}) {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div
        className={`flex items-center text-sm px-4 py-2 gap-1 cursor-pointer hover:bg-gray-100 ${
          selectedMenu === id ? "bg-gray-100" : ""
        }`}
        onClick={() => {
          children ? toggleMenu(id) : setSelectedMenu(id);
        }}
      >
        {showLabel && (
          <div className={`w-4 text-gray-400 ${openMenus[id] ? 'rotate-90' : ''}`}>
            {children ? <MdChevronRight size={18} /> : null}
          </div>
        )}
        <div className="flex items-center text-[#1C1C1C]">
          <DynamicIcon icon={icon} />
          {showLabel ? <div className="px-2">{label}</div> : null}
        </div>
      </div>
      <div className={`pl-4 transition-all duration-300 ${openMenus[id] ? 'min-h-10' : 'min-h-0'}`}>
        {children &&
          openMenus[id] === true &&
          children.map(({ label, icon, children, id }) => {
            return (
              <SideNavItem
                key={id}
                id={id}
                children={children}
                icon={icon}
                label={label}
                showLabel={showLabel}
                selectedMenu={selectedMenu}
                toggleMenu={toggleMenu}
                setSelectedMenu={setSelectedMenu}
                openMenus={openMenus}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SideNavItem;
