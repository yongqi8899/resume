import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

import { styles } from "@/styles";
import { github, internet } from "@/assets";
import { projects } from "@/constants";

const ProjectCard = ({
  name,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
  const { t } = useTranslation();
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-neutral p-5 rounded-2xl sm:w-[360px] w-full  group"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt="project_image" className="w-full" />
        <div className="absolute inset-0 flex justify-end gap-2 m-3 opacity-0 card-img_hover group-hover:opacity-100">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={github}
                alt="source code"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          )}
          {deploy_link && (
            <div
              onClick={() => window.open(deploy_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={internet}
                alt="source code"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-[14px]">{t(`projects.${name}`)}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>  {t("projects.MyWork")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projects.projects")}</h2>
      </div>

      <div className="flex w-full">
        <p
        >
          {t("projects.summary")}
        </p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
