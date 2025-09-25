import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default RootLayout;
