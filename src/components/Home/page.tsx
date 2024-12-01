import React from "react";
import bg from "../../../assets/images/bg-left.svg";
import bgTop from "../../../assets/images/bg-top.svg";

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "568px",
          height: "841px",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: "-80px",
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${bgTop.src})`,
          width: "459px",
          height: "841px",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          right: "-72px",
        }}
      ></div>
      <div className="text-[12rem] text-center font-[butler] font-medium mt-[5rem]">
        <p>I’m Shruti Rokad</p>
      </div>
      <div className="text-[12rem] text-center font-[butler] font-medium">
        <p>
          I{" "}
          <span className="bg-gradient-to-r from-[#785DD6] to-[#BD93F9] bg-clip-text text-transparent">
            Code
          </span>{" "}
          *{" "}
          <span className="bg-gradient-to-r from-[#785DD6] to-[#BD93F9] bg-clip-text text-transparent">
            Create
          </span>{" "}
          *{" "}
          <span className="bg-gradient-to-r from-[#785DD6] to-[#BD93F9] bg-clip-text text-transparent">
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
    </div>
  );
};

export default HomePage;
