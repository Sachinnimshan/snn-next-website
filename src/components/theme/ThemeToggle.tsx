import { useSelector, useDispatch } from "react-redux";
import { MdOutlinePalette } from "react-icons/md";
import { THEME_COLORS } from "@/utils/theme";
import { AppDispatch, RootState } from "@/store/store";
import { setSecondaryColor } from "@/api/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );

  const colors = Object.values(THEME_COLORS);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    dispatch(setSecondaryColor(colors[nextIndex]));
    document.documentElement.style.setProperty(
      "--secondary-color",
      colors[nextIndex]
    );
  };

  return (
    <div className="p-2 bg-white rounded-l-lg shadow-lg fixed top-1/3 right-0 z-[3000]">
      <button
        onClick={toggleColor}
        aria-label="Toggle secondary color"
        className="flex items-center justify-center w-12 h-12 rounded-lg shadow-lg transition-colors duration-300 ease-in-out focus:shadow-outline text-white cursor-pointer bg-secondaryColor"
      >
        <MdOutlinePalette size={24} aria-hidden="true" />
      </button>
    </div>
  );
};

export default ThemeToggle;
