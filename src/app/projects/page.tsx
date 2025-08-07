"use client";
import {
  useLazyGetIndustryProjectListQuery,
  useLazyGetProjectListQuery,
} from "@/api/webApiSlice";
import IndustryProjectCard from "@/components/industry-project-card/IndustryProjectCard";
import IotProjectCard from "@/components/iot-card/IotProjectCard";
import Loader from "@/components/loader/Loader";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import ProjectCard from "@/components/project-card/ProjectCard";
import ProjectsToggle from "@/components/projects-toggle/ProjectsToggle";
import { iotProjects } from "@/configs/iot";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projectCategory, setProjectCategory] = useState<
    "commercial" | "personal" | "iot"
  >("commercial");
  const [
    triggerPersonalProjects,
    { data: personalProjects, isLoading: isLoadingProjects },
  ] = useLazyGetProjectListQuery(undefined);
  const [
    triggerIndustryProjects,
    { data: industryProjects, isLoading: isLoadingIndustryProjects },
  ] = useLazyGetIndustryProjectListQuery();

  const isLoading =
    (projectCategory === "commercial" && isLoadingIndustryProjects) ||
    (projectCategory === "personal" && isLoadingProjects);

  useEffect(() => {
    if (projectCategory === "personal") {
      triggerPersonalProjects();
    }
    if (projectCategory === "commercial") {
      triggerIndustryProjects();
    }
  }, [projectCategory, triggerPersonalProjects, triggerIndustryProjects]);

  return (
    <PageWrapper
      title={
        (projectCategory === "commercial"
          ? "Commercial"
          : projectCategory === "personal"
          ? "Personal"
          : "IoT") + " Projects"
      }
      description="Explore my projects"
    >
      <ProjectsToggle
        options={[
          { label: "Commercial", value: "commercial" },
          { label: "Personal", value: "personal" },
          { label: "IoT", value: "iot" },
        ]}
        selectedValue={projectCategory}
        onChange={setProjectCategory}
      />

      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {projectCategory === "commercial" &&
            industryProjects?.map((project, i) => (
              <IndustryProjectCard key={project.id} project={project} i={i} />
            ))}

          {projectCategory === "personal" &&
            personalProjects?.map((project, i) => (
              <ProjectCard key={project._id} project={project} i={i} />
            ))}

          {projectCategory === "iot" &&
            iotProjects.map((project, i) => (
              <IotProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
      )}
    </PageWrapper>
  );
}
