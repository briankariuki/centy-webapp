import React, { Component } from "react";
import LineBar from "../Charts/LineBar";

class QuizzesCard extends Component {
  render() {
    return (
      <div className="rounded-lg shadow-textarea">
        <div className="lg:px-4 px-3 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">
              Recommended Quizzes
            </h2>
            <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
              See All
            </button>
          </div>
          <div className="mt-2 min-w-80 lg:min-w-0 lg:w-80">
            <ul className="list-style-none">
              <li className="border-b py-4">
                <div className="flex space-x-4 items-center">
                  <div className=" h-2 w-2 rounded-full bg-centypink"></div>
                  <div className="flex-1">
                    <p className="text-sm text-centypink">Chemistry</p>
                    <h2 className="text-lg text-centydark leading-6">
                      Molecular Structures
                    </h2>
                  </div>

                  <div className="">
                    <button className="text-centygrey p-2 hover:text-centygreen focus:outline-none">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="flex space-x-4 items-center">
                  <div className=" h-2 w-2 rounded-full bg-centyteal"></div>
                  <div className="flex-1">
                    <p className="text-sm text-centyteal">Physics</p>
                    <h2 className="text-lg text-centydark leading-6">
                      Newton's Laws of Motion
                    </h2>
                  </div>

                  <div className="">
                    <button className="text-centygrey p-2 hover:text-centygreen focus:outline-none">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="flex space-x-4 items-center">
                  <div className=" h-2 w-2 rounded-full bg-centyorange"></div>
                  <div className="flex-1">
                    <p className="text-sm text-centyorange">Biology</p>
                    <h2 className="text-lg text-centydark leading-6">
                      Evolution
                    </h2>
                  </div>

                  <div className="">
                    <button className="text-centygrey p-2 hover:text-centygreen focus:outline-none">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizzesCard;
