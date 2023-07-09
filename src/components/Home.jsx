import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-8 sm:pb-0 pb-52 bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hey, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Pratik Bokde
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          {/* <button className='flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='duration-300 group-hover:rotate-90'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button> */}
          <Link className='flex w-[165px] items-center px-4 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600 cursor-pointer font-bold' to='projects' smooth={true} duration={500}>
          View Work
            <span className='duration-300 group-hover:rotate-90'>
              <HiArrowNarrowRight className='ml-5 ' />
            </span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;