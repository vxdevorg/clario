import React from "react";

const RightArrowIcon = ({ width = 14, height = 28, color = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8501 14.8296L5.25025 21.4294L3.60059 19.7797L9.37559 14.0047L3.60059 8.22974L5.25025 6.58008L11.8501 13.1799C12.0688 13.3987 12.1917 13.6954 12.1917 14.0047C12.1917 14.3141 12.0688 14.6108 11.8501 14.8296Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowIcon;
