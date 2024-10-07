import { memo } from "react";
import { technologies } from "@/constants";
import TiltCard from "@/components/base-ui/tilt-card.jsx";

const Tech = memo(() => (
  <div className="grid w-full gap-4 mx-auto justify-items-center md:grid-cols-3">
    {technologies &&
      Object.keys(technologies).map((key, index) => (
        <TiltCard key={index} animationDelay={0.05 * index}>
          <h2 className="text-2xl font-bold">{key}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies[key].map((tech,index) => (
              <div className="bg-white"  key={`${index}${tech.name}`}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="object-contain w-16 h-16"
                />
              </div>
            ))}
          </div>
        </TiltCard>
      ))}
  </div>
));

export default Tech;
