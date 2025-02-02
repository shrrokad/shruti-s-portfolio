import React from "react";

interface HeadingTextProps {
  label: string;
}
const HeadingText = ({ label }: HeadingTextProps) => {
  return (
    <div className="relative w-[35.6rem]">
      <p className="text-[8rem] font-[cairo] font-extrabold text-[#9682DD]">
        {label}{" "}
      </p>
      <p
        className="text-[8rem] font-[cairo] font-extrabold text-[#161519] absolute top-[0.3rem] left-[0.3rem] -z-[1]"
        style={{
          textShadow:
            "0.1rem 0.1rem #fff, 0rem 0rem #fff, 0rem 0rem #fff, 0rem 0rem #fff",
        }}
      >
        {label}{" "}
      </p>
    </div>
  );
};

export default HeadingText;
