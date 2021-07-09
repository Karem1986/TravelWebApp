import React, { Component } from "react";
import Weather from "./svg/weather";
import Plane from "./svg/plane";
export default class Category extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <p className=" text-center text-gray-600">CATEGORY</p>

        <p className="text-center text-4xl font-bold">We Offer Best Services</p>

        <body class=" flex flex-wrap -mx-4 items-center h-screen">
          
          <div class="bg-white p-10 h-80 w-64 rounded-lg shadow-md">
            <Weather />
            <h1 class="text-lg font-bold py-4">Calculated Weather </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg shadow-md">
            <Plane />
            <h1 class="text-lg font-bold py-4">Calculated Weather </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg shadow-md">
            <Weather />
            <h1 class="text-lg font-bold py-4">Calculated Weather </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
          </div>
          <div class="bg-white p-10 h-80 w-64 rounded-lg shadow-md">
            <Weather />
            <h1 class="text-lg font-bold py-4">Calculated Weather </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
          </div>
         
        </body>
      </div>
    );
  }
}
