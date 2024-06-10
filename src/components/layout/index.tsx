import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col flex-1 ">
      <NavBar />
      <Footer />
    </div>
  );
};

export default MainLayout;