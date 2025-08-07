import React from "react";
import { motion } from "framer-motion";
import { IoTProject } from "@/configs/iot";
import truncateText from "@/utils/truncateText";

interface IotProjectProps {
  project: IoTProject;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const IotProjectCard: React.FC<IotProjectProps> = ({ project, index }) => {
  return (
    <motion.article
      className="bg-contentBgColor rounded-lg border-2 border-primaryWhiteColor shadow p-6 cursor-default flex flex-col"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      tabIndex={0}
      aria-label={`${project.title} IoT project`}
    >
      <h3 className="text-xl font-semibold text-primaryTextColor mb-1">
        {project.title}
      </h3>
      <p className="text-secondaryTextColor text-sm mb-3 font-medium">
        {project.period}
      </p>

      <p className="text-secondaryTextColor flex-grow mb-4 leading-relaxed text-base">
        {truncateText(project.description)}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs uppercase bg-secondaryBgColor text-thirdTextColor px-3 py-1 rounded-full font-semibold shadow-sm transition hover:bg-secondaryColor hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default IotProjectCard;
