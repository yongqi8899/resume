import { memo } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "@/utils/motion.js";

const TiltCard = memo(({ children, animationDelay = 0.05 }) => (
  <Tilt
    options={{
      max: 20,
      scale: 1,
      speed: 45,
    }}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", 0.5, animationDelay)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] h-full shadow-card md:min-h-[400px]"
    >
      <div className="bg-neutral rounded-[20px] py-5 px-12 h-full min-h-[400px] flex justify-evenly items-center flex-col">
        {children}
      </div>
    </motion.div>
  </Tilt>
));

export default TiltCard;
