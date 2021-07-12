import React, { Component } from "react";
import Rome from "../images/rome.jpg";
import London from "../images/london.jpg";
import Europe from "../images/europe.jpg";
import Icon from "./svg/icon"
export default class Destinations extends Component {
  render() {
    return (
      <div className=" 	">
        <p className=" text-center text-gray-600">Top Selling</p>

        <p className=" text-center text-4xl font-bold">Top Destinations</p>
        <body class=" flex justify-center   py-20  flex flex-wrap -mx-3  h-screen text-center  p- ">
          <div class="bg-white p-1 h-96 w-80 rounded-lg  bg-gray-100 shadow-md ml-4 ">
            <img className=" h-80 w-full rounded-lg  " src={Rome} alt="rome" />
            <p className="float-left font-bold text-gray-700 ml-1">Rome, Italty</p>
            <p className="float-right  font-bold text-gray-700 mr-1 ">$5,42k</p>

             <Icon/><p className="  font-bold text-gray-700 float-left ml-8 -my-5">
             
              12 Days Trip
            </p>
           
          </div>
          <div class="bg-white p-1 h-96 w-80 rounded-lg  bg-gray-100 shadow-md ml-4 ">
            <img className=" h-80 w-full rounded-lg " src={London} alt="london" />
            <p className="float-left font-bold text-gray-700 ml-1">
              London UK
            </p>
            <p className="float-right  font-bold text-gray-700 mr-1">
              $4.2k
            </p>
            
            <Icon/> <p className="font-bold text-gray-700 float-left ml-8 -my-5 ">
              10 Days Trip
            </p>
          </div>
          <div class="bg-white p-1 h-96 w-80 rounded-lg  bg-gray-100 shadow-md ml-4  ">
            <img className=" h-80 w-full rounded-lg " src={Europe} alt="rome" />
            <p className="float-left font-bold text-gray-700 ml-1">
              Rome, Italty
            </p>
            <p className="float-right  font-bold text-gray-700 mr-1">
              $5,42k
            </p>
          
            <Icon/><p className="font-bold text-gray-700 float-left ml-8 -my-5 ">
               10 Days Trip
            </p>
            
          </div>
        </body>
      </div>
    );
  }
}
