import { NavLink } from "react-router-dom";
import { memo } from "react";

const LogoSelector = memo(() => {
  return (
    <NavLink to="/">
      <h1 >Yongqi Zhang</h1>
    </NavLink>
  );
});
export default LogoSelector;
