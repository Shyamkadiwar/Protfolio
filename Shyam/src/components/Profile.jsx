import React from "react";
import gitLogo from './assets/github.svg';
import mailLogo from './assets/mail.svg';
import linkedINLogo from './assets/linkedin.svg';
import profileLogo from './assets/profile.svg';
import mee from './assets/me.jpg';
import Nav from "./Nav";
import Npxcard from "./Npxcard";

function Profile() {
    const url = 'https://github.com/Shyamkadiwar';
    return (
        <>
            <div id="home" className="flex flex-col sm:flex-row sm:w-full sm:h-auto sm:justify-center sm:gap-20 w-auto h-auto m-3">

                <div className="flex flex-col w-full sm:w-auto h-4/5 justify-center">
                    <div className="pt-5">
                        <h1 className="font-fontt text-[rgb(186_230_253_/_95%)] text-8xl font-extrabold mt-2">Shyam</h1>
                        <div className="font-fontt text-[rgb(167_154_230_/_87%)] text-2xl font-extrabold">
                            <p className="mt-7">AI/ML Engineer.</p>
                            <p className="mt-4">Full Stack Web Developer.</p>
                            <p className="mt-4">Data Analyst.</p>
                            <p className="mt-4">From <span className="text-[#9df09d]">concepts</span> to <span className="text-[#9df09d]">code;</span></p>
                        </div>
                    </div>
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
                        <a href="https://shyamcodes.vercel.app">
                            <img className="w-6 h-6" src={profileLogo} alt="User" />
                        </a>
                        
                    </div>
                    <Npxcard />
                </div>

                <div className="sm:flex w-full sm:w-[25%] h-4/5 items-center justify-center transition-all duration-500 hover:scale-105 hidden">
                    <img className="mt-7 rounded-3xl w-[70%] h-[78%]" src={mee} alt="profile" />
                </div>
            </div>
        </>
    );
}

export default Profile;
