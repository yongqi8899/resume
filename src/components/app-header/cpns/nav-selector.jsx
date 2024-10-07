import { NavLink } from "react-router-dom";
import { navLinks } from "@/constants/index.js";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { SiHyperskill } from "react-icons/si";

const getIcon = (icon) => {
  switch (icon) {
    case "projects":
      return <BsPalette size={30} />;
    case "contact":
      return <FaPhoneAlt size={30} />;
    case "skills":
      return <SiHyperskill size={30} />;
    default:
      return <FaHome size={30} />;
  }
};

const NavSelector = memo(() => {
  const { t } = useTranslation();
  return (
    navLinks &&
    navLinks.map((link) => {
      return (
        <div key={link.id} className="relative group">
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${isActive ? "text-secondary" : ""} text-xl btn btn-ghost flex flex-col items-center`
            }
          >
            {getIcon(link.icon)}
          </NavLink>
          <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded">
            {t(`header.navLinks.${link.title}`)}
          </span>
        </div>
      );
    })
  );
});

export default NavSelector;
