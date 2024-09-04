import React from 'react';
import mee from './assets/me.jpg';
import meee from './assets/meee.jpg';

function ProjectCard({current,title,description,about,skill,link='https://github.com/Shyamkadiwar/HealthInsights_DeepLearningProject.git'}) {
  return (
    <div className="flex justify-center items-center h-auto mt-4 p-3">
      <div className="transition-all duration-500 hover:scale-105 bg-transparent p-6 w-full max-w-3xl h-auto border-[#8646d7] border-l-2 border-r-8 border-t-2 border-b-8 rounded-3xl m-3">
        <div className="flex  md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 md:mb-0">
            <a href="https://github.com/Shyamkadiwar"><img 
              src={meee}
              alt="User" 
              className="w-8 h-13 rounded-full object-cover"
            /></a>
            <a href="https://github.com/Shyamkadiwar"><span className="text-sm text-slate-400 font-fontt3 font-semibold">Shyam Kadiwar</span></a>
            
          </div>
          <div className="text-sm text-[#38c8f4] flex sm:gap-6 gap-1 mt-1 justify-center items-center">
            <div className='font-fontt2 text-center md:text-left'>{current}</div>
            <a href={link}><i className="devicon-github-original text-2xl"></i></a>
          </div>
        </div>
        <h2 className="text-3xl font-bold font-fontt3 text-[#dcab70]">{title}</h2>
        <h3 className="text-xl text-[rgb(167_154_230/_87%)] font-fontt3 mt-4">{description}</h3>
        <ul className="text-white list-disc font-fontt pl-5 space-y-2">
         <h3 className='font-fontt3'>{about}</h3>
        </ul>
        <p className="mt-6 font-fontt3 text-sm text-[#9df09d]">
          {skill}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
