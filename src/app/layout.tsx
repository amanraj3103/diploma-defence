import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Final Year Defence Prep Assistant",
  description:
    "Viva-focused Computer Science defence prep with 90 topics, 5-7 minute answer mode, and random topic practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
