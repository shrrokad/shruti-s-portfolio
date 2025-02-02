import Image from "next/image";
import logo from "../app/icon.svg";
import Navbar from "@/components/Navbar/page";
import HomePage from "@/components/Home/page";
import SkillAnimation from "@/components/Home/SkillAnimation";
import MyWork from "@/components/MyWork/page";
import EducationPage from "@/components/eduction/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SkillAnimation />
      <MyWork />
      <EducationPage />
    </>
  );
}
