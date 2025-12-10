import React from "react";

const CsvIcon = ({
  width = 21,
  height = 26,
  color = "#002C53",
  opacity = 0.48,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={opacity}
    >
      <path
        opacity={opacity}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.6C0 1.91044 0.252857 1.24912 0.702944 0.761522C1.15303 0.273928 1.76348 0 2.4 0L15.5312 0L20.8 5.70787V23.4C20.8 24.0896 20.5471 24.7509 20.0971 25.2385C19.647 25.7261 19.0365 26 18.4 26H2.4C1.76348 26 1.15303 25.7261 0.702944 25.2385C0.252857 24.7509 0 24.0896 0 23.4V2.6ZM1.6 10.4H6.4V12.1333H3.2V17.3333H6.4V19.0667H1.6V10.4ZM12.8 10.4H8V15.6H11.2V17.3333H8V19.0667H12.8V13.8667H9.6V12.1333H12.8V10.4ZM16 10.4H14.4V16.8255L16.8 19.4255L19.2 16.8255V10.4H17.6V16.1079L16.8 16.9745L16 16.1079V10.4Z"
        fill={color}
      />
    </svg>
  );
};

export default CsvIcon;
