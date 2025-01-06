import React from 'react';
import gitLogo from './assets/github.svg';
import mailLogo from './assets/mail.svg';
import linkedINLogo from './assets/linkedin.svg';
import profileLogo from './assets/profile.svg';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t-[1px] pt-6 md:py-8 mt-12 border-cyan-200/10 border-solid rounded-md">
      <div className="flex justify-center items-center sm:ml-60 gap-12">
        <div className="flex mt-6 gap-7">
          <a href="https://github.com/Shyamkadiwar">
            <img className="w-6 h-6" src={gitLogo} alt="GitHub" />
          </a>
          <a href="mailto:shyamkadiwar@gmail.com">
            <img className="w-6 h-6" src={mailLogo} alt="Mail" />
          </a>
          <a href="https://www.linkedin.com/in/shyam-kadiwar-6bb865249/">
          <img className="w-6 h-6" src={linkedINLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mr-60">
        <div className="text-foreground font-fontt3 text-xl">
          Made with 
          <div className="relative group w-fit inline-block">
            <div className="cursor-pointer z-[9] text-[#f52b2b] rounded-xl w-fit" tabIndex="0" style={{ transform: 'none' }}>
             &#10084;
            </div>
          </div> by <span className='text-[#38c8f4]'>Shyam</span>, Thank You!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
