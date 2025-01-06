import React from 'react';
import download from './assets/download.png';
import path from '../Resume.pdf'; // Import the PDF correctly

const Npxcard = () => {
  const handleCopy = () => {
    const link = document.createElement('a');
    link.href = path; // Use the imported path variable for the correct path
    link.download = 'Shyam_CV.pdf'; // The name the file will be saved as
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
