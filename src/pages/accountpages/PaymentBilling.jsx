import React from "react";
import BigCardShadow from "../../assets/icons/accountpage/BigCardShadow";

const PaymentBilling = () => {
    return (
        <div>
            {/* TITLE */}
            <h1 className="font-avenir font-[750] text-[22px] md:text-[24px] leading-[26px] text-[#21527D] mb-5">
                PAYMENT & BILLING
            </h1>

            {/* MAIN CARD */}
            <div className="bg-[#FDFDFD] shadow-[0px_0px_12.4px_2px_#5757571A] rounded-[20px] px-4 md:px-6 py-6 md:py-8">

                {/* PAYMENT SECTION */}
                <div className="flex flex-col sm:flex-row items-start md:items-end justify-between gap-8 md:gap-10 w-full">

                    {/* LEFT SIDE (Icon + Details) */}
                    <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-6 md:gap-10 w-full">

                        {/* ICON BOX */}
                        <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-[10px] bg-[#C5D4E2]/35 flex items-center justify-center overflow-hidden shrink-0">
                            <BigCardShadow />
                        </div>

                        {/* PAYMENT DETAILS */}
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="font-avenir font-[700] text-[12px] md:text-[16px] tracking-[0.33em] uppercase text-[#121212]">
                                Your payment method
                            </h2>

                            <div className="mt-3 flex items-center justify-center w-[180px] md:w-[200px] h-[40px] md:h-[45px]
                                font-avenir font-[600] text-[14px] md:text-[16px] tracking-[0.09em] lowercase 
                                text-[#21527D] bg-[#E9F5FF] border border-[0.25px] border-[#82B8E8] 
                                rounded-[100px]">
                                vibexio@okaxis
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button className="w-full sm:w-[250px] h-[45px] font-avenir font-[600] text-[15px] md:text-[16px] 
                        text-[#FDFDFD] bg-[#21527D] rounded-[10px] shrink-0">
                        Change Payment Method
                    </button>
                </div>

                <div className="mt-10 w-full">
                    <h2 className="font-avenir font-[700] text-[14px] md:text-[16px] tracking-[0.33em] uppercase text-[#121212]">
                        BILLING HISTORY
                    </h2>

                    {/* TABLE CONTAINER */}
                    <div className="w-full overflow-x-auto mt-3 rounded-lg scrollbar-hide">
                        <table className="w-full border-collapse bg-white">
                            {/* TABLE HEAD */}
                            <thead className="bg-[#F5F5F5] border-b border-[#9A9A9A]">
                                <tr>
                                    <th className="text-left w-[150px] px-4 h-[55px] font-avenir font-[700] text-[15px] text-[#121212]">
                                        Date
                                    </th>
                                    <th className="text-left px-4 font-avenir font-[700] text-[15px] text-[#121212] whitespace-nowrap">
                                        Description
                                    </th>
                                    <th className="text-center w-[120px] px-4 font-avenir font-[700] text-[15px] text-[#121212]">
                                        Amount
                                    </th>
                                    <th className="text-right w-full md:w-[200px] px-4 font-avenir font-[700] text-[15px] text-[#121212] whitespace-nowrap">
                                        Download Invoice
                                    </th>
                                </tr>
                            </thead>

                            {/* TABLE BODY */}
                            <tbody>
                                <tr className="border-b border-[#E5E5E5] h-[55px]">
                                    <td className="px-4 font-avenir font-[600] text-[15px] text-[#595959]">
                                        07.09.2025
                                    </td>

                                    <td className="px-4 font-avenir font-[600] text-[15px] text-[#595959] whitespace-nowrap">
                                        Pro - 3 Months
                                    </td>

                                    <td className="px-4 text-center font-avenir font-[600] text-[15px] text-[#595959]">
                                        80$
                                    </td>

                                    <td className="px-4 text-right font-avenir font-[600] text-[15px] text-[#3374AC] underline cursor-pointer whitespace-nowrap">
                                        Download Invoice
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentBilling;
