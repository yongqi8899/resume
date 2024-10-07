import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/app-header/index.jsx";
import NavMobil from "@/components/app-header/NavMobil.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const RootLayout = memo(() => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden h-20 md:block">
        <Header />
      </div>
      <div className="block h-20 md:hidden">
        <NavMobil />
      </div>

      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <div className="container w-screen px-4 m-auto md:px-10">
        <Outlet />
      </div>
    </div>
  );
});
export default RootLayout;
