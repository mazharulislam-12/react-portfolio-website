import React from 'react';
import { FaBootstrap, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

const Skill = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center mt-10'>
                <h2 className='text-4xl md:text-5xl  mb-2 font-medium '>Skills</h2>
                <p className='text-lg' >My technical level</p>
            </div>

            <div>

                <div>
                    <h3 className='text-center text-xl mt-8 mb-8 font-semibold'>Frontend Developer</h3>
                    <div className="flex justify-around">
                        <div className="flex items-start justify-center mb-3 gap-2">
                            <FaHtml5 className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="text-xl text-white">HTML</p>
                                <p className="font-light">Expart</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <FaCss3 className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="uppercase text-xl text-white">Css</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex items-start justify-center mb-3 gap-2">
                            <FaBootstrap className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="text-xl text-white">Bootstrap</p>
                                <p className="font-light">Basic</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <SiTailwindcss className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="uppercase text-xl text-white">Tailwind</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around">
                        <div className="flex items-start justify-center mb-3 gap-2">
                            <FaJs className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="text-xl text-white">Javascript</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <FaReact className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="uppercase text-xl text-white">react</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex items-start justify-center mb-3 gap-2">
                            <FaGit className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="text-xl text-white">Git</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <FaGithub className="text-xl mt-1 text-sky-500" />
                            <div className=" font-poppins">
                                <p className="uppercase text-xl text-white">gitHub</p>
                                <p className="font-light">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>


        </div>
    );
};

export default Skill;