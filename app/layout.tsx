import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--nunito",
});

export const metadata: Metadata = {
  title: "Rest Countries | FrontendMentor",
  description: "Code challenge from frontend Mentore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${nunito.className} bg-veryLightGray-light dark:bg-veryDarkBlue-dark`}
        >
          <main>
            <div className="bg-white dark:bg-darkBlue-dark shadow-md">
              <div className=" flex flex-row justify-between items-center px-3 lg:px-0 py-1 w-full lg:w-9/12 h-16 mx-auto">
                <h1 className="text-xl font-bold text-darkBlue-dark dark:text-white">
                  Where in the world?
                </h1>
                <ThemeSwitcher />
              </div>
            </div>
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
