import React from "react";
import LineBar from "../../Charts/LineBar";
const TopBar = (props) => {
  return (
    <div className="rounded-t-lg bg-white px-4 lg:py-4 py-2">
      <div className="flex justify-between items-center">
        <div className="lg:flex space-y-2 justify-between">
          <h2 className="lg:text-xl text-lg text-centydark font-medium leading-6">
            Question 1
          </h2>

          <div className="hidden-sm-up">
            <LineBar
              progress={10}
              size={160}
              strokeWidth={8}
              lineOneStroke="#00BB79"
            />
          </div>
        </div>
        <div className="hidden-lg-down">
          <LineBar
            progress={10}
            size={310}
            strokeWidth={8}
            lineOneStroke="#00BB79"
          />
        </div>
        <div className="bg-centyorange rounded-md lg:px-4 px-2 lg:py-2 py-1 flex items-center space-x-2">
          <svg
            className="lg:h-6 lg:w-6 h-5 w-5 text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-white lg:text-lg">06:31</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
