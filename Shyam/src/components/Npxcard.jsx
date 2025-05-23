import React from 'react';
import download from './assets/download.png';
import path from '../SHYAM_CV.pdf'; 

const Npxcard = () => {
  const handleCopy = () => {
    const link = document.createElement('a');
    link.href = path;
    link.download = 'SHYAM_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center bg-[#1e1e2d] py-2 pr-2 pl-1 mt-9 rounded-2xl max-w-52 shadow-lg border border-slate-800">
      <div className="bg-[#2bc5e0] w-5 h-11 rounded-xl"> </div>
      <div className="flex-1 px-3 text-[#2ccae6] font-mono sm:text-lg text-md">
        Download CV
      </div>

      <button 
        onClick={handleCopy} 
        className="flex items-center justify-center w-10 h-10"
        aria-label="Copy to clipboard"
      >
        {/* Direct link for downloading the PDF */}
        <img src={download} className='w-8 h-8' alt="Download" />
      </button>
    </div>
  );
};

export default Npxcard;
