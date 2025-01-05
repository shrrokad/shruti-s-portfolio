import { space } from "postcss/lib/list";
import React from "react";

const MyWorkCardList = ({ item }: any) => {
  console.log(item, "item");

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
          <img
            src={item.thumbnail.src}
            alt=""
            className="w-full h-full rounded-[1rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default MyWorkCardList;
