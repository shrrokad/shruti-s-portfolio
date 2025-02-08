import Image from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center font-[saira] text-[2rem] gap-[1.8rem]  rounded-[1rem]  mt-[5rem] w-[10rem]"
      style={{
        padding: "1rem 3rem",
        background: "linear-gradient(130deg, #785DD6, #BD93F9)",
        boxShadow: "0 0.6rem 2rem 0 #785DD625, 0 0.6rem 1rem 0 #BD93F925",
      }}
    >
      {label}
      <Image
        src={require("../../assets/images/icon/send.svg")}
        width={0}
        height={0}
        alt="sendIcon"
        className="w-[2.4rem] h-[2.4rem] "
      />
    </button>
  );
};

export default Button;
