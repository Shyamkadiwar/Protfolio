import React from 'react';
import path from '../Shyam_CV.pdf'

const Spin = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ShyamCV.pdf';
    link.download = 'Shyam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="bg-gray-900 p-3 rounded-full flex justify-center items-center animate-spin-slow cursor-pointer absolute md:top-6 md:right-12 top-10 right-3"
      // onClick={handleDownload}
    >
      {/* <p className="text-[rgb(167_154_230_/_87%)] text-sm md:text-2xl">CV</p> */}
      <p className="text-[rgb(167_154_230_/_87%)] text-xl md:text-2xl"><a href={path} download="Shyam_CV.pdf">CV</a></p>
    </div>
  );
};

export default Spin;
