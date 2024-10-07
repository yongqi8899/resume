import { NavLink } from "react-router-dom";
import { navLinks } from "@/constants/index.js";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaUser,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsPalette } from "react-icons/bs";
import { SiHyperskill } from "react-icons/si";
import { PiNotebookThin } from "react-icons/pi";


const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <FaHome size={30}/>;
    case "about":
      return <FaUser size={30}/>;
    case "projects":
      return <BsPalette size={30}/>;
    case "contact":
      return <FaPhoneAlt size={30}/>;
    case "github":
      return <FaGithub size={30}/>;
    case "linkedin":
      return <FaLinkedinIn size={30}/>;
    case "skills":
      return <SiHyperskill size={30}/>;
    case "CV":
      return <PiNotebookThin size={30}/>;

    default:
      return <FaHome size={30}/>;
  }
};
const NavSelector = memo(() => {
  const { t } = useTranslation();
  const angleIncrement = 360 / navLinks.length;
  return (
    <div className="fixed flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-between w-max">
        {navLinks.map((link, index) => {
          const angleRad = (angleIncrement * index * Math.PI) / 180;
          const radius = `calc(25vw - 1rem)`;
          const x = `calc(${radius} * cos(${angleRad}))`;
          const y = `calc(${radius} * sin(${angleRad}))`;

          return (
            <NavLink
              key={link.id}
              to={link.path}
              className="absolute"
              style={{ transform: `translate(${x}, ${y})` }}
            >
              {/* {t(`header.navLinks.${link.title}`)} */}
              {getIcon(link.icon)}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
});

export default NavSelector;
