import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import {Link} from "react-router-dom";

const Shops = () => {
  return (
    <div className="font-mono">
      <div className='bg-white flex flex-col justify-center items-center' style = {{backgroundColor: "#e05ab8"}}>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14' >
          Shops
        </h1>
      </div>
      <div className="w-full px-8 pt-16" style={{paddingBottom:"3vh"}}>
        <div className="w-full max-w-md p-4 mx-auto bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Food</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Singhs_Cafe">Singh's Cafe</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Coconut_Thai_Cafe">Coconut Thai Cafe</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Comellas_Restaurants">Comella's Restaurants</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="maugus_restaurant">Maugus Restaurant</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Quebrada_Baking_Company">Quebrada Baking Company</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Subway">Subway</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Bank</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="middlesex_savings_bank">Middlesex Savings Bank</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Hospitals</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="the_cats_hospital">The Cat's Hospital</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Universal_Pediatric_Association">Universal Pediatric Association</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Schools</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Wellesley_hills_center_for_early_education">Wellesley Hills Center for Early Education</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Hardware</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Greens_Hardware_and_paint_Inc">Green's Hardware and Paint Inc</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Religion</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Holy_Spirit_catholic_community">Holy Spirit Catholic Community</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Sports</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="TeamMates_Fitness_Pilates_and_Personal_Training_Studio">TeamMates Fitness Pilates and Personal Training Studio</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Pets</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="loyal_companion">Loyal Companion</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Fashion and Cosmetics</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="ideal_barber_shop">Ideal Barber Shop</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="Nabinas_threading_and_spa">Nabina's Threading and Spa</Link>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <Link to="nails_studio">Nails Studio</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>


    </div>
    );
};

export default Shops;