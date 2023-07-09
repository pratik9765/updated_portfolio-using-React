import React from 'react'
import cpp from '../assets/cpp.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import github from '../assets/github.png'
import html_logo from '../assets/html_logo.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import data_structure from '../assets/data_structure.png'

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] pt-96 sm:pt-14 sm:pb-0 pb-24  text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={html_logo} alt="" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={css} alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={javascript} alt="" />
                    <p className='my-4'>JAVA SCRIPT</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={tailwind} alt="" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={react} alt="" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={node} alt="" />
                    <p className='my-4'>NODE.JS</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={express} alt="" />
                    <p className='my-4'>EXPRESS</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={mongo} alt="" />
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={github} alt="" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={cpp} alt="" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-[#040c16] shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={data_structure} alt="" />
                    <p className='my-4'>DATA STRUCTURE</p>
                </div>
            </div> 
  
            
        </div>
      </div>
    );
  };
  
  export default Skills;







