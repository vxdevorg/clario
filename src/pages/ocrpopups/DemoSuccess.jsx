import React from "react";
import CloseIcon from "../../assets/icons/loginpages/CloseIcon";

const DemoSuccess = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 px-4">
      
      {/* Card */}
      <div
        className="w-full max-w-[720px] bg-[#FDFDFD]
        rounded-[30px]
        shadow-[0px_0px_13px_0px_#00000040]
        p-6 sm:p-8 md:p-10 relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-avenir font-semibold text-[18px] sm:text-[20px] leading-[26px] text-[#21527D]">
            Demo Booked Successfully
          </h2>

          <button onClick={onClose} className="cursor-pointer">
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <p
          className="font-avenir font-normal
          text-[12px] sm:text-[14px]
          leading-[22px] sm:leading-[26px]
          text-[#000000] mb-4"
        >
          Thanks for scheduling a demo with Clario.
        </p>

        <p
          className="font-avenir font-normal
          text-[12px] sm:text-[14px]
          leading-[22px] sm:leading-[26px]
          text-[#000000] mb-4"
        >
          Our team will review your use case and reach out shortly with the
          meeting details. During the session, we’ll walk through how Clario
          extracts data from documents and how it fits into your workflow.
        </p>

        <p
          className="font-avenir font-normal
          text-[12px] sm:text-[14px]
          leading-[22px] sm:leading-[26px]
          text-[#000000] mb-4"
        >
          You’ll receive a confirmation email with the calendar invite.
        </p>

        <p
          className="font-avenir font-normal
          text-[12px] sm:text-[14px]
          leading-[22px] sm:leading-[26px]
          text-[#000000]"
        >
          Looking forward to the conversation.
        </p>
      </div>
    </div>
  );
};

export default DemoSuccess;
