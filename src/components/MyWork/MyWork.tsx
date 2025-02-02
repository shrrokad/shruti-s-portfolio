"use client";

import React, { Fragment } from "react";
import MyWorkCardList from "./MyWorkCardList";
import { MyWorksArray } from "@/utils/constants";
import Button from "@/common/Button";
import HeadingText from "@/common/HeadingText";

const MyWorkPage = () => {
  return (
    <>
      <div className="border-b border-dashed border-b-[#9682DD]">
        <div className="mt-[5rem] mx-[5rem]">
          <div className="flex items-center justify-between">
            <HeadingText label="MY WORK" />
            <p className="text-[2rem] font-[saira] font-normal text-[#B2B0BC] w-[72.3rem]">
              Groovy Greetings, fellow groovesters! I'm a front-end developer
              with a groovy passion for crafting user-friendly
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[5rem]">
        {MyWorksArray.slice(0, 3).map((work, i) => (
          <Fragment key={i}>
            <MyWorkCardList item={work} />
          </Fragment>
        ))}
      </div>

      <div className="w-[100%] mt-[5rem] flex items-center justify-center">
        <Button label="View All Projects" />
      </div>
    </>
  );
};

export default MyWorkPage;
