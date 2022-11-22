import Navbar from "../fragments/navbar/Navbar";
import SubNavbar from "../fragments/navbar/subNavbar/SubNavbar";
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-11"></div>
      <SubNavbar />
      {children}
    </>
  );
};

export default MainLayout;
