import { DistanceMatrixService } from '@react-google-maps/api';
import React from 'react';

const About = () => {
  return (
    <div>
      <div className='bg-white flex flex-col justify-center items-center' style = {{backgroundColor: "#a340ff"}}>
          <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14' >
            About
          </h1>
        </div>
      <p className="bg-white flex flex-col justify-center items-center" style={{paddingTop:"2vh", paddingBottom:"2vh", paddingLeft:"20vw", paddingRight:"20vw"}}> Rediscover is an organization which helps people rediscover the wonders of their home after the pandemic. Starting off
          in Wellesley, Rediscover Wellesley contains the ultimate list of stores, trails, and events in Wellesley, in addition to
          having specific information on each.</p>
    </div>
  );
};

export default About;
