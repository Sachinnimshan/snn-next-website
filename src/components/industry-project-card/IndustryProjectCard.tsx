import { CommercialProject } from "@/types/projects";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

interface IndustryProjectCardProps {
  project: CommercialProject;
  i: number;
}

const IndustryProjectCard = ({ project, i }: IndustryProjectCardProps) => {
  return (
    <motion.div
      className="bg-contentBgColor rounded-lg border-2 border-primaryWhiteColor shadow-md p-6 cursor-default flex flex-col"
      custom={i}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      tabIndex={0}
      role="article"
      aria-label={`${project.title} commercial project`}
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-primaryTextColor">
            {project.title}
          </h3>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-base text-secondaryColor font-semibold uppercase mt-1 inline-flex items-center gap-2"
          >
            {project.client} <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </a>
        </div>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} logo`}
            className="w-16 h-16 object-contain rounded-md"
            loading="lazy"
          />
        )}
      </div>

      <p className="text-secondaryTextColor text-xs sm:text-sm mb-3">
        {project.period}
      </p>

      {/* Tasks list with icon bullets */}
      <ul className="text-secondaryTextColor text-sm sm:text-base leading-relaxed flex-grow mb-4 space-y-2">
        {project.tasks.map((task, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <IoMdArrowDropright className="mt-1 min-w-[1.25rem] text-secondaryColor flex-shrink-0" />
            <span>{task}</span>
          </li>
        ))}
      </ul>

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
    </motion.div>
  );
};

export default IndustryProjectCard;
