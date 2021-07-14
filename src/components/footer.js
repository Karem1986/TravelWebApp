import React, { Component } from "react";
import Facebook from "./svg/facebook";
import Twitter from "./svg/twitter";
import Play from "./svg/play"; 
import Apple from "./svg/Apple";
export default class footer extends Component {
  render() {
    return (
      <div>
        <nav id="footer" class="bg-gray-100">
          <div class="container mx-auto pt-8 pb-4">
            <div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
              <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <p className="text-2xl font-bold ml-20">Jadoo.</p>
                <p className="font-bold ml-20">
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>

              <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 class="text-black font-bold">Company</h4>
                <ul class="nav navbar-nav">
                  <li id="navi-2" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-1">
                      About{" "}
                    </a>
                  </li>
                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Careers
                    </a>
                  </li>
                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 class="text-black">Contact</h4>
                <ul class="">
                  <li id="navi-2" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-1">
                      Help /FAQ{" "}
                    </a>
                  </li>
                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Press
                    </a>
                  </li>

                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Affilates
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                <h4 class="text-black">More </h4>
                <ul class="">
                  <li id="navi-2" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-1">
                      Airlinefees{" "}
                    </a>
                  </li>
                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Airline
                    </a>
                  </li>

                  <li id="navi-1" class="leading-7 text-sm">
                    <a class="text-black underline text-small" href="/page-2">
                      Low fare tips
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" float-right flex flex-row">
            <Facebook/>
            <Twitter/>
            <p className="text-xl font-bold text-gray-700  -mr-28 -mt-20">Discover our app</p>
<Play/>
<Apple/>

</div>

            <div class="pt-4 md:flex md:items-center md:justify-center ">
              <ul class="">
                <li
                  class="md:mx-2 md:inline leading-7 text-sm"
                  id="footer-navi-2"
                >
                  <a class="text-black underline text-small" href="/disclaimer">
                    All rights reserved@jadoo.co{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
