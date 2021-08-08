import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
      <div style={{backgroundColor:"#f5c187"}}>
        <div className="mx-auto container pt-5 lg:pt-7 flex flex-col items-center justify-center">
            <div className="text-black flex flex-col md:items-center f-f-l pt-3">

                <h1 className="text-2xl font-black">Rediscover</h1>

                <div className="md:flex items-center mt-3 md:mt-4 text-base text-color f-f-l">
                    <h2 className=" md:mr-4 pb-2 md:py-0 cursor-pointer"><Link to="/about">About Us</Link></h2>
                    <h2 className="cursor-pointer"><td onClick={()=> window.open("mailto:liujonathan24@gmail.com?subject=ReDiscover%20Wellesley", "_blank")}>
                        Contact Me
                        </td>
                    </h2>
                </div>
                
                <div className="my-3 text-base text-color f-f-l">
                    <ul className="md:flex items-center">
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><Link to="/events">Events</Link></li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><Link to="/center">Explore the town</Link></li>
                        <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><Link to="/map">Trails</Link></li>
                    </ul>
                </div>
                <div className="text-sm text-color mb-10 f-f-l">
                    <p> © 2021 . Created by Jonathan Liu</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Footer;
