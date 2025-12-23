import React, { useState } from "react";
import icon from "../../assets/images/icon.webp";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = {
  Product: [
    { label: "OCR Engine", to: "/ocr-engine" },
    { label: "Handwritten Text Extraction", to: "/handwritten-ocr" },
    { label: "Invoice → Excel", to: "/invoice-to-excel" },
    { label: "API & Integrations", to: "/api-integrations" },
    { label: "Pricing", to: "/pricing" },
  ],
  Solutions: [
    { label: "Logistics & Shipping", to: "/solutions/logistics" },
    { label: "Finance & Accounting", to: "/solutions/finance" },
    { label: "Healthcare Records", to: "/solutions/healthcare" },
    { label: "Government & Compliance", to: "/solutions/government" },
    { label: "Custom AI Workflows", to: "/solutions/custom-ai" },
  ],
  Company: [
    { label: "About Vibexio", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms" },
  ],
  Enterprise: [
    { label: "Security & Compliance", to: "/enterprise/security" },
    { label: "SLA & Support", to: "/enterprise/sla-support" },
    { label: "Custom Deployment", to: "/enterprise/custom-deployment" },
    { label: "Contact Sales", to: "/enterprise/contact-sales" },
  ],
};

const DemoNavbar = () => {
  const [activeDesk, setActiveDesk] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);

  const titleStyle =
    "font-avenir font-semibold text-[20px] xl:text-[24px] leading-[26px] text-[#21527D] flex items-center gap-2 cursor-pointer";

  const dropdownBox =
    "bg-[#E7EDF2] border border-[#BCD6EB] rounded-[10px] shadow-[0px_0px_5px_0px_#00000040] overflow-hidden ";

  const dropdownItem =
    "px-5 font-avenir font-semibold text-[16px] leading-[54px] tracking-[0.03em] text-[#464646] border-b border-[#BCD6EB]";

  return (
    <nav className="w-full bg-white px-4 sm:px-6 lg:px-12 py-5 shadow-[0px_1px_7px_0px_#00000040]">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src={icon} alt="logo" className="w-[140px] lg:w-[150px]" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-12">
          {Object.keys(NAV_ITEMS).map((title) => (
            <li
              key={title}
              className="relative"
              onMouseEnter={() => setActiveDesk(title)}
              onMouseLeave={() => setActiveDesk(null)}
            >
              <div className={titleStyle}>
                {title}
                <DownArrowIcon width={20} height={14} />
              </div>

              {activeDesk === title && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-5 z-50 w-[260px]">
                  <div className={dropdownBox}>
                    {NAV_ITEMS[title].map((item, i) => (
                      <Link to={item.to} key={i}>
                        <div className={dropdownItem}>{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          {/* API */}
          <Link to="/api" className={titleStyle}>
            API
          </Link>
        </ul>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signin"
            className="font-avenir font-semibold text-[18px] text-[#21527D] border border-[#21527D] px-5 py-2 rounded-[10px]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-avenir font-semibold text-[18px] text-white bg-[#21527D] px-5 py-2 rounded-[10px]"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {Object.keys(NAV_ITEMS).map((title) => (
            <div key={title}>
              <div
                className={`${titleStyle} justify-between`}
                onClick={() =>
                  setActiveMobile(activeMobile === title ? null : title)
                }
              >
                {title}
                <DownArrowIcon
                  width={20}
                  height={14}
                  className={activeMobile === title ? "rotate-180" : ""}
                />
              </div>

              {activeMobile === title && (
                <div>
                  <div className={dropdownBox}>
                    {NAV_ITEMS[title].map((item, i) => (
                      <Link to={item.to} key={i}>
                        <div className={dropdownItem}>{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* API */}
          <Link to="/api" className={`${titleStyle} block`}>
            API
          </Link>

          {/* MOBILE AUTH BUTTONS */}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/login"
              className="w-full text-center font-avenir font-semibold text-[18px] text-[#21527D] border border-[#21527D] py-3 rounded-[10px]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full text-center font-avenir font-semibold text-[18px] text-white bg-[#21527D] py-3 rounded-[10px]"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DemoNavbar;
