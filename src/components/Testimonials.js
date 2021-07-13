import React, { Component } from "react";
import Human from "../images/human.png";



export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div className="ml-20 w-1/4 mt-40 ">
          <p className="font-bold text-gray-700">Testimonials</p>
          <p className="text-5xl font-bold mt-2">What people say about Us.</p>
        </div>
        <div className="float-right mr-96">
          <img
            className=" -mt-40 mx-96 "
            width="50"
            height="50"
            src={Human}
            alt="human"
          />
          <div class="bg-white  h-48 w-96 rounded-lg float-right bg-gray-100 shadow-md  -mr-5 -mt-32 ">
            <p className="w-4/4 p-6 text-gray-700 font-bold">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="ml-6 text-gray-700 font-bold"> Mike taylor</p>
            <p className="ml-6 text-gray-400 font-bold">Lahore, Pakistan</p>
          </div>
        </div>
       
      </>
    );
  }
}
