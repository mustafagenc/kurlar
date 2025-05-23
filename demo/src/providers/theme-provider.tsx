"use client";

import type * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children} <Analytics />
    <SpeedInsights /></NextThemesProvider>;
}
