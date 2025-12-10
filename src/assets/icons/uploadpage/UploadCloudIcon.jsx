import React from "react";

const UploadCloudIcon = ({
  width = 90,
  height = 90,
  color = "#21527D",
  opacity = 0.66,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity}>
        <path
          d="M21.8957 38.0081C13.6402 39.9714 7.5 47.3936 7.5 56.2499C7.5 66.6052 15.8947 74.9999 26.25 74.9999C28.0264 74.9999 29.745 74.753 31.3734 74.2914"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67.6027 38.0081C75.8584 39.9714 81.9984 47.3936 81.9984 56.2499C81.9984 66.6052 73.6039 74.9999 63.2484 74.9999C61.4721 74.9999 59.7534 74.753 58.125 74.2914"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67.5 37.5C67.5 25.0736 57.4264 15 45 15C32.5736 15 22.5 25.0736 22.5 37.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.998 52.2773L45.0002 39.2322L58.3725 52.5004"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 71.2501V45.866"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UploadCloudIcon;
