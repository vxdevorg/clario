import React from "react";

const DownArrowIcon = ({ width = 32, height = 16, className = "", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M23.2267 3.26933L24.64 4.684L16.9373 12.3893C16.8139 12.5135 16.6672 12.6121 16.5055 12.6794C16.3438 12.7466 16.1704 12.7813 15.9953 12.7813C15.8202 12.7813 15.6469 12.7466 15.4852 12.6794C15.3235 12.6121 15.1768 12.5135 15.0533 12.3893L7.34668 4.684L8.76001 3.27066L15.9933 10.5027L23.2267 3.26933Z"
        fill="#21527D"
      />
    </svg>
  );
};

export default DownArrowIcon;
