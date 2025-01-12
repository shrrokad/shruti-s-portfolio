"use client";

import Image from "next/image";
import React from "react";
import "../../styles/skillanimation.css";
import { skills } from "@/utils/constants";

const SkillAnimation = () => {
  return (
    <div className="h-[29rem] overflow-hidden">
      <div
        className="mt-[8.8rem] w-full overflow-hidden whitespace-nowrap border-y border-dashed border-y-[#9682DD]"
        style={{ transform: "rotate(356deg)" }}
      >
        <div className="scroll-animation w-[256rem] h-[12rem] py-[3.5rem]  inline-block items-center gap-[4.6rem]">
          {/* Repeating items */}
          {skills.map((skill, index) => (
            <div key={index} className="inline-block pr-[3rem]">
              <div className="flex items-center justify-center gap-[2rem]">
                <p className="font-[saira] text-[3.5rem]">{skill}</p>
                <Image
                  src={require("../../../assets/images/icon/Star.svg")}
                  width={0}
                  height={0}
                  alt="sendIcon"
                  className="w-[3rem] h-[3rem]"
                />
              </div>
            </div>
          ))}
          {skills.map((skill, index) => (
            <div key={index} className="inline-block pr-[3rem]">
              <div className="flex items-center justify-center gap-[2rem]">
                <p className="font-[saira] text-[3.5rem]">{skill}</p>
                <Image
                  src={require("../../../assets/images/icon/Star.svg")}
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
