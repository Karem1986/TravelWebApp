import React, { Component } from "react";
import Weather from "./svg/weather";
import Plane from "./svg/plane";
import Mic from "../images/mic.png";
import Settings from "./svg/settings";
export default class Category extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <p className=" text-center text-gray-600">CATEGORY</p>

        <p className=" text-center text-4xl font-bold">
          We Offer Best Services
        </p>

        <body class=" flex justify-center   py-20  flex flex-wrap -mx-5  h-screen text-center  p-4 ">
          <div class="bg-white p-10 h-80 w-64 rounded-lg bg-gray-100 shadow-md ml-0 mb-4 transform transition duration-500 hover:scale-110">
            <Weather />
            <h1 class="text-lg font-bold py-4">Calculated Weather </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg  bg-gray-100 shadow-md ml-6 mb-4 transform transition duration-500 hover:scale-110">
            <Plane />
            <h1 class="text-lg font-bold py-4">Best Flights </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg bg-gray-100 shadow-md ml-6 mb-4 transform transition duration-500 hover:scale-110">
            <img className="ml-7" src={Mic} alt="mic" width="92" height="78" />
            <h1 class="text-lg font-bold py-4">Local Events </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg bg-gray-100 shadow-md ml-6 mb-0 transform transition duration-500 hover:scale-110">
            <Settings />
            <h1 class="text-lg font-bold py-4">Customization </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
