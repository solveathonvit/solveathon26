import "./globals.css";
import { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import ClientBackground from "@/components/ClientBackground";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Solve-A-Thon'26",
    template: "%s | Solve-A-Thon'26",
  },
  description:
    "Solve-A-Thon'26 is a 24-hour inter-hostel hackathon hosted by VIT Chennai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${jetbrainsMono.variable} relative min-h-dvh`}
      >
        <ClientBackground />
        <div className="relative z-10 min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
