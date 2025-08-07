"use client";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMedalOutline } from "react-icons/io5";
import { RootState } from "@/store/store";
import { APP_COLORS } from "@/utils/theme";
import Loader from "@/components/loader/Loader";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import { useGetAcademicListQuery } from "@/api/webApiSlice";
import { FaGraduationCap } from "react-icons/fa";

const AcademicsPage = () => {
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );
  const { data, isLoading } = useGetAcademicListQuery();

  return (
    <PageWrapper
      title="Academic Qualifications"
      description="My academic background and qualifications"
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <VerticalTimeline lineColor={APP_COLORS.PRIMARY_WHITE_COLOR}>
          {data?.map((item) => (
            <VerticalTimelineElement
              visible
              key={item._id}
              date={`${new Date(item.start).getFullYear()} - ${new Date(
                item.ends
              ).getFullYear()}`}
              iconStyle={{
                background: selectedColor,
                color: APP_COLORS.PRIMARY_WHITE_COLOR,
              }}
              icon={<FaGraduationCap aria-label="Graduation cap icon" />}
              contentStyle={{
                background: APP_COLORS.CONTENT_BACKGROUND_COLOR,
                color: APP_COLORS.PRIMARY_TEXT_COLOR,
                borderTop: `0.5rem solid ${selectedColor}`,
                borderRadius: "12px",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${APP_COLORS.MAIN_BG_COLOR}`,
              }}
              className="dark:bg-gray-900 dark:text-gray-100"
              dateClassName="text-primaryTextColor dark:text-secondaryColor font-semibold"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-primaryTextColor">
                {item.title} / {item.grade}
              </h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cardiffmet.ac.uk/"
                className="text-secondaryColor inline-flex items-center gap-2 py-2 rounded-lg font-semibold uppercase text-sm cursor-pointer"
                aria-label={`University: ${item.university}`}
              >
                <IoMedalOutline size={20} aria-hidden="true" />
                {item.university}
              </a>
              <ul className="text-base text-thirdTextColor dark:text-gray-300 space-y-3 mb-6">
                {item?.syllabus.map(
                  (point, idx) =>
                    point && (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                        aria-label={`Syllabus point: ${point}`}
                      >
                        <IoMdArrowDropright
                          className="text-secondaryColor flex-shrink-0 mt-1"
                          size={20}
                          aria-hidden="true"
                        />
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

export default AcademicsPage;
