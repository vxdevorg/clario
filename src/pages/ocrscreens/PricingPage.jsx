import React, { useState } from "react";
import LeftArrowIcon from "../../assets/icons/pricingpage/LeftArrowIcon";

const PricingPage = () => {
  const [active, setActive] = useState("personal");

  return (
    <div className="px-6 py-6">

      {/* LEFT ARROW */}
      <button className="mb-6">
        <LeftArrowIcon width={20} height={20} />
      </button>

      {/* SWITCH BUTTON */}
      <div className="flex items-center">

        {/* PERSONAL */}
        <button
          onClick={() => setActive("personal")}
          className={`
            font-avenir text-[20px] leading-[26px] rounded-[100px] px-8 py-3 transition-all
            ${active === "personal"
              ? "font-[700] text-[#FDFDFD] bg-[#121212] shadow-[inset_1px_4px_6.7px_0px_#FDFDFD40,3px_2px_4px_0px_#12121226]"
              : "font-[600] text-[#121212]"
            }
          `}
        >
          Personal
        </button>

        {/* ENTERPRISE */}
        <button
          onClick={() => setActive("enterprise")}
          className={`
            font-avenir text-[20px] leading-[26px] rounded-[100px] pl-8 py-3 transition-all
            ${active === "enterprise"
              ? "font-[700] text-[#FDFDFD] bg-[#121212] shadow-[inset_1px_4px_6.7px_0px_#FDFDFD40,3px_2px_4px_0px_#12121226]"
              : "font-[600] text-[#121212] bg-[#F8F8F8] border border-[0.25px] border-[#12121280] shadow-[0px_1px_4px_0px_#00000040]"
            }
          `}
        >
          Enterprise
        </button>

      </div>

    </div>
  );
};

export default PricingPage;
