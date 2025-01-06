import React from "react";
import pyLogo from './assets/pylogo.png'
import jsLogo from './assets/JS-logo.png'
import tsLogo from './assets/TS - logo.png'
import javaLogo from './assets/javaLogo.png'
import tfLogo from './assets/tf-logo.png'
import skLogo from './assets/sklearn.png'
import matLogo from './assets/matplot-logo.png'
import seaLogo from './assets/seaborn.svg'
import npLogo from './assets/numpy-logo.png'
import stLogo from './assets/streamlit.png'
import powerBi from './assets/New_Power_BI_Logo.svg'
import tableau from './assets/tableau.png'
import SkillCard from "./SkillCard";

function Skills() {
    return (
        <>
            <div className="flex justify-center items-center h-screen sm:mt-10 mt-28" >
                <div id="skill" className="w-full max-w-7xl flex flex-col justify-center items-center gap-5">
                    <div className="flex justify-center items-center mb-2">
                        <h1 className="text-4xl text-white font-fontt font-bold">
                            <span className="text-[#9df09d]">code</span>:<span className="text-[#38c8f4]">skills</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-[#7ea9ff]' calss='devicon-python-plain colored text-2xl' skillName='Python' />
                        <SkillCard bc='border-[#7ea9ff]' calss='devicon-javascript-plain colored text-2xl' skillName='JavaScript' />
                        <SkillCard bc='border-[#7ea9ff]' calss='devicon-typescript-plain colored text-2xl' skillName='TypeScript' />
                        <SkillCard bc='border-[#7ea9ff]' calss='devicon-java-plain colored text-2xl' skillName='Java' />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-[#2da4b9]' calss='devicon-tensorflow-original colored text-2xl' skillName='Tensorflow' />
                        <SkillCard bc='border-[#2da4b9]' calss='devicon-scikitlearn-plain colored text-2xl' skillName='Scikit-learn' />
                        <SkillCard bc='border-[#2da4b9]' calss='devicon-pytorch-original colored text-2xl' skillName='Pytorch' />
                        {/* <SkillCard bc='border-[#2da4b9]' calss='devicon-matplotlib-plain colored text-2xl' skillName='Seaborn' /> */}
                        <div className={`flex transition-all duration-500 hover:scale-110 bg-transparent sm:h-12 sm:w-40 m-1 w-2/5 justify-center items-center border-[#2da4b9] border-l-0 border-r-4 border-t-0 border-b-4 rounded-xl`}>
                            <div className="flex items-center">
                                <img className="w-6 h-6" src={seaLogo} alt="" />
                                <p className="font-fontt text-white sm:text-lg text-sm sm:pl-3 m-1">Seaborn</p>
                            </div>
                        </div>
                        <SkillCard bc='border-[#2da4b9]' calss='devicon-matplotlib-plain colored text-2xl' skillName='MatplotLib' />
                        <SkillCard bc='border-[#2da4b9]' calss='devicon-pandas-plain colored text-2xl' skillName='Pandas' />
                        {/* <SkillCard bc='amber-300' calss='devicon-numpy-plain colored text-2xl' skillName='Numpy' /> */}
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-[#34c07c]' calss='devicon-mongodb-plain colored text-2xl' skillName='MongoDB' />
                        <SkillCard bc='border-[#34c07c]' calss='devicon-react-original colored text-2xl' skillName='ReactJS' />
                        <SkillCard bc='border-[#34c07c]' calss='devicon-express-original text-2xl' skillName='ExpressJS' />
                        <SkillCard bc='border-[#34c07c]' calss='devicon-nextjs-plain text-2xl' skillName='NextJS' />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-[#dcab70]' calss='devicon-azure-plain colored text-2xl' skillName='Azure' />
                        <SkillCard bc='border-[#dcab70]' calss='devicon-docker-plain colored text-2xl' skillName='Docker' />
                        <SkillCard bc='border-[#dcab70]' calss='devicon-git-plain colored text-2xl' skillName='Git' />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-pink-400' calss='devicon-streamlit-plain colored text-2xl' skillName='Streamlit' />
                        <SkillCard bc='border-pink-400' calss='devicon-keras-plain colored text-2xl' skillName='Keras' />
                        <SkillCard bc='border-pink-400' calss='devicon-tailwindcss-original colored text-2xl' skillName='Tailwind' />
                        <SkillCard bc='border-pink-400' calss='devicon-linux-plain text-2xl' skillName='Linux' />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <SkillCard bc='border-amber-300' calss='devicon-jupyter-plain colored text-2xl' skillName='Jupyter' />
                        <div className={`flex transition-all duration-500 hover:scale-110 bg-transparent sm:h-12 sm:w-40 m-1 w-2/5 justify-center items-center border-amber-300 border-l-0 border-r-4 border-t-0 border-b-4 rounded-xl`}>
                            <div className="flex items-center">
                                <img className="w-6 h-6" src={powerBi} alt="" />
                                <p className="font-fontt text-white sm:text-lg text-sm sm:pl-3 m-1">PowerBi</p>
                            </div>
                        </div>
                        <div className={`flex transition-all duration-500 hover:scale-110 bg-transparent sm:h-12 sm:w-40 m-1 w-2/5 justify-center items-center border-amber-300 border-l-0 border-r-4 border-t-0 border-b-4 rounded-xl`}>
                            <div className="flex items-center">
                                <img className="w-6 h-6" src={tableau} alt="" />
                                <p className="font-fontt2 text-white text-lg pl-3">Tableau</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




            {/* <div className="flex flex-col sm:flex-col w-full h-screen gap-3 justify-center items-center pt-8">
                <div className="">
                    <h1 className="font-fontt pl-3 pt-3 text-sky-200 text-5xl">Skills</h1>
                </div>

                <div className="flex w-3/5 h-3/4 items-center grid-cols-3 gap-10">

                    <div className="transition-all duration-500 hover:scale-105 col-span-1 h-4/5 w-2/5 bg-custom-gradient rounded-3xl shadow-sm shadow-slate-800">
                        <h1 className="font-fontt pl-3 pt-4 text-sky-200 text-xl">-Skill in Machine Learning</h1>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={pyLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">Python</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={tfLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">TensorFlow</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={skLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">Scikit-Learn</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={matLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">MatplotLib</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-pandas-plain colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Pandas</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={npLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">Numpy</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={stLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">Streamlit</p>
                        </div>
                    </div>


                    <div className="transition-all duration-500 hover:scale-105 col-span-1 h-4/5 w-2/5 bg-custom-gradient rounded-3xl shadow-sm shadow-slate-800">
                        <h1 className="font-fontt pl-3 text-sky-200 text-xl pt-4">-Skill in WebDevelopment</h1>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={jsLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">JavaScript</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={tsLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">TypeScript</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-mongodb-plain colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">MongoDb</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-express-original text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Express JS</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-react-original colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">React JS</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-nextjs-plain text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Next JS</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <img className="w-6 h-6" src={javaLogo} alt="" />
                            <p className="font-fontt text-slate-500 text-lg pl-3">Java</p>
                        </div>
                    </div>


                    <div className="transition-all duration-500 hover:scale-105 col-span-1 h-4/5 w-2/5 bg-custom-gradient rounded-3xl shadow-sm shadow-slate-800">
                        <h1 className="font-fontt pl-3 text-sky-200 text-xl pt-4">-And More</h1>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-docker-plain colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Docker</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-azure-plain colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Azure</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-git-plain colored text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Git</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                            <i class="devicon-github-original text-2xl"></i>
                            <p className="font-fontt text-slate-500 text-lg pl-3">Git Hub</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                                <i class="devicon-jupyter-plain colored text-2xl"></i>
                                <p className="font-fontt text-slate-500 text-lg pl-3">jupyter</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                                <img className="w-6 h-6" src={powerBi} alt="" />
                                <p className="font-fontt text-slate-500 text-lg pl-3">Power BI</p>
                        </div>
                        <div className="flex w-auto h-10 items-center pl-3 pt-10">
                                <img className="w-6 h-6" src={tableau} alt="" />
                                <p className="font-fontt text-slate-500 text-lg pl-3">Tableau</p>
                        </div>
                    </div>
                </div>

            </div> */}
        </>
    );
}

export default Skills;


// <div className="flex items-center p-4 rounded-lg shadow-lg shadow-purple-300 bg-purple-800 text-white">
//     <div className="mr-3">
//         <img src={iconSrc} alt={`${skillName} Icon`} className="h-10" />
//     </div>
//     <div className="text-lg font-bold">{skillName}</div>
// </div>