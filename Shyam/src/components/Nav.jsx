import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';


const Nav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:flex justify-center items-center hidden">
      <div className="rounded-full mb-8 z-[10000000] backdrop-blur-md mt-5 sticky">
        <nav className="flex gap-[100px] relative justify-start w-full z-[100] rounded-lg">
          <a
            className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
            data-active="true"
            href="#"
            onClick={() => scrollToSection('home')}
          >
            <span className="font-fontt text-xl text-foreground">/</span>
            <div
              className="absolute bottom-0 left-0 h-full bg-[#CBA6F7]/70 rounded-full -z-10"
              aria-hidden="true"
              style={{ width: '100%', transform: 'none', transformOrigin: '50% 50% 0px' }}
            ></div>
          </a>
          <a
            className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-400"
            data-active="false"
            href="#"
            onClick={() => scrollToSection('skill')}
          >
            <span className="font-fontt text-xl text-foreground">skills</span>
          </a>
          <a
            className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-400"
            data-active="false"
            href="#"
            onClick={() => scrollToSection('project')}
          >
            <span className="font-fontt text-xl text-foreground">projects</span>
          </a>
          <a
            className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-400"
            data-active="false"
            href="#"
            onClick={() => scrollToSection('exp')}
          >
            <span className="font-fontt text-xl text-foreground">works</span>
          </a>
        </nav>
      </div>  
    </div>
  );
};

export default Nav;