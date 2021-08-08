import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-20 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
      style = {{padding:"2vh", backgroundColor: "#f5c187", height: "12vh"}}
    >
      <Link to='/' className='pl-8'>
        <img src={"/discover2.jpg"} style={{maxWidth:"17vw", paddingBottom:"1vh"}} />
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  wd:hidden '>
      <Link to='/' className='p-6'>
          Wellesley Center
        </Link>
        <Link to='/shops/index' className='p-6'>
          Shops
        </Link>
        <Link to='/map' className='p-6'>
          Trails
        </Link>
        <Link to='/events' className='p-6'>
          Events
        </Link>
        <Link to='/about' className='p-6'>
          About
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
