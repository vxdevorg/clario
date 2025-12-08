import React, { useState } from "react";
import icon from "../../assets/images/icon.webp";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    // Desktop dropdown states
    const [openPricingDesk, setOpenPricingDesk] = useState(false);
    const [openHelpDesk, setOpenHelpDesk] = useState(false);
    const [openUserDesk, setOpenUserDesk] = useState(false);

    // Mobile states
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openPricingMobile, setOpenPricingMobile] = useState(false);
    const [openHelpMobile, setOpenHelpMobile] = useState(false);

    return (
        <nav className="w-full">
            <div className="w-full flex items-center justify-between">

                {/* LOGO */}
                <div className="w-[120px] h-[50px] md:w-[150px] md:h-[60px] lg:w-[180px] lg:h-[70px]">
                    <img src={icon} alt="Logo" className="w-full h-full object-contain" />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex items-center gap-16 xl:gap-24">
                    
                    {/* Account */}
                    <li className="cursor-pointer">
                        <span className="font-avenir font-semibold text-[24px] tracking-[0.13em] text-[#21527D]">
                            Account
                        </span>
                    </li>

                    {/* Pricing */}
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => setOpenPricingDesk(true)}
                        onMouseLeave={() => setOpenPricingDesk(false)}
                    >
                        <span className="flex items-center gap-1 font-avenir font-semibold text-[24px] tracking-[0.13em] text-[#21527D]">
                            Pricing <DownArrowIcon width={28} height={18} />
                        </span>

                        {openPricingDesk && (
                            <div className="absolute top-[50px] w-[180px] bg-white rounded-md shadow-[0px_4px_4px_0px_#C0BEBE40] z-50">
                                <div className="bg-[#F8F8F8] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer">
                                    Personal
                                </div>
                                <div className="bg-[#EFEFEF] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer shadow-[0px_4px_4px_0px_#C0BEBE40]">
                                    Enterprise
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Help */}
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => setOpenHelpDesk(true)}
                        onMouseLeave={() => setOpenHelpDesk(false)}
                    >
                        <span className="flex items-center gap-1 font-avenir font-semibold text-[24px] tracking-[0.13em] text-[#21527D]">
                            Help <DownArrowIcon width={28} height={18} />
                        </span>

                        {openHelpDesk && (
                            <div className="absolute top-[50px] w-[180px] bg-white rounded-md shadow-[0px_4px_4px_0px_#C0BEBE40] z-50">
                                <div className="bg-[#F8F8F8] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer">
                                    Privacy
                                </div>
                                <div className="bg-[#EFEFEF] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer shadow-[0px_4px_4px_0px_#C0BEBE40]">
                                    Contact
                                </div>
                            </div>
                        )}
                    </li>
                </ul>

                {/* DESKTOP USER ICON */}
                <div
                    className="hidden lg:block relative cursor-pointer"
                    onMouseEnter={() => setOpenUserDesk(true)}
                    onMouseLeave={() => setOpenUserDesk(false)}
                >
                    <UserIcon />

                    {openUserDesk && (
                        <div className="absolute top-[50px] right-0 w-[180px] bg-white rounded-md shadow-[0px_4px_4px_0px_#C0BEBE40] z-50">
                            <div className="bg-[#F8F8F8] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer">
                                Login
                            </div>
                            <div className="bg-[#EFEFEF] px-6 py-4 font-avenir font-semibold text-[20px] cursor-pointer shadow-[0px_4px_4px_0px_#C0BEBE40]">
                                Sign Up
                            </div>
                        </div>
                    )}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* --------------------- MOBILE MENU ---------------------- */}
            <div
                className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
                    mobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col px-6 py-4">

                    {/* Account */}
                    <li className="py-3 font-avenir font-semibold text-[20px] text-[#21527D]">
                        Account
                    </li>

                    {/* MOBILE PRICING DROPDOWN */}
                    <li className="py-3">
                        <div
                            className="flex items-center justify-between font-avenir font-semibold text-[20px] text-[#21527D]"
                            onClick={() => setOpenPricingMobile(!openPricingMobile)}
                        >
                            Pricing
                            <DownArrowIcon
                                width={20}
                                height={14}
                                className={`transition-all ${openPricingMobile ? "rotate-180" : ""}`}
                            />
                        </div>

                        {openPricingMobile && (
                            <div className="mt-3 pl-4">
                                <div className="bg-[#F8F8F8] px-4 py-3 mb-1 font-avenir font-semibold text-[18px]">
                                    Personal
                                </div>
                                <div className="bg-[#EFEFEF] px-4 py-3 font-avenir font-semibold text-[18px] shadow">
                                    Enterprise
                                </div>
                            </div>
                        )}
                    </li>

                    {/* MOBILE HELP DROPDOWN */}
                    <li className="py-3">
                        <div
                            className="flex items-center justify-between font-avenir font-semibold text-[20px] text-[#21527D]"
                            onClick={() => setOpenHelpMobile(!openHelpMobile)}
                        >
                            Help
                            <DownArrowIcon
                                width={20}
                                height={14}
                                className={`transition-all ${openHelpMobile ? "rotate-180" : ""}`}
                            />
                        </div>

                        {openHelpMobile && (
                            <div className="mt-3 pl-4">
                                <div className="bg-[#F8F8F8] px-4 py-3 mb-1 font-avenir font-semibold text-[18px]">
                                    Privacy
                                </div>
                                <div className="bg-[#EFEFEF] px-4 py-3 font-avenir font-semibold text-[18px] shadow">
                                    Contact
                                </div>
                            </div>
                        )}
                    </li>

                    {/* USER OPTIONS */}
                    <li className="mt-4">
                        <div className="bg-[#F8F8F8] px-4 py-3 text-center font-avenir font-semibold text-[18px]">
                            Login
                        </div>
                        <div className="bg-[#EFEFEF] px-4 py-3 text-center font-avenir font-semibold text-[18px] shadow">
                            Sign Up
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
