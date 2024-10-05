import { memo } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "@/utils/motion.js";
import { technologies } from "@/constants";

const Tech = () => (
  <div className="grid w-full gap-4 mx-auto justify-items-center md:grid-cols-3">

    {technologies &&
      Object.keys(technologies).map((key, index) => (
        <Tilt
          key={index}
          className="xs:w-[250px] w-full"
        >
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.05)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card md:min-h-[400px]"
          >
            <div
              options={{
                max: 20,
                scale: 1,
                speed: 45,
              }}
              className="bg-neutral rounded-[20px] py-5 px-12 min-h-[400px] flex justify-evenly items-center flex-col"
            >
              <h2 className="text-2xl font-bold">
                {key}
              </h2>{" "}
              <div className="flex flex-wrap justify-center gap-4">
                {technologies[key].map((tech) => (
                  <div className="bg-white">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    key={tech.title}
                    className="object-contain w-16 h-16"
                  />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
  </div>
);
export default Tech;
