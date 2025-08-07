"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as DiIcons from "react-icons/di";
import { FaClock } from "react-icons/fa";
import { useState } from "react";
import SkillToggle from "@/components/skill-toggle/SkillToggle";
import { useGetSkillListQuery } from "@/api/webApiSlice";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Loader from "@/components/loader/Loader";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const IconMapping = {
  ...SiIcons,
  ...FaIcons,
  ...TbIcons,
  ...DiIcons,
};

const levelColors: Record<string, string> = {
  Beginner: "bg-gray-400 text-white",
  Intermediate: "bg-yellow-500 text-white",
  Advanced: "bg-green-600 text-white",
};
const levels = ["Advanced", "Intermediate", "Beginner"] as const;

const SkillsPage = () => {
  const { data: skills, isLoading } = useGetSkillListQuery();
  const [selectedLevels, setSelectedLevels] = useState<string[]>([...levels]);

  // Toggle level in filter list
  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  // Filter skills based on selectedLevels
  const filteredSkills =
    skills?.filter((skill) => selectedLevels.includes(skill.level)) || [];

  return (
    <PageWrapper
      title="Skills"
      description="My skills and technologies I work with"
    >
      <SkillToggle
        selectedLevels={selectedLevels}
        toggleLevel={toggleLevel}
        levels={levels}
        levelColors={levelColors}
      />
      <motion.div
        className="flex flex-wrap gap-4 sm:gap-5 md:gap-2 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {isLoading ? (
          <Loader loading={isLoading} />
        ) : (
          filteredSkills?.map(({ name, icon, level, yearsOfExperience }) => {
            const IconComponent = IconMapping[icon as keyof typeof IconMapping];

            const levelClass =
              levelColors[level] ||
              "bg-primaryWhiteColor text-primaryTextColor";

            return (
              <motion.div
                key={name}
                className="
                  relative  
                  bg-contentBgColor
                  flex flex-col items-center gap-1 sm:gap-1
                  border-2 p-3 sm:p-4 md:p-5
                  rounded-lg
                  hover:border-secondaryColor hover:text-secondaryColor
                  transition-colors cursor-pointer
                  justify-center
                  border-primaryWhiteColor
                  text-thirdTextColor
                  box-border
                  shadow-sm
                  min-w-[100px]
                "
                variants={chipVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {IconComponent ? (
                  <IconComponent
                    className="text-secondaryColor bg-primaryWhiteColor rounded-lg p-2"
                    size={30}
                    style={{ minWidth: 48, minHeight: 48 }}
                    aria-label={`${name} icon`}
                  />
                ) : (
                  <div className="w-8 h-8" aria-hidden="true" />
                )}
                <span className="text-sm sm:text-sm font-semibold uppercase text-center">
                  {name}
                </span>

                <span
                  className={`px-2 py-1 text-xs rounded-lg font-medium select-none ${levelClass}`}
                  title={`Skill Level: ${level}`}
                  aria-label={`Skill level: ${level}`}
                >
                  {level}
                </span>

                <div
                  className="flex items-center gap-1 text-xs text-gray-400"
                  aria-label={`Years of experience: ${yearsOfExperience}`}
                >
                  <FaClock size={14} aria-hidden="true" />
                  <span>
                    {yearsOfExperience}{" "}
                    {yearsOfExperience === 1 ? "year" : "years"}
                  </span>
                </div>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </PageWrapper>
  );
};

export default SkillsPage;
