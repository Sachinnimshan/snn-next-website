// ClientProvider.tsx
"use client";

import MainLayout from "@/components/layouts/MainLayout";
import ThemeUpdater from "@/components/theme/ThemeUpdater";
import ReduxProvider from "@/store/provider";
import { persistor } from "@/store/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeUpdater>
          <MainLayout>{children}</MainLayout>
        </ThemeUpdater>
      </PersistGate>
    </ReduxProvider>
  );
}
