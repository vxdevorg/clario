import React from 'react';
import EyeIcon from '../../assets/icons/loginpages/EyeIcon';
import CheckCircleIcon from '../../assets/icons/loginpages/CheckCircleIcon';
import GoogleIcon from '../../assets/icons/loginpages/GoogleIcon';
import MailIcon from '../../assets/icons/loginpages/MailIcon';
import CloseIcon from '../../assets/icons/loginpages/CloseIcon';

const Signup = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[540px] rounded-[40px] bg-[linear-gradient(205.4deg,#D0DFEB_36.54%,rgba(253,253,253,0.6)_180%)] shadow-[0px_16px_25.2px_7px_#1A55701A] p-10 flex flex-col gap-5 relative">

                {/* Close Button */}
                <div className="absolute right-6 top-6 cursor-pointer">
                    <CloseIcon />
                </div>

                {/* Title */}
                <h2 className="font-avenir font-extrabold text-[32px] text-center text-[#121212]">
                    Create your Account
                </h2>

                {/* Toggle Buttons */}
                <div className="flex justify-center gap-3">
                    <div className="font-avenir font-[700] text-[16px] text-[#FDFDFD] bg-[#21527D] rounded-[100px] w-[125px] h-[40px] flex items-center justify-center">
                        Personal
                    </div>
                    <div className="font-avenir font-[600] text-[16px] text-[#21527D] bg-[#FDFDFD] shadow-[0px_8px_15px_-5px_#21527D26] rounded-[100px] w-[125px] h-[40px] flex items-center justify-center">
                        Business
                    </div>
                </div>

                {/* Form Area */}
                <div className="flex flex-col gap-6">

                    {/* Full Name */}
                    <div className="flex justify-between items-center">
                        <h2 className="font-avenir font-[700] text-[16px] text-[#21527D]">
                            Full Name
                        </h2>

                        <input
                            type="text"
                            placeholder="Eg., Rayna Lipshutz"
                            className="w-[300px] h-[40px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 font-avenir text-[12px] text-[#82A9CC] placeholder:text-[#82A9CC] outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex justify-between items-center">
                        <h2 className="font-avenir font-[700] text-[16px] text-[#21527D]">
                            E Mail
                        </h2>

                        <input
                            type="text"
                            placeholder="Eg., Rayna Lipshutz@vibexio.ai"
                            className="w-[300px] h-[40px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 font-avenir text-[12px] text-[#82A9CC] placeholder:text-[#82A9CC] outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex justify-between items-center">
                        <h2 className="font-avenir font-[700] text-[16px] text-[#21527D]">
                            Phone Number
                        </h2>

                        <input
                            type="text"
                            placeholder="98xxxxxx76"
                            className="w-[300px] h-[40px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 font-avenir text-[12px] text-[#82A9CC] placeholder:text-[#82A9CC] outline-none"
                        />
                    </div>

                    {/* Create Password */}
                    <div className="flex justify-between items-center">
                        <h2 className="font-avenir font-[700] text-[16px] text-[#21527D]">Create Password</h2>

                        <div className="relative w-[300px]">
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-full h-[40px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 pr-10 font-avenir text-[12px] text-[#82A9CC] outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                                <EyeIcon />
                            </span>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="flex justify-between items-center">
                        <h2 className="font-avenir font-[700] text-[16px] text-[#21527D]">Confirm Password</h2>

                        <div className="relative w-[300px]">
                            <input
                                type="password"
                                placeholder="Confirm your Password"
                                className="w-full h-[40px] rounded-[100px] bg-[#FDFDFD] shadow-[0px_2px_4px_1px_#21527D26] px-4 pr-10 font-avenir text-[12px] text-[#82A9CC] outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                <CheckCircleIcon />
                            </span>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mt-1 justify-center">
                        <input type="checkbox" className="w-4 h-4 accent-[#21527D]" />
                        <p className="font-avenir text-[12px] text-[#21527D]/75">
                            I agree to <span className="font-[700]">Vibexio</span>’s
                            <span className="underline ml-1 cursor-pointer">Terms of Service</span> &
                            <span className="underline ml-1 cursor-pointer">Privacy Policy</span>
                        </p>
                    </div>
                </div>

                {/* Sign Up Button */}
                <div className="flex justify-center mt-2">
                    <button className="font-avenir font-[750] text-[16px] text-[#FDFDFD] bg-[#21527D] rounded-[16px] w-[200px] h-[60px]">
                        Sign Up
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 justify-center">
                    <div className="w-[170px] border-t border-[#859BAE]"></div>
                    <span className="font-avenir text-[20px] text-[#859BAE]">Or</span>
                    <div className="w-[170px] border-t border-[#859BAE]"></div>
                </div>

                {/* Icons */}
                <div className="flex justify-center gap-4">
                    <div className="bg-[#FDFDFD] shadow-[0px_5px_4px_0px_#21527D40] w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer">
                        <GoogleIcon />
                    </div>
                    <div className="bg-[#FDFDFD] shadow-[0px_5px_4px_0px_#21527D40] w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer">
                        <MailIcon />
                    </div>
                </div>

                {/* Bottom Text */}
                <p className="text-center font-avenir text-[14px] text-[#121212] opacity-40">
                    Already have an account?
                    <span className="font-[600] text-[16px] text-[#21527D] ml-1 cursor-pointer">Sign In</span>
                </p>

            </div>
        </div>
    );
}

export default Signup;
