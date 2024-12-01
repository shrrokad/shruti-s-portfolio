import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-[30px] flex items-center justify-center h-[100vh] font-[butler] font-extrabold">
        <Image
          src={require("../app/icon.svg")}
          alt="logo"
          className="mr-[20px]"
          width={50}
          height={50}
        />
        Shruti&rsquo;s PortFolio
      </div>
    </div>
  );
}
