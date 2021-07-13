import React, { Component } from 'react'
import Company1 from "../images/company1.png";
import Company2 from "../images/company2.png";
import Company3 from "../images/company3.png";
import Company4 from "../images/company4.png";
import Company5 from "../images/company5.png";

export default class company extends Component {
    render() {
        return (
            <>
             <body className=" flex justify-center   py-20  flex flex-wrap -mx-5   h-screen w-screen   p-5">
          <div className="bg-white  h-28 w-40 rounded-3xl float-right bg-gray-100 shadow-md ml-0  transform transition duration-500 hover:scale-110 ">
            <img className=" h-28 rounded-3xl p-1" src={Company1} alt="company" />
          </div>
          <div className="bg-white  h-28 w-40 rounded-lg bg-gray-100 shadow-md ml-0  transform transition duration-500 hover:scale-110">
            <img className=" h-28 rounded-3xl p-1" src={Company2} alt="company" />
          </div>
          <div className="bg-white  h-28 w-40 rounded-lg bg-gray-100 shadow-md ml-0  transform transition duration-500 hover:scale-110">
            <img className=" h-28 rounded-3xl p-1" src={Company3} alt="company" />
          </div>
          <div className="bg-white  h-28 w-40 rounded-lg bg-gray-100 shadow-md ml-0  transform transition duration-500 hover:scale-110">
            <img className=" h-28 rounded-3xl p-1" src={Company4} alt="company" />
          </div>
          <div className="bg-white  h-28 w-40 rounded-lg bg-gray-100 shadow-md ml-0  transform transition duration-500 hover:scale-110">
            <img className=" h-28 rounded-3xl p-1" src={Company5} alt="company" />
          </div>
        </body>
            </>
        )
    }
}
