import React from "react";

const MenuIcon = ({ width = 40, height = 40 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="40" fill="#D6E0EA" />
            <path
                d="M13.3337 9.99996H33.3337M6.66699 10.0166L6.68366 9.99829M6.66699 20.0166L6.68366 19.9983M6.66699 30.0166L6.68366 29.9983M13.3337 20H33.3337M13.3337 30H33.3337"
                stroke="#21527D"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MenuIcon;
