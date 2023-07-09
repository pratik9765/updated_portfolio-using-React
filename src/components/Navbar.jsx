import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '110px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='px-4 '>
          <Link className='cursor-pointer font-bold' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='px-4'>
          <Link className='cursor-pointer font-bold' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='px-4'>
          <Link className='cursor-pointer font-bold' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='px-4'>
          <Link className='cursor-pointer font-bold' to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='px-4'>
          <Link className='cursor-pointer font-bold' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 md:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute small:-mt-40 sm:-mt-0 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-3 sm:pb-6 text-4xl'>
          <Link className='cursor-pointer' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-3 sm:py-6 text-4xl'>
          {' '}
          <Link className='cursor-pointer' onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-3 sm:py-6 text-4xl'>
          {' '}
          <Link className='cursor-pointer' onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-3 sm:py-6 text-4xl'>
          {' '}
          <Link className='cursor-pointer' onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-3 sm:py-6 text-4xl'>
          {' '}
          <Link className='cursor-pointer' onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] px-4 hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='https://www.linkedin.com/in/pratik-bokde-7110b4225/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] px-4 hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='https://github.com/pratik9765'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] px-4 hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='mailto:pratikbokde9765@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] px-4 hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='flex items-center justify-between w-full text-gray-300'
              href='https://drive.google.com/file/d/17gKYor8pIXQxI27EohJ5qBshTf5HfyHL/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;