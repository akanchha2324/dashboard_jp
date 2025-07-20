import { useState } from "react";
import Header from "./layouts/Header";
import Sidebar from "./layouts/SideNav";
import Main from "./layouts/Main";
import RightPanel from "./layouts/RightPanel";
import { ACTIVITIES, CONTACTS, NOTIFICATIONS } from "./mocks";
import "./App.css";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  return (
    <>
      <div className="app flex min-h-screen">
        <div
          className={`${
            isSideNavOpen ? "w-60" : "w-12"
          } transition-all duration-300`}
        >
          <Sidebar isCollapsed={!isSideNavOpen} />
        </div>
        <section className="flex-1 flex flex-col h-screen">
          <Header
            toggleSideNav={() => setIsSideNavOpen((prev) => !prev)}
            toggleRightPanel={() => setIsRightPanelOpen((prev) => !prev)}
          />
          <div className="overflow-y-scroll">
            <Main />
          </div>
        </section>
        <div
          className={`${
            isRightPanelOpen ? "w-80" : "w-0"
          } transition-all duration-300`}
        >
          <RightPanel
            isCollapsed={!isRightPanelOpen}
            activities={ACTIVITIES}
            contacts={CONTACTS}
            notifications={NOTIFICATIONS}
          />
        </div>
      </div>
    </>
  );
}

export default App;
