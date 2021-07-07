import React, { Component } from "react";

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
        <p className="text-lg font-bold w-96 text-gray-600">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <button class=" mt-8 bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-4 px-20 rounded">
  Find out more
</button>
<button class=" mt-8 bg-gray-300 hover:bg-red-200 text-gray font-bold py-4 px-20 ml-2 rounded">
  Play Demo
</button>
      </div>
    );
  }
}
