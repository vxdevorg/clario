import React from "react";

const LeftArrowIcon = ({ width = 15, height = 26, color = "#21527D" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 15 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M0.58554 11.314L11.8995 3.8147e-06L14.7275 2.828L4.82754 12.728L14.7275 22.628L11.8995 25.456L0.58554 14.142C0.210598 13.767 -3.33786e-05 13.2583 -3.33786e-05 12.728C-3.33786e-05 12.1977 0.210598 11.6891 0.58554 11.314Z" 
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
