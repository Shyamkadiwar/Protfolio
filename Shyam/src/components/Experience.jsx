import React from "react";
import meee from './assets/meee.jpg'

function Experience() {
    return (
        <>
            <div id="exp" className="flex justify-center items-center mb-6 mt-24">
                <h1 className="text-4xl text-white font-fontt font-bold">
                    <span className="text-[#9df09d]">code</span>:<span className="text-[#38c8f4]">experience</span>
                </h1>
            </div>
            <div className="sm:flex sm:justify-center sm:items-center h-auto w-full mt-4 p-3 gap-8">

                <div className="transition-all duration-500 mt-3 bg-[#151527] hover:scale-105 bg-transparent p-6 sm:w-2/6 w-full h-auto border-[#2b4145] shadow-md border-2 rounded-3xl">
                    <div className="flex sm:flex-col md:flex-row  justify-between items-center mb-4">
                        <div className="flex items-center space-x-2 mb-3 md:mb-0">
                            <img
                                src={meee}
                                alt="User"
                                className="w-8 h-13 rounded-full object-cover"
                            />
                            <span className="text-sm text-slate-400 font-fontt3 font-semibold">Shyam Kadiwar</span>
                        </div>
                        <div className="text-sm font-medium text-[#38c8f4] flex sm:gap-6 sm:justify-center items-center">
                            <div className='font-fontt3 text-center md:text-left'>Jan 2024-Present</div>
                            <a href="https://github.com/Shyamkadiwar"><i className="devicon-github-original text-2xl"></i></a>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold font-fontt3 text-[#dcab70]">Freelancer</h2>
                    <h3 className="text-xl text-[rgb(167_154_230/_87%)] font-fontt3 mt-4">Machine Learning/Deep Learning</h3>
                    <ul className="text-white list-disc font-fontt pl-5 space-y-2">
                        <h3 className='font-fontt3 text-xs'><li>Assisted in enhancing the performance and accuracy of a deep learning model, significantly improving prediction quality.</li></h3>
                        <h3 className='font-fontt3 text-xs'><li>Worked on developing algorithms and resolving issues in machine learning pipelines using modern frameworks like TensorFlow and PyTorch.</li></h3>
                        <h3 className='font-fontt3 text-xs'><li>Participated in optimizing neural networks, leading to more efficient model training and faster inference times.</li></h3>
                    </ul>
                    <p className="mt-6 font-fontt3 text-sm text-[#b4ffb4]">
                        Skills: Python, TensorFlow, PyTorch, Scikit-learn, Data Preprocessing, Neural Networks, Pandas, Numpy
                    </p>
                </div>

                <div className="transition-all duration-500 mt-3 bg-[#151527] hover:scale-105 bg-transparent p-6 sm:w-2/6 w-full h-auto border-[#2b4145] shadow-md border-2 rounded-3xl">
                    <div className="flex sm:flex-col md:flex-row justify-between items-center mb-4">
                        <div className="flex items-center space-x-2 mb-3 md:mb-0">
                            <img
                                src={meee}
                                alt="User"
                                className="w-8 h-13 rounded-full object-cover"
                            />
                            <span className="text-sm text-slate-400 font-fontt3 font-semibold">Shyam Kadiwar</span>
                        </div>
                        <div className="text-sm font-medium text-[#38c8f4] flex sm:gap-6 sm:justify-center items-center">
                            <div className='font-fontt3 text-center md:text-left'>Jan 2024-Present</div>
                            <a href="https://github.com/Shyamkadiwar"><i className="devicon-github-original text-2xl"></i></a>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold font-fontt3 text-[#dcab70]">Freelancer</h2>
                    <h3 className="text-xl text-[rgb(167_154_230/_87%)] font-fontt3 mt-4">Full Stack Engineer</h3>
                    <ul className="text-white list-disc font-fontt pl-5 space-y-2">
                        <h3 className='font-fontt3 text-xs'><li>Assisted in improving the performance and visuals of a Next.js-based full-stack website, contributing to a 40% boost in user retention.</li></h3>
                        <h3 className='font-fontt3 text-xs'><li>Worked on developing features and resolving bugs in full-stack applications using modern technologies like Next.js and React.</li></h3>
                        <h3 className='font-fontt3 text-xs'><li>Participated in optimizing RESTful APIs to enhance application responsiveness and efficiency.</li></h3>
                    </ul>
                    <p className="mt-6 font-fontt3 text-sm text-[#b4ffb4]">
                        Skills: Javascript, React, RESTful API, Node.js, Sanity, Websockets, Next.js, Figma, Typescript
                    </p>
                </div>

            </div>
        </>
    );
}

export default Experience;