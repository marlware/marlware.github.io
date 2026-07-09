import { switzerMedium, switzerLight } from './fonts';
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
      <body className={`${switzerMedium.variable} ${switzerLight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}