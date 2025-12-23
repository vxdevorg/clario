import React, { useState } from 'react';
import CloseIcon from '../../assets/icons/loginpages/CloseIcon';
import DownArrowIconForm from '../../assets/icons/DownArrowIconForm';
import bgimg from '../../assets/images/formbgimg.webp';
import DemoSuccess from '../ocrpopups/DemoSuccess';

const DemoLogin = () => {
    const [orgSizeOpen, setOrgSizeOpen] = useState(false);
    const [selectedOrgSize, setSelectedOrgSize] = useState("");
    const [industryOpen, setIndustryOpen] = useState(false);

    const [expandedSections, setExpandedSections] = useState({
        logistics: false,
        finance: false,
        healthcare: false,
        enterprise: false,
    });

    const toggleSection = (section) => {
        setExpandedSections({
            logistics: false,
            finance: false,
            healthcare: false,
            enterprise: false,
            [section]: !expandedSections[section],
        });
    };
    const [showSuccess, setShowSuccess] = useState(false);
    const row =
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1";
    const label =
        "font-avenir font-[700] text-[14px] sm:text-[16px] text-[#21527D]";
    const input =
        "w-full sm:w-[250px] h-[36px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 font-avenir text-[12px] text-[#82A9CC] placeholder:text-[#82A9CC] outline-none";

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className="w-full max-w-[480px] rounded-[40px] bg-[linear-gradient(205.4deg,#D0DFEB_36.54%,rgba(253,253,253,0.6)_180%)] shadow-[0px_16px_25.2px_7px_#1A55701A] px-4 sm:px-6 md:px-8 py-6 relative">

                {/* Close */}
                <div className="absolute top-5 right-5 cursor-pointer">
                    <CloseIcon width={20} height={20} />
                </div>

                {/* Title */}
                <h2 className="font-avenir font-bold text-[22px] md:text-[30px] text-center text-[#121212] mb-4">
                    Book a demo
                </h2>

                {/* Form */}
                <div className="flex flex-col gap-3">

                    <div className={row}>
                        <label className={label}>Full Name</label>
                        <input className={input} placeholder="Eg., Rayna Lipshutz" />
                    </div>

                    <div className={row}>
                        <label className={label}>Work Email</label>
                        <input className={input} placeholder="Eg., name@company.com" />
                    </div>

                    <div className={row}>
                        <label className={label}>Phone Number</label>
                        <input className={input} placeholder="98xxxxxx76" />
                    </div>

                    <div className={row}>
                        <label className={label}>Organization Name</label>
                        <input className={input} placeholder="Eg., Vibexio" />
                    </div>

                    {/* Organization Size */}
                    <div className={row}>
                        <label className={label}>Organization Size</label>
                        <div className="relative w-full sm:w-[250px]">
                            <input
                                readOnly
                                value={selectedOrgSize || "- Select -"}
                                onClick={() => setOrgSizeOpen(!orgSizeOpen)}
                                className={`${input} pr-10 cursor-pointer`}
                            />
                            <span className={`absolute right-4 top-1/2 -translate-y-1/2 transition ${orgSizeOpen && "rotate-180"}`}>
                                <DownArrowIconForm />
                            </span>

                            {orgSizeOpen && (
                                <div className="absolute top-full mt-1 w-full bg-white rounded-[10px] shadow z-50">
                                    {["0-10", "11-50", "51-100", "101-250", "Above 250"].map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                setSelectedOrgSize(item);
                                                setOrgSizeOpen(false);
                                            }}
                                            className="text-center text-[12px] font-avenir py-2 cursor-pointer hover:bg-[#E6F0FA]"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 🔒 INDUSTRY DROPDOWN – UNTOUCHED */}
                    <div className={row}>
                        <label className={label}>Industry</label>
                        <div className="relative w-full sm:w-[250px]">
                            <input
                                readOnly
                                value="- Select -"
                                onClick={() => setIndustryOpen(!industryOpen)}
                                className={`${input} pr-10 cursor-pointer`}
                            />
                            <span className={`absolute right-4 top-1/2 -translate-y-1/2 transition ${industryOpen && "rotate-180"}`}>
                                <DownArrowIconForm />
                            </span>

                            {industryOpen && (
                                <div className="absolute top-full mt-1 w-full max-h-[300px] rounded-[10px] bg-[#FDFDFD] shadow z-50 overflow-y-auto p-2">

                                    {/* Logistics */}
                                    <div>
                                        <div
                                            className="flex justify-between items-center font-avenir font-[700] text-[12px] text-[#21527D] p-2 cursor-pointer hover:bg-[#E6F0FA] rounded"
                                            onClick={() => toggleSection("logistics")}
                                        >
                                            Logistics & Operations
                                            <DownArrowIconForm className={expandedSections.logistics ? "rotate-180" : ""} />
                                        </div>
                                        {expandedSections.logistics && (
                                            <ul className="ml-4 text-[10px]">
                                                <li>Logistics & SCM</li>
                                                <li>Cold Chain</li>
                                                <li>Freight & Customs</li>
                                                <li>Warehousing</li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Finance */}
                                    <div>
                                        <div
                                            className="flex justify-between items-center font-avenir font-[700] text-[12px] text-[#21527D] p-2 cursor-pointer hover:bg-[#E6F0FA] rounded"
                                            onClick={() => toggleSection("finance")}
                                        >
                                            Finance
                                            <DownArrowIconForm className={expandedSections.finance ? "rotate-180" : ""} />
                                        </div>
                                        {expandedSections.finance && (
                                            <ul className="ml-4 text-[10px]">
                                                <li>BFSI</li>
                                                <li>Fintech</li>
                                                <li>Accounting</li>
                                                <li>Tax</li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Healthcare */}
                                    <div>
                                        <div
                                            className="flex justify-between items-center font-avenir font-[700] text-[12px] text-[#21527D] p-2 cursor-pointer hover:bg-[#E6F0FA] rounded"
                                            onClick={() => toggleSection("healthcare")}
                                        >
                                            Healthcare
                                            <DownArrowIconForm className={expandedSections.healthcare ? "rotate-180" : ""} />
                                        </div>
                                        {expandedSections.healthcare && (
                                            <ul className="ml-4 text-[10px]">
                                                <li>Healthcare</li>
                                                <li>Pharma</li>
                                                <li>Insurance (Health)</li>
                                                <li>EMR</li>
                                            </ul>
                                        )}
                                    </div>

                                    {/* Enterprise */}
                                    <div>
                                        <div
                                            className="flex justify-between items-center font-avenir font-[700] text-[12px] text-[#21527D] p-2 cursor-pointer hover:bg-[#E6F0FA] rounded"
                                            onClick={() => toggleSection("enterprise")}
                                        >
                                            Enterprise Ops
                                            <DownArrowIconForm className={expandedSections.enterprise ? "rotate-180" : ""} />
                                        </div>
                                        {expandedSections.enterprise && (
                                            <ul className="ml-4 text-[10px]">
                                                <li>HR</li>
                                                <li>Legal</li>
                                                <li>Procurement</li>
                                                <li>Vendor Management</li>
                                            </ul>
                                        )}
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                    <div className={row}>
                        <label className={label}>Use Case</label>

                        <textarea
                            placeholder="Describe your case briefly"
                            className="
      w-full sm:w-[250px]
      h-[80px]
      rounded-[20px]
      bg-[#FDFDFD]
      shadow-[0px_2px_4px_1px_#21527D26]
      px-4 py-3
      font-avenir text-[12px]
      text-[#82A9CC]
      placeholder:text-[#82A9CC]
      outline-none
      resize-none
    "
                        />
                    </div>


                    <div className={row}>
                        <label className={label}>Job Title</label>
                        <input className={input} placeholder="CEO, CTO, Product Manager…" />
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowSuccess(true)}
                        className="w-[180px] h-[50px] font-avenir font-bold text-[16px] text-white bg-[#21527D] rounded-[18px] hover:opacity-90 transition"
                    >
                        Submit
                    </button>
                </div>

            </div>

            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <DemoSuccess onClose={() => setShowSuccess(false)} />
                </div>
            )}


        </div>
    );
};

export default DemoLogin;
