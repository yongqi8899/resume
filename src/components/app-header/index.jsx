import { memo } from "react";

import LanguageSelector from "@/components/app-header/cpns/language-selector.jsx";
import ThemaSelector from "@/components/app-header/cpns/theme-selector.jsx";
import LogoSelector from "@/components/app-header/cpns/logo-selector.jsx";
import NavSelector from "@/components/app-header/cpns/nav-selector";

const Header = memo(() => {
  return (
    <header className="fixed top-0 z-50 text-xl navbar bold">
      <div className="flex-1 text-4xl ">
        <LogoSelector />
      </div>

      <nav className="flex-none">
        <ul className="gap-8 navbar">
          <NavSelector />
          <li>
            <LanguageSelector />
          </li>
          <li>
            <ThemaSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
});
export default Header;
