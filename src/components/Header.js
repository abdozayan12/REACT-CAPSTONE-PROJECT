import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import icons8GoogleEarth from '../assets/icons8-google-earth.svg';

function Navbar() {
  return (
    <nav
      className=" bg-main w-full h-16 flex items-center justify-around"
      data-testid="nav"
    >
      <img src={icons8GoogleEarth} alt="google earth icon" className=" h-10" />
      <p className=" font-bold">Countries Explorer</p>
      <div className="flex">
        <BiMicrophone className=" text-lg mr-2" />
        <AiFillSetting className=" text-lg" />
      </div>
    </nav>
  );
}
export default Navbar;
