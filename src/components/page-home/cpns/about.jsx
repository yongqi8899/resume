import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { styles } from "@/styles";
import Typewriter from "typewriter-effect";
import { fadeIn } from "@/utils/motion.js";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col items-center md:items-start justify-center h-auto ${styles.paddingX} w-full m-auto `}
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
          to="https://drive.google.com/file/d/1e-gofJnmOP8PNmqduIcgPeIxLuM5n9qF/view?usp=drive_link"
          target="_blank"
          className="px-6 py-2 text-lg font-bold border border-violet-500 violet-gradient rounded-xl hover:bg-violet-500 hover:text-white"
        >
          {t("home.myCV")}
        </Link>
      </div>
    </div>
  );
};

export default About;
