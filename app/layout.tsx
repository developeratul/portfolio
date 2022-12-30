import { JetBrains_Mono } from "@next/font/google";
import clsx from "clsx";

import { Footer } from "@/components/common/Footer";
import { Nav } from "@/components/common/Nav";
import { Toaster } from "@/components/Feedback/Toaster";
import { ColorMode } from "@/providers/ColorMode";
import { SectionRefProvider } from "@/providers/SectionRef";
import type { AppProps } from "@/types";

import "../styles/globals.css";
import { AnalyticsWrapper } from "./AnalyticsWrapper";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  display: "auto",
  fallback: ["monospace"],
});

export default async function RootLayout(props: AppProps) {
  const { children } = props;
  return (
    <html className={clsx(jetbrainsMono.variable)} lang="en">
      <body className="h-screen w-screen overflow-x-hidden bg-white font-mono font-normal text-gray-900 dark:bg-background-500 dark:text-gray-50">
        <ColorMode>
          <Toaster />
          <main>
            <SectionRefProvider>
              <Nav />
              <div>
                {children}
                <AnalyticsWrapper />
              </div>
            </SectionRefProvider>
          </main>
          <Footer />
        </ColorMode>
      </body>
    </html>
  );
}
