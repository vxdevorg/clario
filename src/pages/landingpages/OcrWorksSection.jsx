import React from "react";
import ArrowSwapIcon from "../../assets/icons/landingpage/ArrowSwapIcon.jsx";
import ComplexIcon from "../../assets/icons/landingpage/ComplexIcon.jsx";
import LargeIcon from "../../assets/icons/landingpage/LargeIcon.jsx";
import HandWriteIcon from "../../assets/icons/landingpage/HandWriteIcon.jsx";
import SearchPage from "../../assets/icons/landingpage/SearchPage.jsx";
import WeatherIcon from "../../assets/icons/landingpage/WeatherIcon.jsx";

const features = [
  {
    icon: <ComplexIcon />,
    label: "Multi-language OCR + language autodetect",
  },
  {
    icon: <LargeIcon />,
    label: "Table detection & CSV/XLSX export",
  },
  {
    icon: <HandWriteIcon />,
    label: "Handwriting recognition (HWR) option",
  },
  {
    icon: <SearchPage />,
    label: "Per-region confidence highlighting",
  },
  {
    icon: <WeatherIcon />,
    label: "Per-region confidence highlighting",
  },
  {
    icon: <ArrowSwapIcon />,
    label: "Developer SDKs (Python, Node, Java) + cURL quickstart",
  },
];


const OcrWorksSection = () => {
  return (
    <div className="w-full">

      {/* Heading */}
      <div className="text-center mb-12 max-w-[650px] mx-auto">
        <h2 className="font-avenir font-semibold lg:font-bold text-[24px] md:text-[28px] leading-[26px] text-[#121212]">
          OCR That Just Works.
        </h2>

        <p className="font-avenir font-normal lg:font-semibold text-[16px] md:text-[18px] leading-[163%] capitalize text-[#121212]/70 mt-5">
          Our AI-Powered OCR platform redefines data extraction with unparalleled accuracy and developer-friendly tools.
        </p>
      </div>

      {/* FLEX (NO GRID) */}
      <div className="flex flex-wrap justify-center gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-[#FDFDFD] shadow-[0px_3px_14.2px_0px_#0000001A] 
                       flex flex-col items-center text-center 
                       w-full sm:w-[45%] lg:w-[31%] max-w-[340px] h-[270px] justify-center"
          >
            {/* Icon Circle */}
            <div
              className="
    bg-[#C5D4E2]
    shadow-[0px_2px_4px_0px_#00000040]
    rounded-full 
    w-[92px] h-[92px] 
    flex justify-center items-center 
    mb-10
  "
            >
              {item.icon}
            </div>


            {/* Label */}
            <h5 className="font-avenir font-semibold lg:font-bold text-[16px] leading-[163%] capitalize text-[#121212] opacity-[0.71] px-10">
              {item.label}
            </h5>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OcrWorksSection;
