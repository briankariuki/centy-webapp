import React, { Component } from "react";
import AppImage from "../../assets/AppImage.svg";

class AppBanner extends Component {
  render() {
    return (
      <div className="mx-auto flex-1 w-80 lg:w-64 rounded-lg bg-white shadow-textarea">
        <div className=" py-4 px-4">
          <h2 className="font-gilroy font-medium text-2xl text-centyblue leading-7">
            Get Our Centy Mobile App Today
          </h2>
          <p className="text-centydark my-2 text-lg">For Friends and family</p>
        </div>
        <div className="h-56 overflow-y-hidden -mt-4">
          <img className="h-88 object-cover" src={AppImage} alt="" />
        </div>
        <div className="flex flex-col items-center px-4 py-6 bg-centyblue  rounded-b-lg">
          <p className="text-white">Get the Mobile App</p>
          <div className="mt-2 flex space-x-3">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center focus:outline-none hover:shadow-lg">
              <svg className="h-5 w-5" viewBox="0 0 408 466.9">
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  y1="112.094"
                  x2="261.746"
                  y2="112.094"
                >
                  <stop offset="0" stopColor="#63be6b" />
                  <stop offset=".506" stopColor="#5bbc6a" />
                  <stop offset="1" stopColor="#4ab96a" />
                </linearGradient>
                <path
                  d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z"
                  fill="url(#a)"
                />
                <linearGradient
                  id="b"
                  gradientUnits="userSpaceOnUse"
                  x1=".152"
                  y1="223.393"
                  x2="179.896"
                  y2="223.393"
                >
                  <stop offset="0" stopColor="#3ec6f2" />
                  <stop offset="1" stopColor="#45afe3" />
                </linearGradient>
                <path
                  d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z"
                  fill="url(#b)"
                />
                <linearGradient
                  id="c"
                  gradientUnits="userSpaceOnUse"
                  x1="179.896"
                  y1="229.464"
                  x2="407.976"
                  y2="229.464"
                >
                  <stop offset="0" stopColor="#faa51a" />
                  <stop offset=".387" stopColor="#fab716" />
                  <stop offset=".741" stopColor="#fac412" />
                  <stop offset="1" stopColor="#fac80f" />
                </linearGradient>
                <path
                  d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"
                  fill="url(#c)"
                />
                <linearGradient
                  id="d"
                  gradientUnits="userSpaceOnUse"
                  x1="1.744"
                  y1="345.521"
                  x2="272.296"
                  y2="345.521"
                >
                  <stop offset="0" stopColor="#ec3b50" />
                  <stop offset="1" stopColor="#e7515b" />
                </linearGradient>
                <path
                  d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z"
                  fill="url(#d)"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center focus:outline-none hover:shadow-lg">
              <svg
                className="h-5 w-5"
                width="2036"
                height="2500"
                viewBox="0 0 456.008 560.035"
              >
                <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBanner;
