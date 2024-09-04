import React from "react";

function SkillCard({ bc, skillName, calss }) {
    return (
        <div
            className={`flex transition-all duration-500 hover:scale-110 bg-transparent sm:h-12 sm:w-40 m-1 w-2/5 justify-center items-center ${bc} border-l-0 border-r-4 border-t-0 border-b-4 rounded-xl`}
        >
            <div className="flex items-center">
                <i className={`${calss} text-white`}></i>
                <p className="font-fontt3 text-white sm:text-lg text-sm sm:pl-3 m-1">{skillName}</p>
            </div>
        </div>
    );
}

export default SkillCard;
