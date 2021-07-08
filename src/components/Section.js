import { className } from "postcss-selector-parser";
import React, { Component } from "react";
import Traveller from "../images/traveller.png";
import Plane1 from "./svg/plane1";
import Plane2 from "./svg/plane2";

export default class Section extends Component {
  render() {
    return (
      <div className="ml-20 py-28 ">
        <p className="text-lg font-bold text-red-600">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
        <p className="py-14	text-base font-bold w-2/4 lg:text-7xl  text-indigo-800">
          Travel,enjoy and live a new and full life.
        </p>
        <p className="text-lg lg:text-xl font-bold w-2/5 text-gray-600">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        
        <p className="flex-1 flex flex-row items-center">
        <button className=" mt-8 bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-4 px-20 rounded">
  Find out more
</button> 
<button className="flex flex-row mt-8 items-center  bg-gray-300 hover:bg-red-200 text-gray-700 font-bold py-4 px-20 ml-6 rounded w-auto">
<svg className="w-6" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor"  class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z "fill="red"/>
</svg>
<span>Play Demo</span>
 </button>
 </p>

      </div> 

    );
  }
}
