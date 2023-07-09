import React from 'react'
import my_img from '../assets/my_img.jpg'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] -mt-24 sm:pb-0 pb-56  text-gray-300'>
        <div className='flex flex-col justify-center items-center px-4 w-full h-full'>
          <div className='max-w-[900px] w-full grid grid-cols-2 gap-8'>
            <div className='text-left pb-8 '>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>

                <div>
                </div>
            </div>
                <div  className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:px-6 gap-8'>
                <div className=' md:border-r-2 mr-10'>
                    <img className='rounded-lg' src={my_img} width={280} alt="My image" />
                </div>
                <div>
                    <p  className='sm:text-left pb-4 text-2xl md:text-4xl font-bold '>Hello, I'm Pratik, nice to meet you. Please take a look around.</p>
                    <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranges from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software  expert available at your fingertips?</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About