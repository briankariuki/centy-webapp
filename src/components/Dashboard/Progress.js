import React, { Component } from "react";
import ProgressBar from "../Charts/ProgressBar";

class Banner extends Component {
  render() {
    return (
      <div className="h-48 rounded-lg   bg-centygreen">
        <div className="lg:px-6 px-3 py-4 flex justify-between ">
          <div>
            <p className=" py-2 text-white">My Current target</p>
            <h2 className="lg:text-2xl text-xl text-white leading-none">
              Average Score for Quizzes
            </h2>
          </div>

          <ProgressBar
            progress={70}
            size={100}
            strokeWidth={10}
            circleOneStroke="#9ae6b4"
            circleTwoStroke="#ffffff"
          />
        </div>
        <div className="lg:px-6 px-3 py-4 flex items-center justify-between border-t border-green-300">
          <div className="space-x-2 mr-2 flex items-center">
            <svg
              className="h-8 w-8 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M19.2 7h-.39A3 3 0 0019 6a3.08 3.08 0 00-3.14-3A4.46 4.46 0 0012 5.4 4.46 4.46 0 008.14 3 3.08 3.08 0 005 6a3 3 0 00.19 1H4.8A2 2 0 003 9.2v3.6A2.08 2.08 0 004.5 15v4.37A1.75 1.75 0 006.31 21h11.38a1.75 1.75 0 001.81-1.67V15a2.08 2.08 0 001.5-2.2V9.2A2 2 0 0019.2 7zM19 9.2v3.6a.56.56 0 010 .2h-6V9h6a.56.56 0 010 .2zM15.86 5A1.08 1.08 0 0117 6a1.08 1.08 0 01-1.14 1H13.4a2.93 2.93 0 012.46-2zM7 6a1.08 1.08 0 011.14-1 2.93 2.93 0 012.45 2H8.14A1.08 1.08 0 017 6zM5 9.2A.56.56 0 015 9h6v4H5a.56.56 0 010-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z" />
              </g>
            </svg>
            <p className="text-lg text-white">Reward</p>
          </div>
          <div>
            <p className="truncate text-base text-white">
              Gift Tokens | KES 2500
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
