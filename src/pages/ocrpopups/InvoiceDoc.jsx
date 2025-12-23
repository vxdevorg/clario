import React from "react";
import CloseIcon from "../../assets/icons/loginpages/CloseIcon";

const InvoiceDoc = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 px-4">
      
      {/* Modal */}
      <div
        className="w-full max-w-[700px] bg-white
        rounded-[30px]
        shadow-[0px_4px_20px_0px_#00000040]
        p-6 sm:p-8 md:p-10 relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-avenir font-semibold text-[20px] sm:text-[24px] text-[#121212]">
            Choose a format
          </h2>

          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Invoice OCR */}
          <div
            className="bg-[#EDF2F8]
            shadow-[inset_0px_0px_4px_0px_#80628E7A]
            rounded-[12px]
            p-6 text-center flex flex-col gap-3"
          >
            <h3 className="font-avenir font-bold text-[16px] leading-[30px] text-[#21527D]">
              Invoice OCR
            </h3>

            <p className="font-avenir font-semibold text-[12px] leading-[21px] tracking-[0.04em] text-[#121212]">
              Extract structured invoice data with high accuracy.
            </p>

            <p className="font-avenir font-semibold text-[10px] leading-[21px] tracking-[0.04em] text-[#121212]">
              Auto detect fields and export to Excel
            </p>

            <div className="mt-3">
              <p className="font-avenir font-bold text-[10px] text-[#121212] mb-2">
                Input formats
              </p>
              <p className="font-avenir font-semibold italic text-[10px] text-[#21527D]">
                PDF · Image
              </p>
            </div>
          </div>

          {/* Document OCR */}
          <div
            className="bg-[#21527D]
            shadow-[inset_0px_0px_4px_0px_#80628E7A]
            rounded-[12px]
            p-6 text-center flex flex-col gap-3"
          >
            <h3 className="font-avenir font-bold text-[16px] leading-[30px] text-white">
              Document OCR
            </h3>

            <p className="font-avenir font-semibold text-[12px] leading-[21px] tracking-[0.04em] text-white">
              Convert documents into clean, searchable text.
            </p>

            <p className="font-avenir font-semibold text-[10px] leading-[21px] tracking-[0.04em] text-white">
              Works with printed and handwritten content.
            </p>

            <div className="mt-3">
              <p className="font-avenir font-bold text-[10px] text-white mb-2">
                Input formats
              </p>
              <p className="font-avenir font-semibold italic text-[10px] text-white">
                PDF · Image
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvoiceDoc;
