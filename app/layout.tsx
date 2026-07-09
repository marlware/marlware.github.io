import { GeistMono } from 'geist/font/mono';
import { switzerMedium } from './fonts';
import "./globals.css";

export const metadata = {
  title: "Marl Jonson",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistMono.variable} ${switzerMedium.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}