import { APP_COLORS } from "./src/utils/theme";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', ...fontFamily.sans],
      source: ['"Source Sans Pro"', ...fontFamily.sans],
      signature: ["Kaushan Script", "cursive"],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "triangle-bg":
          "linear-gradient(to right, rgba(245, 245, 245, 0.7), rgba(245, 245, 245, 0.7)), url('/assets/common-bg.svg')",
      },
      colors: {
        secondaryColor: "var(--secondary-color)",
        mainBgColor: APP_COLORS.MAIN_BG_COLOR,
        primaryWhiteColor: APP_COLORS.PRIMARY_WHITE_COLOR,
        secondaryWhiteColor: APP_COLORS.SECONDARY_WHITE_COLOR,
        secondaryBgColor: APP_COLORS.SECONDARY_BG_COLOR,
        primaryTextColor: APP_COLORS.PRIMARY_TEXT_COLOR,
        secondaryTextColor: APP_COLORS.SECONDARY_TEXT_COLOR,
        thirdTextColor: APP_COLORS.THIRD_TEXT_COLOR,
        contentBgColor: APP_COLORS.CONTENT_BACKGROUND_COLOR,
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
