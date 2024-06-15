import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Nav from "@/components/nav";
import Header from "@/components/header";

const ourFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata = {
  title: "nayak AI",
  description: "birge between legal service and people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ourFont.className}>
        <Header />
        <hgroup className=" flex flex-row h-screen w-screen overflow-hidden">
          <Nav />
            {children}
        </hgroup>
      </body>
    </html>
  );
}
