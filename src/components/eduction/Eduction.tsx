import HeadingText from "@/common/HeadingText";
import { educationData } from "@/utils/constants";
import React from "react";

const Eduction = () => {
  return (
    <div className="mt-[10rem]">
      <div className="border-t border-dashed border-t-[#9682DD]" />

      <div className="mt-[5rem] mx-[5rem]">
        <div className="flex items-start justify-start gap-[30rem]">
          <HeadingText label="EDUCATION" />
          <div className="bg-gray-900 text-gray-330  p-6">
            <div className="w-full">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="mb-8 border-b border-dashed border-b-[#9682DD] last:border-b-transparent pb-4"
                >
                  <h2 className="text-[5rem] font-bold text-gray-200">
                    {edu.title}
                  </h2>
                  <p className="text-gray-400 text-[3rem] font-semibold mt-1">
                    {edu.year}
                  </p>
                  <p className="text-gray-400 text-[3rem] mt-2 mb-8">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
