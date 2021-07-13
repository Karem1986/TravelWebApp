import React, { Component } from "react";

export default class subscribe extends Component {
  render() {
    return (
      <div className="">
        <body className=" flex justify-center flex flex-wrap mx-1   h-screen w-screen ">
          <div class="bg-white  h-64 w-full ml-40 mr-40  rounded-tr-4xl bg-blue-50 shadow-md ml-0  ">
            <p className="text-center text-2xl font-bold mt-4 text-gray-700 	">
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </p>
            <form class="w-full ">
              <div class="flex items-center ">
                <div class="items-center">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 mr-20 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white mt-20 ml-48 focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    
                    placeholder="Your Email "
                  />
                  
                </div>
              
              </div>
              <button class="shadow bg-red-500 hover:bg-red-400 float-right mr-96 py-4  -mt-14 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4 rounded   " type="button">
Subscribe      </button>
            </form>
          </div>
        </body>
      </div>
    );
  }
}
