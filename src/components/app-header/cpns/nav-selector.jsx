import { NavLink } from "react-router-dom";
import { navLinks } from "@/constants/index.js";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const NavSelector = memo(() => {
  const { t } = useTranslation();
  return (
    
    navLinks &&
    navLinks.map((link) => {
      return (
        <div key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${isActive ? "text-secondary" : ""} text-xl btn btn-ghost `
            }
          >
            {t(`header.navLinks.${link.title}`)}
          </NavLink>
        </div>
      );
    })
  );
});
export default NavSelector;
