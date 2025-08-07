import Header from "../header/Header";
import { personalInfo } from "@/configs/common";
import ThemeToggle from "../theme/ThemeToggle";
import Footer from "../footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      <Header />
      <main>{children}</main>
      <div className="rounded-r-lg bg-primaryWhiteColor hidden md:flex fixed left-0 top-1/3 z-50 flex-col items-center gap-4 text-primaryTextColor  p-3  mr-2 shadow-lg">
        {personalInfo?.socialMediaLinks?.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondaryColor hover:border-secondaryColor transition p-2"
              aria-label={`Link to ${link.url}`}
            >
              <Icon className="w-8 h-8" />
            </a>
          );
        })}
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  );
};

export default MainLayout;
