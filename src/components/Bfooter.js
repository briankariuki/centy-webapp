import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bfooter extends Component {
  render() {
    return (
      <div className=" bg-centylightgrey py-6 px-6 lg:px-0">
        <div className="max-w-screen-xl lg:w-4/5 mx-auto lg:flex items-center justify-between">
          <div>
            <p className="font-medium">Mwalimu Smart | All rights reserved</p>
          </div>
          <div className="mt-4 lg:mt-0 lg:space-x-2 space-x-0 space-y-2 lg:space-y-0 lg:flex items-center">
            <div>
              <Link className=" hover:text-centygreen lg:px-4 py-2 font-medium focus:outline-none">
                About
              </Link>
            </div>
            <div>
              <Link className="hover:text-centygreen lg:px-4 py-2 font-medium focus:outline-none">
                Pricing
              </Link>
            </div>
            <div>
              <Link className=" hover:text-centygreen lg:px-4 py-2 font-medium focus:outline-none">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bfooter;
