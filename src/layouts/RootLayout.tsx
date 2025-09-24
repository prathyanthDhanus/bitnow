import { Navbar } from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>


      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
