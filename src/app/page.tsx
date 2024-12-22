import Image from "next/image";
import logo from "../app/icon.svg";
import Navbar from "@/components/Navbar/page";
import HomePage from "@/components/Home/page";
import SkillAnimation from "@/components/Home/SkillAnimation";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SkillAnimation />
    </>
  );
}
