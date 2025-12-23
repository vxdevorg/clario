import React, { useState } from "react";
import icon from "../../assets/images/icon.webp";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import UserIcon from "../../assets/icons/UserIcon";
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

const USER_MENU = [
    { label: "Account", to: "/account" },
    { label: "Subscription", to: "/subscription" },
    { label: "Invoice", to: "/invoice" },
    { label: "Help & Support", to: "/help-support" },
];


const Navbar = () => {
    const [activeDesk, setActiveDesk] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMobile, setActiveMobile] = useState(null);
    const [userOpen, setUserOpen] = useState(false);

    const titleStyle =
        "font-avenir font-semibold text-[24px] leading-[26px] text-[#21527D] flex items-center gap-2 cursor-pointer";

    const dropdownBox =
        "bg-[#E7EDF2] border border-[#BCD6EB] rounded-[10px] shadow-[0px_0px_5px_0px_#00000040] overflow-hidden";

    const dropdownItem =
        "px-5 font-avenir font-semibold text-[16px] leading-[54px] tracking-[0.03em] text-[#464646] border-b border-[#BCD6EB] last:border-b-0 hover:bg-[#DEE6ED]";

    return (
        <nav className="w-full bg-white px-6 lg:px-12 py-4 bg-[#FFFFFF] shadow-[0px_1px_7px_0px_#00000040]">
            <div className="flex items-center justify-between ">

                {/* LOGO */}
                <Link to="/">
                    <img src={icon} alt="logo" className="w-[150px]" />
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex items-center gap-12">
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
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 w-[260px]">
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

                    {/* API – NO DROPDOWN */}
                    <Link to="/api" className={titleStyle}>
                        API
                    </Link>
                </ul>

                {/* USER ICON */}
                <div
                    className="hidden lg:block relative"
                    onMouseEnter={() => setUserOpen(true)}
                    onMouseLeave={() => setUserOpen(false)}
                >
                    <UserIcon />

                    {userOpen && (
                        <div className="absolute right-0 mt-2 w-[220px] z-50">
                            <div className={dropdownBox}>
                                {USER_MENU.map((item, i) => (
                                    <Link to={item.to} key={i}>
                                        <div className={dropdownItem}>{item.label}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="lg:hidden mt-4">
                    {Object.keys(NAV_ITEMS).map((title) => (
                        <div key={title} className="mb-3">
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
                                <div className={dropdownBox}>
                                    {NAV_ITEMS[title].map((item, i) => (
                                        <Link to={item.to} key={i}>
                                            <div className={dropdownItem}>{item.label}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* API */}
                    <Link to="/api" className={`${titleStyle} block mt-2`}>
                        API
                    </Link>

                    {/* USER MENU */}
                    <div className="mt-4">
                        <div className={dropdownBox}>
                            {USER_MENU.map((item, i) => (
                                <Link to={item.to} key={i}>
                                    <div className={dropdownItem}>{item.label}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
