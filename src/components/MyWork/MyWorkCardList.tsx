"use client";

import React from "react";
import gitHubIcon from "../../../assets/images/icon/gitHub.svg";
import notFoundImage from "../../../assets/images/Image_not_available.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
const MyWorkCardList = ({ item }: any) => {
  const router = useRouter();

  return (
    <div className="mt-[10rem] flex justify-between gap-[30rem] ">
      <div>
        <p className="font-[roboto] text-[3rem] ">
          <span
            className="font-[roboto] text-[2.5rem] "
            style={{
              background: "linear-gradient(130deg, #785DD6, #BD93F9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {item.id.toString().length == 1 ? `0${item.id}` : item.id}
          </span>{" "}
          {item.projectName}
        </p>
        <p className="font-[saira] text-[2rem] mt-[3rem] leading-[2.9rem] ">
          {item.description}
        </p>
        <div className="mt-[3rem] ">
          {item.languages.map((language: string, i: number) => (
            <button
              key={i}
              className="font-[saira] text-[1.8rem] px-[2rem] py-[0.3rem] rounded-[0.6rem] mr-[1rem] mt-[1rem] leading-[2.9rem] "
              style={{
                background: "linear-gradient(37deg, #785DD620, #BD93F920)",
              }}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="w-[90rem] h-[41.5rem] ">
          {item.thumbnail.src ? (
            <img
              src={item.thumbnail.src || notFoundImage}
              alt=""
              className="w-full h-full rounded-[1rem] "
            />
          ) : (
            <div className="h-full w-full border border-[#9682DD] rounded-[1rem] flex items-center justify-center">
              <Image
                src={notFoundImage}
                alt="not found"
                width={0}
                height={0}
                className="w-[56.9rem] h-[36.6rem] rounded-[1rem] "
              />
            </div>
          )}
        </div>

        <div className="flex gap-[1rem] mt-[3rem] ">
          <button
            style={{
              background: "linear-gradient(37deg, #785DD680, #BD93F980)",
            }}
            className="w-[20%] text-[1.5rem] font-[saira] rounded-[0.6rem] flex items-center justify-center gap-[1.5rem] "
          >
            <img src={gitHubIcon.src} alt="" className="w-[3rem] h-[3rem] " />
            <p>GitHub</p>
          </button>
          <button
            className="w-[80%] border border-[#BD93F9] rounded-[0.6rem] py-[1rem] text-[1.5rem] font-[saira] "
            // onClick={() => router.push(item.liveUrl ? item.liveUrl : "")}
            onClick={() => {
              if (item.liveUrl) {
                window.open(item.liveUrl, "_blank");
              }
            }}
          >
            View Live Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWorkCardList;
