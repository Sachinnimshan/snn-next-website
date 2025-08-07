"use client";
import {
  useGetAcademicListQuery,
  useGetExperienceListQuery,
} from "@/api/webApiSlice";
import Loader from "@/components/loader/Loader";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

export default function AboutPage() {
  const { data: academics, isLoading: academicsLoading } =
    useGetAcademicListQuery();
  const { data: experiences, isLoading: experiencesLoading } =
    useGetExperienceListQuery(undefined);

  return (
    <PageWrapper title="About Me" description="Get to know me better">
      {academicsLoading || experiencesLoading ? (
        <Loader loading={academicsLoading || experiencesLoading} />
      ) : (
        <div className="mx-auto text-secondaryTextColor dark:text-gray-200 space-y-6 leading-relaxed font-medium text-sm sm:text-base md:text-lg text-justify">
          <p>
            I am a{" "}
            <span className="font-medium text-secondaryTextColor font-semibold">
              {experiences
                ? experiences[experiences.length - 1]?.jobTitle
                : "Software Engineer"}
            </span>{" "}
            deeply passionate about React development, frontend technologies,
            and delivering clean, intuitive UI/UX experiences. I hold a
            Second-Class
            <span className="text-secondaryTextColor font-semibold">
              {" "}
              {academics
                ? academics[0]?.title
                : "B.Sc (Hons) in Software Engineering"}
            </span>{" "}
            from{" "}
            <span className="text-secondaryTextColor font-semibold">
              {academics
                ? academics[0]?.university
                : "Cardiff Metropolitan University"}
            </span>
            .
          </p>

          <p>
            I have extensive experience developing commercial React-based
            applications for clients across{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              Sri Lanka, Dubai, United Kingdom, United States, Singapore
            </span>
            . My work spans diverse domains including e-commerce, tax
            management, social platforms, and IoT dashboards.
          </p>

          <p>
            Currently, I’m working at{" "}
            <span className="text-secondaryColor font-semibold uppercase">
              {experiences
                ? experiences[experiences.length - 1]?.companyName
                : "Zone 24 X 7"}
            </span>
            , where I contribute to building scalable, high-performance web
            applications using technologies like{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              React
            </span>
            ,{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              Redux
            </span>
            ,{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              TypeScript
            </span>
            , and{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              Node.js
            </span>
            , while also integrating cloud services such as{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              Azure
            </span>
            .
          </p>

          <p>
            Previously, I worked at{" "}
            <span className="text-secondaryColor">Spades App</span> and{" "}
            <span className="text-secondaryColor">Arimac</span>, where I played
            a key role in designing and developing frontend systems using the{" "}
            <span className="text-secondaryTextColor font-semibold uppercase">
              MERN stack
            </span>
            . I’ve built reusable component libraries, scalable design systems,
            and integrated complex RESTful APIs for enterprise applications.
          </p>

          <p>
            I take pride in writing clean, maintainable code with a focus on
            performance and accessibility. I love solving real-world problems
            through creative digital solutions and continuously evolving as a
            developer.
          </p>

          <p>
            Outside of tech, I enjoy{" "}
            <span className="text-secondaryTextColor font-semibold">
              fish keeping
            </span>
            ,{" "}
            <span className="text-secondaryTextColor font-semibold">
              watching cricket
            </span>
            , and I&#39;m proudly a{" "}
            <span className="text-secondaryTextColor font-semibold">
              dog person
            </span>
            . I also like working on personal side projects that fuse technology
            with creativity.
          </p>
        </div>
      )}
    </PageWrapper>
  );
}
