import Footer from "./_components/Footer";
import Nav from "./_components/Nav";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./providers";

const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Shortly URL shortening API Challenge",
  description: "Shortly URL shortening API Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <>
          <Nav />
          <Providers>{children}</Providers>
          <Footer />
        </>
      </body>
    </html>
  );
}
