import { personalInfo } from "@/configs/common";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="bg-primaryTextColor backdrop-blur-md text-gray-300 text-center py-4 select-none text-sm font-small"
    >
      <div className="flex items-center justify-center gap-2">
        <AiOutlineCopyright size={16} />
        <span className="text-gray-400">{currentYear}</span>
        <span className="font-signature">{personalInfo.name}</span>
        <span className="text-gray-400">All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
