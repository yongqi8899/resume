import { useState, memo } from "react";
import Hamburger from "hamburger-react";

import LanguageSelector from "@/components/app-header/cpns/language-selector.jsx";
import ThemaSelector from "@/components/app-header/cpns/theme-selector.jsx";
import LogoSelector from "@/components/app-header/cpns/logo-selector.jsx";
import NavSelector from "@/components/app-header/cpns/nav-selector";

const NavMobil = memo(() => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex gap-8 text-xl navbar bold font-redressed bg-neutral">
      <div className="flex-1 text-2xl">
        <LogoSelector />
      </div>
      <LanguageSelector />
      <ThemaSelector />
      <div className="z-20 ">
        <Hamburger
          size={34}
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          duration={0.9}
        />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-full gap-8 text-xl text-center z-199 bg-neutral"
          onClick={() => setOpen(false)}
        >
          <NavSelector />
        </div>
      )}
    </header>
  );
});
export default NavMobil;
