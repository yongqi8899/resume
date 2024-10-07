import { memo } from "react";
import { useTranslation } from "react-i18next";

import { styles } from "@/styles";
import { BsGithub } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";

import { projects } from "@/constants";
import TiltCard from "@/components/base-ui/tilt-card.jsx";


const Projects = memo(() => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}> {t("projects.MyWork")}</p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("projects.projects")}
        </h2>
      </div>

      <div className="flex w-full">
        <p>{t("projects.summary")}</p>
      </div>

      <div className="grid w-full gap-4 mx-auto justify-items-center md:grid-cols-3">
        {projects.map((project, index) => (
          <TiltCard key={`project-${index}`}>
            <div className="group">
              <div className="w-full h-[230px]">
                <img
                  src={project.image}
                  alt="project_image"
                  className="w-full"
                />
                <div className="absolute inset-0 flex justify-end gap-2 m-3 opacity-0 card-img_hover group-hover:opacity-100">
                  {project.source_code_link && (
                    <div
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                      className="flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer black-gradient"
                    >
                      <BsGithub size={40} />
                    </div>
                  )}
                  {project.deploy_link && (
                    <div
                      onClick={() => window.open(project.deploy_link, "_blank")}
                      className="flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer black-gradient"
                    >
                      <IoEarthOutline size={40} />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-[14px]">
                  {t(`projects.${project.name}`)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <p key={`${tag.name}`} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </>
  );
});

export default Projects;
