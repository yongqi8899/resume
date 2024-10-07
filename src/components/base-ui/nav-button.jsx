import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavButton = ({ x, y, title, path, icon }) => {
  const { t } = useTranslation();
  return (
    <NavLink
      to={path}
      className="absolute z-50 flex items-center justify-center rounded-full cursor-pointer btn text-foreground"
      style={{ transform: `translate(${x},${y})` }}
      aria-label={title}
    >
      {t(`header.navLinks.${title}`)}
    </NavLink>
  );
};
export default NavButton;
