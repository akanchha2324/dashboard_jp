import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/SideNav";
import Header from "./layouts/Header";
import "./App.css";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  return (
    <>
      <div className="app flex min-h-screen">
        <div
          className={`${
            isSideNavOpen ? "w-64" : "w-12"
          } transition-all duration-300`}
        >
          <Sidebar collapsed={!isSideNavOpen} />
        </div>
        <section className="flex-1 flex flex-col">
          <Header toggleSideNav={() => setIsSideNavOpen((prev) => !prev)} />
          <MainLayout />
        </section>
      </div>
    </>
  );
}

export default App;
