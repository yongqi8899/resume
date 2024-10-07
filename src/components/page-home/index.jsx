import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styles } from "@/styles";
import ComMe from "@/components/page-home/cpns/ComMe.jsx";
import { Md3dRotation } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { fadeIn } from "@/utils/motion.js";
import NavSelector from "@/components/app-header/cpns/nav-selector.jsx";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-screen h-screen ">
      <div >
        <NavSelector />
      </div>
      <div className="w-screen h-screen">
        <ComMe /> 
      </div>
    </section>
  );
};

export default Hero;
