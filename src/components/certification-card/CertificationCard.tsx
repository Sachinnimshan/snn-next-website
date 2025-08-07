import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Certificate } from "@/types/certificate";
import truncateText from "@/utils/truncateText";

interface CertificationCardProps {
  certificate: Certificate;
  idx: number; // Index for animation delay
}

const CertificationCard = ({ certificate, idx }: CertificationCardProps) => {
  return (
    <div>
      <motion.div
        key={certificate.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.15 }}
        className="cursor-pointer bg-contentBgColor border-2 border-primaryWhiteColor rounded-xl shadow transition duration-300 p-6 flex flex-col gap-4 relative"
      >
        <div className="mt-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primaryTextColor mb-1">
            {certificate.title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-secondaryColor uppercase">
            {certificate.issuer}
          </p>
          <p className="text-xs sm:text-sm text-thirdTextColor font-medium mb-2 mt-1 uppercase">
            {certificate.date}
          </p>
          <p className="text-sm sm:text-base text-thirdTextColor mb-4">
            {truncateText(certificate.description, 175)}
          </p>
          {certificate.link ? (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase inline-flex text-xs sm:text-sm items-center gap-2 px-4 py-2 mt-2 bg-secondaryColor shadow hover:bg-secondaryTextColor text-primaryWhiteColor font-semibold rounded-lg transition shadow focus:outline-none"
            >
              View Certificate
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-block text-xs text-gray-400 italic mt-2">
              Certificate unavailable
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationCard;
