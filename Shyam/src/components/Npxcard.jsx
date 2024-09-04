import React from 'react';

const Npxcard = () => {

    const handleCopy = () => {
        const textToCopy = 'npx shyamkadiwar';
        navigator.clipboard.writeText(textToCopy).then(() => {
          alert('Copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      };

  return (
    <div className="flex items-center bg-[#1e1e2d] py-2 pr-2 pl-1 mt-9  rounded-2xl max-w-64 shadow-lg border border-slate-800">
      <div className="bg-[#23a7be] w-5 h-11 rounded-xl">.</div>
      <div className="flex-1 px-3 text-[#23a7be] font-mono text-lg">
        npx shyamkadiwar
      </div>

      <button 
        onClick={handleCopy} 
        className="flex items-center justify-center w-10 h-10"
        aria-label="Copy to clipboard"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#23a7be" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75v10.5m-7.5-10.5v10.5M4.5 6.75h15m-15 0v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75m-15 0V6A2.25 2.25 0 016.75 3.75h10.5A2.25 2.25 0 0119.5 6v.75" />
        </svg>
      </button>

    </div>
  );
};

export default Npxcard;
