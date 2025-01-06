import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <>
            <div id="project" className="flex justify-center items-center h-auto mt-10">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-5">

                    <div className="flex justify-center items-center mb-2">
                        <h1 className="text-4xl text-white font-fontt font-bold">
                            <span className="text-[#9df09d]">code</span>:<span className="text-[#38c8f4]">projects</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <ProjectCard current='Currently working' title='Loopy' description='Description' about='Loopy is a dynamic platform that empowers developers to store, share, and collaborate on code snippets. It combines elements of a code repository and a Q&A community, allowing users to upload, categorize, and discover reusable code for various use cases. Integrated with VS Code, Loopy makes it easy to upload snippets directly from the editor, streamlining the process. The platform fosters collaboration by providing a constantly evolving library of solutions to real-world coding challenges.' skill='NextJs, TypeScript, WebSockets,MongoDB, ReactJs, TailwindCSS, ExpressJs ' link="https://github.com/Shyamkadiwar" />
                        <ProjectCard current='Sep-Dec 24' title='BizzOps' description='Description' about='BizzOps is a comprehensive business management platform that streamlines inventory, finance, and staff operations. With real-time inventory tracking, automated profit-loss analysis, and secure staff management, it simplifies daily business tasks. The platform offers detailed income reports, customizable invoices, and financial dashboards for quick insights. Key features include role-based access, seamless invoice generation, and a responsive design, ensuring efficient use across all devices.' skill='NextJs, TypeScript, React Js, MongoDB, Zod, TailwindCSS' link="https://github.com/Shyamkadiwar/BizzOps.git"/>
                        <ProjectCard current='Just in 19 Hours :)' title='ShyamCodes' description='Protfolio handcrafted by me in 19Hr.' about='This portfolio showcases my work and skills, meticulously handcrafted in just 19 hours. It features a collection of my projects, each demonstrating my expertise in various technologies and my commitment to quality and detail. From design to development, every aspect was crafted to reflect my proficiency and passion for creating impactful and user-friendly solutions.' skill='ReactJs, TailwindCSS, Farmer-Motion, NextJs' link="https://github.com/Shyamkadiwar"/>
                        <ProjectCard current='Jul-Aug 24' title='HealthInsights' description='Description' about='HealthInsights is an AI-powered tool that uses machine learning and deep learning to analyze diagnosis reports, detecting diseases like Skin Cancer, Kidney Tumor, and Pneumonia. It offers personalized health plans, including diet, precautions, and exercises, with support for multiple Indian languages, ensuring tailored and accessible healthcare.' skill='Python, Tensorflow, Pytorch,MachineLearning,MachineLearning, Streamlit' link="https://github.com/Shyamkadiwar/HealthInsights_DeepLearningProject.git" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Projects;