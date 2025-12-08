import React from 'react';

const PersonalScreen = () => {
    return (
        <div>
            <h1 className='font-avenir font-[700] text-[36px] leading-[26px] tracking-[0] text-[#121212]'>Scale Your Document Processing</h1>
            <p className='font-avenir font-[400] italic text-[24px] leading-[26px] tracking-[0] text-[#464646] mt-5'>Select the speed and volume your business needs, or build your own solution.</p>
            <div>
                <div
                    className="relative rounded-[20px] transition-all duration-100 hover:border-[3px] hover:border-[#D6BF7C] p-[5px] w-[305px] h-[445px]">

                    {/* CARD START */}
                    <div className="relative w-full h-full bg-[#EADBAF] rounded-[20px]  flex flex-col items-center py-6 gap-6">

                        {/* Bottom Arc */}
                        <div className="bg-[#D6BF7C] w-full h-[300px] absolute bottom-0 rounded-t-[100%] rounded-b-[20px]"></div>

                        {/* Title */}
                        <h2 className="font-avenir font-[700] text-[24px] leading-[100%] text-[#121212] w-full px-5 z-10">
                            Free
                        </h2>

                        {/* Inner Box */}
                        <div className="bg-[#F8F4F4] z-10 rounded-[25px] w-[250px] h-[270px] 
                        flex flex-col justify-center items-center gap-6 text-center">

                            <h2 className="font-avenir font-[600] text-[20px] leading-[26px] text-[#464646]">
                                50 pages / month free
                            </h2>

                            <p className="px-5 font-avenir font-[400] italic text-[16px] leading-[29px] text-[#6E6E6E]">
                                Basic OCR, community support, web UI + sandbox API access
                            </p>

                            <h2 className="font-avenir font-[700] text-[24px] leading-[26px] text-[#634C08]">
                                $0 / month
                            </h2>
                        </div>

                        {/* Button */}
                        <button className="
          font-avenir font-[600] text-[20px] leading-[26px] text-[#121212]
          bg-[#FFF5D9] border border-[#FFE9A8]
          shadow-[0px_0px_4px_2px_#FFE085]
          rounded-[100px] px-8 py-2 z-10
        ">
                            Subscribe
                        </button>

                    </div>
                    {/* CARD END */}

                </div>


                <div></div>
                <div></div>
            </div>
        </div >
    );
}

export default PersonalScreen;
