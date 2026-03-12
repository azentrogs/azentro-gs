import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>

        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}