import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Nav from "@/components/nav";
import Header from "@/components/header";
import ModalForPost from "../components/ModalForPost";
import FetchProfile from "../components/fetchProfile";
import AccountBar from "../components/AccountBar";
import GroupTabs from "../components/GroupTabs";
import PostBtn from "../components/PostBtn";
import ThemeWrapper from "../components/ThemeWrapper";
import ModalForAi from "../components/ModalForAi";

const ourFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "nayak AI",
  description: "bridge between legal service and people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ourFont.className}>
        <ThemeWrapper>
          <GroupTabs>
            <Header />
            <FetchProfile />
          </GroupTabs>
          <hgroup className=" flex flex-row h-screen w-screen mx-auto overflow-hidden">
            <GroupTabs>
              <Nav>
                <AccountBar />
                <PostBtn />
              </Nav>
              <ModalForPost />
              <ModalForAi />
            </GroupTabs>
            {children}
          </hgroup>
        </ThemeWrapper>
      </body>
    </html>
  );
}
