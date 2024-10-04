import { Link } from "react-router-dom";

import { styles } from "@/styles";
import ComMe from "@/components/page-home/cpns/ComMe.jsx";

import Typewriter from "typewriter-effect";
import { rotation } from "@/assets";
import { fadeIn } from "@/utils/motion.js";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className={`flex flex-col items-center  md:flex-row w-full min-h-screen  m-auto md:justify-evenly md:items-center `}
    >
      <div
        className={`flex flex-col items-center md:items-start justify-center h-auto ${styles.paddingX} w-full m-auto pt-[5rem] md:mt-0`}
      >
        <h1 className={`${styles.heroHeadText} z-5`}>
          <span>{t("home.iAm")} </span>{" "}
          <span className="text-[#915EFF]">{t("home.name")}</span>
        </h1>
        <div className="flex text-3xl">
          <span className="text-[#915EFF]">
            <Typewriter
              options={{
                strings: t("home.roles", { returnObjects: true }),
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        {
          <p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 max-w-3xl leading-[1.5rem]"
          >
            {t("home.description")}
          </p>
        }
        <div className="mt-10 ">
          <Link
            to="https://drive.google.com/file/d/1GiFE2E8CqymL9VI-S9CReX6XQD7e8ou3/view?usp=drive_link"
            target="_blank"
            className="px-6 py-2 text-lg font-bold border border-violet-500 violet-gradient rounded-xl hover:bg-violet-500 hover:text-white"
          >
            {t("home.myCV")}
          </Link>
        </div>
      </div>
      <div className="relative z-20 flex flex-col w-full h-screen">
        <div className="min-w-[400px] min-h-[400px] h-full touch-auto">
          <ComMe />
        </div>
        <div className="absolute top-20 left-10 z-1 h-2rem">
          <img src={rotation} alt="rotation"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
