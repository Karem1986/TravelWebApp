import React, { Component } from "react";
import Desti from "./svg/desti";
import Payment from "./svg/payment";
import Airport from "./svg/Airport";
import Greece from   "../images/greece.jpg"
import Petal from "./svg/petal";
import Maps from "./svg/maps";
import Map from "./svg/map";
import Build from "./svg/build";
import Heart from "./svg/heart";

export default class Steps extends Component {
  render() {
    return (
       <> 
      <div className="ml-20 w-2/4 ">
        <p className="font-bold text-gray-700">Easy and Fast</p>
        <p className="text-5xl font-bold mt-2">
          Book your next trip in 3 easy steps
        </p>
        <Desti />{" "}
        <p className="text-base font-bold text-gray-500 ml-24 -mt-10 ">
          Choose Destination
        </p>
        <p className="ml-24  font-bold text-gray-700 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
        <Payment />{" "}
        <p className="text-base font-bold text-gray-500 ml-24 -mt-10 ">
          Make Payment
        </p>
        <p className="ml-24  font-bold text-gray-700 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
        <Airport />{" "}
        <p className="text-base font-bold text-gray-500 ml-24 -mt-10 ">
          Make Payment
        </p>
        <p className="ml-24  font-bold text-gray-700 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
        
      </div>
      <div class="bg-white  h-96 w-96 rounded-lg float-right bg-gray-100 shadow-md  mr-40 -mt-80 ">
          <img className=" p-2 w-96 h-48 rounded-3xl " src={Greece} alt="Greece"/>
          <p className="ml-4 font-bold ">Trip To Greece</p>
          <p className="m-4 text-gray-700">14-29 June |   by Robbin joseph</p>
          <p className="m-4 flex flex-row"><Petal/> <Maps/> <Map/> </p>
         <Build/> <p className=" ml-11 -mt-5 text-gray-700">24 people going<Heart/></p>
         </div>
      </>
    );
  }
}
