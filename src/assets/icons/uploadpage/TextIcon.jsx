import React from "react";

const TextIcon = ({ width = 24, height = 24, color = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 23V19H7C6.45 19 5.97933 18.8043 5.588 18.413C5.19667 18.0217 5.00067 17.5507 5 17V7H1V5H5V1H7V17H23V19H19V23H17ZM17 15V7H9V5H17C17.55 5 18.021 5.196 18.413 5.588C18.805 5.98 19.0007 6.45067 19 7V15H17Z"
        fill={color}
      />
    </svg>
  );
};

export default TextIcon;
