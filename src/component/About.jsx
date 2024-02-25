import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { MdFeed, MdHeadsetMic, MdWorkspacePremium } from 'react-icons/md';
import { saveAs } from 'file-saver';

const About = () => {

  const handleClick = () =>{
    saveAs('/resume.pdf', 'resume.pdf')
  }

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='text-center mt-10'>
        <h2 className='text-4xl md:text-5xl  mb-2 font-medium '>About Me</h2>
        <p className='text-lg' >My Introduction</p>
      </div>


      <div className='flex items-center '>
        {/* img div */}
        <div className='md:w-1/2'>
          <img className="w-96 rounded-2xl border border-sky-500 border-opacity-40" src="./img/banner.jpg" alt="" />
        </div>


        {/* box div */}
        <div className='md:w-1/2 mr-20'>
          <div className='flex items-center gap-8'>
            <div className="border text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdWorkspacePremium className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Experience</p>
              <p className="font-light">1 + Years</p>
            </div>
            <div className="border text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdFeed className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Completed</p>
              <p className="font-light">30 + Projects</p>
            </div>
            <div className="border hidden md:block text-center p-5 font-poppins rounded-lg border-sky-500 border-opacity-40 px-7">
              <MdHeadsetMic className=" mx-auto text-4xl mb-2" />
              <p className="text-lg">Support </p>
              <p className="font-light">Every Time</p>
            </div>
          </div>
          <div className='text-center mt-8'>
            <p>Frontend developer, i create web pages with UI/UX <br />
              user interface,I have years of experience and <br />
              many clients are happy with projects carried out.</p>
            <button  onClick={handleClick} className='btn '>Download CV <FaDownload></FaDownload> </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;