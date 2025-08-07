interface SkillToggleProps {
  selectedLevels: string[];
  toggleLevel: (level: string) => void;
  levels: readonly string[];
  levelColors: Record<string, string>;
}
const SkillToggle: React.FC<SkillToggleProps> = ({
  selectedLevels,
  toggleLevel,
  levels,
  levelColors,
}) => {
  return (
    <div className="flex justify-center mb-6">
      {levels.map((level, index) => {
        const isActive = selectedLevels.includes(level);
        const isFirst = index === 0;
        const isLast = index === levels.length - 1;

        return (
          <button
            key={level}
            onClick={() => toggleLevel(level)}
            className={`
              text-sm uppercase px-4 py-2 font-semibold focus:outline-none transition-colors border
              ${
                isActive
                  ? levelColors[level]
                  : "bg-contentBgColor text-thirdTextColor hover:bg-gray-300"
              }
              ${
                isFirst
                  ? "rounded-l-lg border-r-0"
                  : isLast
                  ? "rounded-r-lg"
                  : "rounded-none border-r-0"
              }
              `}
          >
            {level}
          </button>
        );
      })}
    </div>
  );
};

export default SkillToggle;
