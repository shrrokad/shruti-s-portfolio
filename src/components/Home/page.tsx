import React from "react";
import bg from "../../../assets/images/bg-left.svg";
import bgTop from "../../../assets/images/bg-top.svg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "71.8rem",
          height: "119.1rem",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${bgTop.src})`,
          width: "45.9rem",
          height: "84.1rem",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div className="text-[12rem] text-center font-[butler] font-medium mt-[5rem]">
        <p>I’m Shruti Rokad</p>
      </div>
      <div className="text-[12rem] text-center font-[butler] font-medium">
        <p>
          I{" "}
          <span
            style={{
              background: "linear-gradient(130deg, #785DD6, #BD93F9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Code
          </span>{" "}
          *{" "}
          <span
            style={{
              background: "linear-gradient(130deg, #785DD6, #BD93F9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Create
          </span>{" "}
          *{" "}
          <span
            style={{
              background: "linear-gradient(130deg, #785DD6, #BD93F9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Innovate
          </span>
        </p>
      </div>

      <div className="mt-[5rem] flex items-center justify-center mx-[28rem]">
        <p className="text-[2rem] font-[saira] font-normal text-[gray] text-center">
          My name is Shruti Rokad. Welcome to my web developer portfolio! I am a
          passionate and skilled web developer with a strong foundation in
          front-end technologies I am able to handle multiple tasks on a daily
          basis. I use a creative approach to problem solve. I do hard work and
          perfect work. I am flexible in my working hours,being able to work
          evenings and weekends.
        </p>
      </div>

      <div className="w-[100%] flex items-center justify-center">
        <button
          className="flex items-center justify-center font-[saira] text-[2rem] gap-[1.8rem]  rounded-[1rem] px-[3rem] py-[1rem] mt-[5rem] "
          style={{
            background: "linear-gradient(130deg, #785DD6, #BD93F9)",
            boxShadow: "0 6px 20px 0 #785DD625, 0 6px 10px 0 #BD93F925",
          }}
        >
          let’s talk
          <Image
            src={require("/assets/images/icon/send.svg")}
            width={0}
            height={0}
            alt="sendIcon"
            className="w-[2.4rem] h-[2.4rem] "
          />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
