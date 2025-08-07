"use client";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";

interface ThemeUpdaterProps {
  children: ReactNode;
}

const ThemeUpdater: React.FC<ThemeUpdaterProps> = ({ children }) => {
  const secondaryColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--secondary-color",
      secondaryColor
    );
  }, [secondaryColor]);

  return <>{children}</>;
};

export default ThemeUpdater;
