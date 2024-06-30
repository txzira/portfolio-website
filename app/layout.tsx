import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ronnie Ayers's Web Development portfolio",
  creator: "Ronnie Ayers",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="d-flex flex-column vw-100 vh-100"
        style={{
          background:
            "linear-gradient(325deg, rgba(34,97,195,1) 10%, rgba(253,195,45,1) 100%)",
        }}>
        <Navbar />
        <main className="d-flex flex-column flex-1 w-100 h-100 p-5 gap-5 overflow-y-scroll">
          {children}
          <footer className="text-center text-light">
            Developed with NextJs and Bootstrap
          </footer>
        </main>
      </body>
    </html>
  );
}
