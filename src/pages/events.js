import React from 'react';
import {Link} from "react-router-dom";

const Events = () => {
  return (

    <div>
      <div className='bg-white flex flex-col justify-center items-center' style = {{backgroundColor: "#34d399"}}>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14' >
          Events
        </h1>
      </div>




      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../music.jpeg" alt="Music"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Music in the Garden - Back Pages</div>
              <p class="text-gray-700 text-base">
                Gather a picnic, pack a lawn chair or blanket and join in as we bring music to The Gardens at Elm Bank. Catch up with a friend or stroll through the gardens while listening in on the sounds of the evening. Reserve your entry ticket for Wednesday July 7th as we host the rockin' sounds of Back Pages starting at 7pm.
              </p>
              <p style={{color:"#1049a3"}}><Link to="https://www.eventbrite.com/e/music-in-the-garden-back-pages-tickets-150102427401">Read More / Sign Up</Link></p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Music</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Elm-Bank</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MHS(Massachusetts Horticultural Society)</span>
            </div>
        </div>


        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../archery.jpg" alt="Archery"></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Summer Archery in Wellesley!</div>
            <p class="text-gray-700 text-base">
            Give your child the virtues of success with determination, discipline and patience required in the sport of archery! This safe, fun and socially distant sport is all about the INDIVIDUAL and each archer receives personalized coaching, feedback and tips needed to improve.
            </p>
            <p style={{color:"#1049a3"}}><Link to="https://m.facebook.com/events/311652883917013/?event_time_id=311652897250345">Read More / Sign Up</Link></p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Archery</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Warren Park</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kids</span>
          </div>
        </div>


        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../marketplace.jpg" alt="Marketplace"></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Wellesley Marketplace</div>
            <p class="text-gray-700 text-base">
            The Wellesley Marketplace is widely known for offering a variety of high‑quality and unique, hand‑crafted items including jewelry, stationary, pottery, clothing, personal accessories, and artwork.
            </p>
            <p style={{color:"#1049a3"}}><Link to="https://festivalnet.com/53327/Wellesley-Massachusetts/Craft-Shows/Wellesley-Marketplace">Read More / Sign Up</Link></p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Artwork</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Marketplace</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Festival</span>
          </div>
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../puddlestompers.jfif" alt="Music"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Wellesley Summer Camp Week 8: Noisy Nature — PUDDLESTOMPERS™</div>
              <p class="text-gray-700 text-base">
                PUDDLESTOMPERS Summer Camps offer an amazing hands-on nature experience for children ages 4-9! Following a weekly theme, each day children and educators investigate a different topic in nature. Our experienced teacher naturalists guide children in nature discovery and play through hands-on exploration, active movement, outdoor play, craft, stories and songs. 
              </p>
              <p style={{color:"#1049a3"}}><Link to="https://www.puddlestompers.com/calendar/2021/8/16/wellesley-summer-camp-week-8-noisy-nature">Read More / Sign Up</Link></p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Summer Camp</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nature</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kids</span>
            </div>
        </div>


        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../redcross.jpg" alt="Red Cross"></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">American Red Cross blood drive</div>
            <p class="text-gray-700 text-base">
              Wellesley Dental Group will host an American Red Cross community blood drive on Thursday, August 19, 9am-2pm at the Wellesley Community Center at 219 Washington St.
            </p>
            <p style={{color:"#1049a3"}}><Link to="https://theswellesleyreport.com/event/american-red-cross-blood-drive/">Read More / Sign Up</Link></p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Red Cross</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Blood Drive</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wellesley Dental Group</span>
          </div>
        </div>


        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../../plate.jfif" alt="Elizabeth Lilly"></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Let Me Fix You A Plate, by Elizabeth Lilly</div>
            <p class="text-gray-700 text-base">
            Elizabeth Lilly's first book, Let Me Fix You A Plate, is releasing, and to celebrate, we're having a fun night at Wellesley Books. 
            </p>
            <p style={{color:"#1049a3"}}><Link to="https://www.penguinrandomhouse.com/authors/2194531/elizabeth-lilly">Read More / Sign Up</Link></p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New Books</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Elizabeth Lily</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wellesley Books</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
