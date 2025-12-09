import React from 'react';
import EditIcon from '../../assets/icons/accountpage/EditIcon';
import PlusCircleIcon from '../../assets/icons/accountpage/PlusCircleIcon';
import RotateArrowIcon from '../../assets/icons/accountpage/RotateArrowIcon';
import TrashIcon from '../../assets/icons/accountpage/TrashIcon';

const UserAccount = () => {
    return (
        <div>
            <h1 className='font-avenir font-[750] text-[24px] leading-[26px] text-[#21527D] mb-5'>
                ACCOUNT
            </h1>

            {/* INPUTS SECTION */}
            <div className='flex flex-col gap-4'>

                {/* USERNAME */}
                <div className="w-full h-[60px] md:h-[70px] bg-[#FDFDFD] rounded-[20px] 
                shadow-[0px_0px_12.4px_2px_#5757571A] flex items-center px-4 md:px-6">
                    <input
                        type="text"
                        placeholder="User Name"
                        className="w-full h-full bg-transparent outline-none font-avenir font-[600] 
                        text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] placeholder:text-[#8D8D8D]"
                    />
                    <EditIcon width={24} height={24} className="cursor-pointer hidden md:block" />
                </div>

                {/* EMAIL */}
                <div className="w-full h-[60px] md:h-[70px] bg-[#FDFDFD] rounded-[20px] 
                shadow-[0px_0px_12.4px_2px_#5757571A] flex items-center px-4 md:px-6">
                    <input
                        type="text"
                        placeholder="E Mail"
                        className="w-full h-full bg-transparent outline-none font-avenir font-[600] 
                        text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] placeholder:text-[#8D8D8D]"
                    />
                </div>

                {/* MOBILE NUMBER */}
                <div className="w-full h-[60px] md:h-[70px] bg-[#FDFDFD] rounded-[20px] 
                shadow-[0px_0px_12.4px_2px_#5757571A] flex items-center px-4 md:px-6">
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full h-full bg-transparent outline-none font-avenir font-[600] 
                        text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] placeholder:text-[#8D8D8D]"
                    />
                </div>

                {/* PASSWORD */}
                <div className="w-full h-[60px] md:h-[70px] bg-[#FDFDFD] rounded-[20px] 
                shadow-[0px_0px_12.4px_2px_#5757571A] flex items-center px-4 md:px-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-full bg-transparent outline-none font-avenir font-[600] 
                        text-[18px] md:text-[20px] leading-[24px] md:leading-[26px] placeholder:text-[#8D8D8D]"
                    />
                    <EditIcon width={24} height={24} className="cursor-pointer hidden md:block" />
                </div>

            </div>

            {/* BUTTONS */}
            <div className='flex flex-row flex-wrap gap-5 mt-10 justify-center'>

                {/* ADD ACCOUNT */}
                <button className='w-full sm:w-[300px] h-[55px] md:h-[65px] flex items-center justify-center gap-3 
                font-avenir font-[350] text-[20px] md:text-[24px] leading-[100%] tracking-[0.09em] 
                capitalize text-[#21527D] bg-[#E9F5FF] shadow-[0px_1px_4px_0px_#0000001A] rounded-[100px]'>
                    <PlusCircleIcon />
                    Add account
                </button>

                {/* LOGOUT */}
                <button className='w-full sm:w-[235px] h-[55px] md:h-[65px] flex items-center justify-center gap-3 
                font-avenir font-[350] text-[20px] md:text-[24px] leading-[100%] tracking-[0.09em] 
                capitalize text-[#21527D] bg-[#E9F5FF] shadow-[0px_1px_4px_0px_#0000001A] rounded-[100px]'>
                    <RotateArrowIcon />
                    Logout
                </button>

                {/* DELETE ACCOUNT */}
                <button className='w-full sm:w-[235px] h-[55px] md:h-[65px] flex items-center justify-center gap-3 
                font-avenir font-[350] text-[20px] md:text-[24px] leading-[100%] tracking-[0.09em] capitalize 
                text-[#C62525] bg-[#FFF4F4] border border-[0.25px] border-[#D25B5C] 
                shadow-[0px_1px_4px_0px_#0000001A] rounded-[100px]'>
                    <TrashIcon />
                    Delete
                </button>

            </div>
        </div>
    );
};

export default UserAccount;
