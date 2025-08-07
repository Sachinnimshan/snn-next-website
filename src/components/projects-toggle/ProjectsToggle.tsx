import React from "react";

interface ProjectsToggleProps<T extends string> {
  options: { label: string; value: T }[];
  selectedValue: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
}

function ProjectsToggle<T extends string>({
  options,
  selectedValue,
  onChange,
}: ProjectsToggleProps<T>) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6 px-4">
      {options.map(({ label, value }) => (
        <button
          key={label}
          type="button"
          className={`px-5 py-2 rounded-lg font-semibold uppercase transition border-2 border-transparent text-sm sm:text-base ${
            selectedValue === value
              ? "bg-secondaryColor text-primaryWhiteColor shadow-lg"
              : "bg-contentBgColor text-thirdTextColor hover:border-secondaryColor hover:text-secondaryColor"
          }`}
          onClick={() => onChange(value)}
          aria-label={`Show ${label.toLowerCase()}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ProjectsToggle;
