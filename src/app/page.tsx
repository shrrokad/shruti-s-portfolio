import Image from "next/image";
import logo from "../app/icon.svg";

export default function Home() {
  return (
    <div>
      <div className="text-[30px] flex items-center justify-center gap-5 h-[100vh] font-[butler] font-extrabold">
        <Image src={logo} alt="logo" width={50} height={50} />
        <p>Shruti&rsquo;s PortFolio</p>
      </div>
    </div>
  );
}
