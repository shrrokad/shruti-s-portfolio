import Image from "next/image";
import logo from "../app/icon.svg";
import Navbar from "@/components/Navbar/page";
import HomePage from "@/components/Home/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
