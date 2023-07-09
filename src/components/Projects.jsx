import React from 'react'
import code_detective from '../assets/code_detective.png';
import discord_clone from '../assets/discord_clone.png';
import food_restro from '../assets/food_restro.png';
import google_clone from '../assets/google_clone.png';
import layers_shop from '../assets/layers_shop.png';
import pickupkart from '../assets/pickupkart.png';
import pixography_gallery from '../assets/pixography_gallery.png';
import random_password_generator from '../assets/random_password_generator.png';
import weather from '../assets/weather.png';


const Projects = () => {
  return (
    <div name="projects" className='bg-[#0a192f] text-gray-300 sm:pt-24 pt-96 pb-10  w-full h-full'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-pink-600'>Projects</p>
          <p className='py-6'>// Check out some of my recent work.</p>
        </div>

        {/* container */}
        <div className='grid w-full  gap-14 sm:grid-cols-2 md:grid-cols-3'>

          {/* project items */}
          <div  style={{backgroundImage:`url(${code_detective})`}} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold w-full tracking-wider text-white'>
                HTML CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center'>
                <a href="https://git-data-finder.netlify.app/">
                  <button className='px-4 py-1 md:py-2  hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Dev-Detective---Search-Github-Profile.git">
                  <button className='px-4 py-1 md:py-2 m-2  hover:bg-pink-600 hover:border-pink-600 duration-300 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${discord_clone})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                HTML TAILWIND-CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center'>
                <a href="https://discord1replica.netlify.app/">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Discord-Clone.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${food_restro})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                REACT TAILWIND-CSS
              </span>

              <div className='pt-8 text-center'>
                <a href="https://food-restro-app.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Food-WebApplication-using-React.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${google_clone})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                REACT TAILWIND-CSS
              </span>

              <div className='pt-8 text-center'>
                <a href="https://google-pixel-clone.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Google-Pixel-Clone.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${layers_shop})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                REACT TAILWIND-CSS 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://layers-shop-clone.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Layers.shop_clone.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${pickupkart})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                HTML CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center'>
                <a href="https://pickupkart-couriersite.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/PickupKart-Using-HTML-JavaScript-and-Tailwind-CSS.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* project items */}
          <div  style={{backgroundImage:`url(${pixography_gallery})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                HTML CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center'>
                <a href="https://personal-gallery-site.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Pixography-Gallery-Site.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  style={{backgroundImage:`url(${random_password_generator})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 pl-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                HTML CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center'>
                <a href="https://passwordsuggestion.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Random-Password-Generator.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-700'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-700 ml-3'>
              <span className='text-xl md:text-2xl font-bold tracking-wider text-white'>
                HTML CSS JAVASCRIPT
              </span>

              <div className='pt-8 text-center duration-700'>
                <a href="https://weather-broadcaster.netlify.app">
                  <button className='px-4 py-1 md:py-2 m-2 text-lg font-bold text-center text-gray-700 hover:bg-pink-600 hover:border-pink-600 duration-300 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="https://github.com/pratik9765/Weather-Web-Application.git">
                  <button className='px-4 py-1 md:py-2 hover:bg-pink-600 hover:border-pink-600 duration-300 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
