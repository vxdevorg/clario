import React from "react";

const ExcelIcon = ({
  width = 18,
  height = 25,
  color = "#002C53",
  opacity = 0.47,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={opacity}
    >
      <path
        opacity={opacity}
        d="M13 0L18 6.25V23.76C17.9997 24.089 17.895 24.4044 17.7088 24.6369C17.5226 24.8694 17.2702 25 17.007 25H0.993C0.730378 24.9977 0.479017 24.8664 0.293218 24.6344C0.107418 24.4023 0.00209465 24.0883 0 23.76V1.24C0 0.555 0.445 0 0.993 0H13ZM10.2 12.5L13 7.5H10.6L9 10.3575L7.4 7.5H5L7.8 12.5L5 17.5H7.4L9 14.6425L10.6 17.5H13L10.2 12.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ExcelIcon;
