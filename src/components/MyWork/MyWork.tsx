import React, { Fragment } from "react";
import MyWorkCardList from "./MyWorkCardList";
import { MyWorksArray } from "@/utils/constants";

const MyWorkPage = () => {
  return (
    <>
      <div className="border-b border-dashed border-b-[#9682DD]">
        <div className="mt-[5rem] mx-[5rem]">
          <div className="flex items-center justify-between">
            <div className="relative w-[35.6rem]">
              <p className="text-[8rem] font-[cairo] font-extrabold text-[#9682DD]">
                MY WORK{" "}
              </p>
              <p
                className="text-[8rem] font-[cairo] font-extrabold text-[#161519] absolute top-[0.3rem] left-[0.3rem] -z-[1]"
                style={{
                  textShadow:
                    "0.1rem 0.1rem #fff, 0rem 0rem #fff, 0rem 0rem #fff, 0rem 0rem #fff",
                }}
              >
                MY WORK{" "}
              </p>
            </div>
            <p className="text-[2rem] font-[saira] font-normal text-[#B2B0BC] w-[72.3rem]">
              Groovy Greetings, fellow groovesters! I'm a front-end developer
              with a groovy passion for crafting user-friendly
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[5rem]">
        {MyWorksArray.map((work, i) => (
          <Fragment key={i}>
            <MyWorkCardList item={work} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default MyWorkPage;
