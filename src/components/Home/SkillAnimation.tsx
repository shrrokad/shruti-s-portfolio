import Image from "next/image";
import React from "react";
import "../../styles/skillanimation.css";

const skills = [
  "React JS",
  "Next JS",
  "AWS",
  "React Native",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Redux",
];

const SkillAnimation = () => {
  return (
    <div className="h-[230px] overflow-hidden">
      <div
        className="mt-[8.8rem] w-full overflow-hidden whitespace-nowrap border-y border-dashed"
        style={{ transform: "rotate(356deg)" }}
      >
        <div className="scroll-animation w-[256rem] h-[12rem] py-[25px]  inline-block items-center gap-[4.6rem]">
          {/* Repeating items */}
          {skills.map((skill, index) => (
            <div key={index} className="inline-block pr-[30px]">
              <div className="flex items-center justify-center gap-[20px]">
                <p className="font-[saira] text-[3.5rem]">{skill}</p>
                <Image
                  src={require("/assets/images/icon/Star.svg")}
                  width={0}
                  height={0}
                  alt="sendIcon"
                  className="w-[3rem] h-[3rem]"
                />
              </div>
            </div>
          ))}
          {skills.map((skill, index) => (
            <div key={index} className="inline-block pr-[30px]">
              <div className="flex items-center justify-center gap-[20px]">
                <p className="font-[saira] text-[3.5rem]">{skill}</p>
                <Image
                  src={require("/assets/images/icon/Star.svg")}
                  width={0}
                  height={0}
                  alt="sendIcon"
                  className="w-[3rem] h-[3rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAnimation;
