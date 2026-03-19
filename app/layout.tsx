import "./globals.css";
import { Metadata } from "next";
import ClientBackground from "@/components/ClientBackground";

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
      <body suppressHydrationWarning className="relative min-h-dvh">
        <ClientBackground />
        <div className="relative z-10 min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
