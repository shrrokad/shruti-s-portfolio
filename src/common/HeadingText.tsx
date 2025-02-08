import React from "react";

interface HeadingTextProps {
  label: string;
}
const HeadingText = ({ label }: HeadingTextProps) => {
  return (
    <div
      style={{ position: "relative", width: "41.6rem" }}
      //maxWidth: "41.6rem", minWidth: "35.6rem"
    >
      <p
        // className="font-[cairo] font-extrabold text-[#9682DD]"
        style={{
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800, // equivalent to 'font-extrabold'
          color: "#9682DD",
          fontSize: "8rem",
        }}
      >
        {label}{" "}
      </p>
      <p
        // className="font-[cairo] font-extrabold text-[#161519] -z-[1]"
        style={{
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          color: "#161519",
          position: "absolute",
          top: "0.3rem",
          left: "0.3rem",
          fontSize: "8rem",
          textShadow:
            "0.1rem 0.1rem #fff, 0rem 0rem #fff, 0rem 0rem #fff, 0rem 0rem #fff",
          zIndex: -1, // equivalent to '-z-[1]'
        }}
      >
        {label}{" "}
      </p>
    </div>
  );
};

export default HeadingText;
