import { JetBrains_Mono } from "@next/font/google";
import clsx from "clsx";

import { Nav } from "@/components/client/Nav";
import type { AppProps } from "@/types";

import "../styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  display: "auto",
  fallback: ["monospace"],
});

export default async function RootLayout(props: AppProps) {
  const { children } = props;
  return (
    <html className={clsx("dark", jetbrainsMono.variable)} lang="en">
      <body className="bg-background-50 font-mono font-normal text-gray-900 dark:bg-background-500 dark:text-gray-50">
        <main>
          <Nav />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
