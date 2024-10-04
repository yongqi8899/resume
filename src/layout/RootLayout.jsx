import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/app-header/index.jsx";
import NavMobil from "@/components/app-header/NavMobil.jsx";
import Footer from "@/components/app-footer/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const RootLayout = memo(() => {
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <NavMobil />
      </div>

      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <div className="container mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
});
export default RootLayout;
