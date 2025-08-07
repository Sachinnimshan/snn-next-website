"use client";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdArrowDropright } from "react-icons/io";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Loader from "@/components/loader/Loader";
import { APP_COLORS } from "@/utils/theme";
import { useGetExperienceListQuery } from "@/api/webApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ExperiencePage = () => {
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );
  const { data: experiences, isLoading } = useGetExperienceListQuery(undefined);

  return (
    <PageWrapper
      title="Work Experience"
      description="Professional roles and experiences over time"
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <VerticalTimeline lineColor={APP_COLORS.PRIMARY_WHITE_COLOR}>
          {experiences
            ?.slice()
            .sort(
              (a, b) =>
                new Date(b.start).getTime() - new Date(a.start).getTime() // Sort descending (latest first)
            )
            .map((item) => (
              <VerticalTimelineElement
                key={item._id}
                date={`${new Date(item.start).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })} - ${
                  item.current
                    ? "Present"
                    : item.ends
                    ? new Date(item.ends).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })
                    : "Present"
                }`}
                iconStyle={{
                  background: selectedColor,
                  color: APP_COLORS.PRIMARY_WHITE_COLOR,
                  opacity: item.current ? 1 : 0.5,
                }}
                icon={<FaBriefcase />}
                contentStyle={{
                  background: APP_COLORS.CONTENT_BACKGROUND_COLOR,
                  color: APP_COLORS.PRIMARY_TEXT_COLOR,
                  borderTop: item.current
                    ? `0.5rem solid ${selectedColor}`
                    : "none",
                  borderRadius: "12px",
                  padding: "1.5rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: `5px solid ${APP_COLORS.CONTENT_BACKGROUND_COLOR}`,
                }}
                dateClassName="text-primaryTextColor font-bold dark:text-gray-200"
              >
                <h3 className="text-lg font-bold text-primaryTextColor">
                  {item.jobTitle}
                </h3>
                <h4 className="text-md font-semibold text-secondaryColor uppercase">
                  {item.companyName}
                </h4>
                <ul className="text-base text-thirdTextColor dark:text-gray-300 mt-2 mb-5 space-y-2">
                  {item.keyroles?.map(
                    (point, idx) =>
                      point && (
                        <li key={idx} className="flex items-center gap-2">
                          <IoMdArrowDropright className="text-secondaryColor flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      )
                  )}
                </ul>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      )}
    </PageWrapper>
  );
};

export default ExperiencePage;
