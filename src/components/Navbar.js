import React, { Component } from "react";
import Logo from "./svg/logo";
import Shape from "../images/shape.png";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className=" font-sans text-xl text-gray-800 text-center nav flex flex-wrap items-center justify-between px-20">
          <div className="flex flex-no-shrink items-center mr-18 py-10 text-grey-darkest">
            <Logo />
          </div>
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li className="border-t md:border-none">
              <a
                href="/"
                className="block md:inline-block px-10 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Destinations
              </a>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/about/"
                className="block md:inline-block px-10 py-3 no-underline text-grey focus:ring-2 focus:ring-blue-600"
              >
                Hotels
              </a>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-10 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Flights
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-10 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Bookings
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-10 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Login
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-10  py-3 no-underline text-grey-darkest leading-none border rounded text-black border-gray hover:border-black hover:text-teal-500 hover:bg- mt-4 lg:mt-0 ml-3"
              >
                Sign Up
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-10 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                EN
              </a>
            </li>
          </ul>
        </nav>
        {/* <Traveller/> */}
      </>
    );
  }
}
