import React, { Component } from "react";
import bannerBoy from "../../assets/banner-boy.svg";

class Banner extends Component {
  render() {
    return (
      <div className="h-40 lg:h-48 rounded-lg bg-green-200 flex items-center">
        <div className="w-1/2 lg:w-1/2 flex flex-col justify-end">
          <img
            className="h-32 lg:h-56 flex-shrink-0 lg:-mt-8 mt-0"
            src={bannerBoy}
            alt=""
          />
        </div>

        <div className="text-centydark w-1/2 lg:w-1/2 pl-2 py-2 pr-0 lg:pr-6 lg:py-6">
          <h2 className="md:text-2xl text-centygreen text-xl leading-6">
            Hi,
            <span className="font-semibold font-gilroy"> Justin Cook</span>
          </h2>
          <p className="lg:my-4 my-2  lg:text-base text-sm">
            Welcome back. Pick up where you left from {""}
            <span className="hidden-sm-down">
              or get started on our quizzes
            </span>
          </p>
          <button className="lg:w-40 w-32 lg:py-3 py-2 bg-centygreen text-white rounded font-medium focus:outline-none hover:shadow-lg">
            Quizzes
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
