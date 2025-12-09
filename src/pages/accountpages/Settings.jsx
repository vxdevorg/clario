import React, { useState } from 'react';
import DownArrowIcon from '../../assets/icons/DownArrowIcon';

const Settings = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>

            {/* PAGE TITLE */}
            <h1 className="font-avenir font-[750] text-[22px] md:text-[24px] leading-[26px] text-[#21527D] mb-5 uppercase">
                Settings
            </h1>

            {/* MAIN CARD */}
            <div className="flex flex-col gap-3 shadow-[0px_0px_22.8px_2px_#57575740] bg-[#FDFDFD] rounded-[20px] py-8 md:py-10 px-4 md:px-10">

                {/* ENABLE CLOUD STORAGE */}
                <div className="flex flex-row items-start sm:items-center justify-between w-full gap-2">
                    <h2 className="font-avenir font-[700] text-[15px] md:text-[16px] leading-[30px] md:leading-[60px] tracking-[0.10em] capitalize text-[#121212]">
                        Enable Cloud Storage
                    </h2>

                    {/* Toggle */}
                    <div
                        onClick={() => setIsOn(!isOn)}
                        className={`w-[45px] h-[22px] rounded-full flex items-center cursor-pointer transition-all
                        ${isOn ? "bg-[#21527D]" : "bg-gray-300"}`}
                    >
                        <div
                            className={`w-[15px] h-[15px] bg-white rounded-full transition-all duration-300 ml-[3px]
                            ${isOn ? "translate-x-[20px]" : "translate-x-0"}`}
                        ></div>
                    </div>
                </div>

                {/* DEFAULT OUTPUT FORMAT */}
                <div className="flex flex-row items-center sm:items-start sm:items-center justify-between w-full gap-2">
                    <h2 className="font-avenir font-[700] text-[15px] md:text-[16px] leading-[30px] md:leading-[60px] tracking-[0.10em] capitalize text-[#121212]">
                        Default output format
                    </h2>

                    <div className="w-[130px] h-[40px] bg-[#E9F5FF] border border-[#82B8E8] 
                        rounded-[100px] flex items-center justify-center gap-2
                        font-avenir font-[600] text-[15px] md:text-[16px] tracking-[0.09em] capitalize text-[#21527D]">
                        Excel
                        <DownArrowIcon />
                    </div>
                </div>

                {/* DEFAULT LANGUAGE */}
                <div className="flex flex-row items-center sm:items-start sm:items-center justify-between w-full gap-2">
                    <h2 className="font-avenir font-[700] text-[15px] md:text-[16px] leading-[30px] md:leading-[60px] tracking-[0.10em] capitalize text-[#121212]">
                        Default language
                    </h2>

                    <div className="w-[140px] h-[40px] bg-[#E9F5FF] border border-[#82B8E8] 
                        rounded-[100px] flex items-center justify-center gap-2
                        font-avenir font-[600] text-[15px] md:text-[16px] tracking-[0.09em] capitalize text-[#21527D]">
                        English
                        <DownArrowIcon />
                    </div>
                </div>

            </div>

            {/* SAVE BUTTON */}
            <div className="w-full flex justify-center sm:justify-end mt-6">
                <button className="w-full sm:w-[200px] h-[45px] bg-[#21527D] rounded-[10px] font-avenir font-[600] text-[18px] md:text-[20px] text-[#FDFDFD]">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
