import { Md3dRotation } from "react-icons/md";
import About from "@/components/page-home/cpns/about.jsx";
import ComMe from "@/components/page-home/cpns/me.jsx";

const Hero = () => {
  return (
    <section
      className={`flex flex-col items-center  md:flex-row w-full min-h-screen  m-auto md:justify-evenly md:items-center `}
    >
      <About />
      <div className="relative z-20 flex flex-col w-full h-screen">
        <div className="min-w-[400px] min-h-[400px] h-full touch-auto">
          <ComMe />
        </div>
        <div className="absolute top-20 left-10 z-1 h-2rem">
          <Md3dRotation className="w-10 h-10 text-[#915EFF]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;