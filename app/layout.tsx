import { Red_Hat_Display } from "next/font/google";

import "./globals.css";

const redHeadDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${redHeadDisplay.className} bg-background-primary text-content-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
