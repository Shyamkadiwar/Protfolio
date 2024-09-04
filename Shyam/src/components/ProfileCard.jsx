import React, { useEffect } from "react";
import mee from './assets/me.jpg'
import dott from './assets/avail.png'

function ProfileCard() {
  useEffect(() => {
    function updateTime() {
      const timeElement = document.getElementById('time');
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;
      if (timeElement) {
        timeElement.textContent = formattedTime;
      }
    }

    const intervalId = setInterval(updateTime, 1000); // Update time every second
    updateTime(); // Initial call to display time immediately

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="sm:flex sm:justify-center sm:items-center items-start justify-start mt-10">
      <div className="flex sm:items-center rounded-lg sm:px-24 sm:w-[40%] w-full pt-10 px-5">
        <img
          src={mee}
          alt="Profile Picture"
          className="w-[75px] h-[110px] rounded-[15px] object-cover mr-4"
        />
        <div className="flex flex-col gap-2">
          <div className="font-fontt3 text-[#38c8f4] text-xl font-bold">Shyam Here</div>
          <div className="text-gray-500 text-base font-fontt3 flex items-center">
            <div>
              <img className="h-4 w-4 justify-center items-center" src={dott} alt="" />
            </div>
            <div>
            Available For FreeLancing
            </div>
          </div>
          <div className="text-[#9df09d] text-base font-fontt3" id="time"></div>
        </div>
      </div>
      <div className="sm:px-5 sm:w-[40%] sm:pt-4 w-full px-5 pt-10">
        <h3 className="text-[rgb(167_154_230/_87%)] text-lg font-fontt3 font-bold">
          Hey, I'm <span className="text-[rgb(255_190_111)]">Shyam</span>. I'm a 20-year-old Machine Learning, Data Analyst, and Full Stack Developer based in India. I've been coding since 2022. I also <span className="text-[rgb(255_190_111)]">love</span> contributing to open source to give back to the community.
        </h3>
      </div>
    </div>
  );
}

export default ProfileCard;
