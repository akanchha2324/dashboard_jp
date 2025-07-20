import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/SideNav";
import "./App.css";

function App() {
  return (
    <>
      <div className="app flex">
        <Sidebar/>
        <MainLayout />
      </div>
    </>
  );
}

export default App;
