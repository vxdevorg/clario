import React from "react";

const DiagonalSlashIcon = ({ width = 12, height = 25, color = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-8.59201e-05 24.3841L9.72791 0.000104904L11.3919 0.576105L1.69591 24.9601L-8.59201e-05 24.3841Z"
        fill={color}
      />
    </svg>
  );
};

export default DiagonalSlashIcon;
