import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import "../assets/css/layout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <TopNavbar />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 card main-content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
