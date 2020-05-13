import React, { Component } from "react";
import LineBar from "../Charts/LineBar";

class ExamsCard extends Component {
  render() {
    return (
      <div className="rounded-lg shadow-textarea">
        <div className="lg:px-4 px-3 py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">
              Results Overview
            </h2>
            <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
              See More
            </button>
          </div>
          <div className="mt-6 min-w-80 lg:min-w-0 lg:w-96">
            <ul className="list-style-none">
              <li className="border-b py-4">
                <div className="grid grid-cols-8">
                  <div className="flex items-center col-span-3">
                    <div className=" h-2 w-2 rounded-full bg-centygreen"></div>
                    <p className=" ml-3 text-centydark  text-base lg:text-lg ">
                      Mathematics
                    </p>
                  </div>
                  <div className="mx-4 my-auto col-span-4">
                    <LineBar
                      progress={60}
                      size={110}
                      strokeWidth={8}
                      lineOneStroke="#00BB79"
                    />
                  </div>
                  <div className="col-span-1">
                    <p className=" text-centygrey font-medium text-base lg:text-lg ">
                      60 %
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="grid grid-cols-8">
                  <div className="flex items-center col-span-3">
                    <div className=" h-2 w-2 rounded-full bg-centyteal"></div>
                    <p className=" ml-3 text-centydark  text-base lg:text-lg ">
                      Physics
                    </p>
                  </div>
                  <div className="mx-4 my-auto col-span-4">
                    <LineBar
                      progress={76}
                      size={110}
                      strokeWidth={8}
                      lineOneStroke="#00B1D6"
                    />
                  </div>
                  <div className="col-span-1">
                    <p className=" text-centygrey font-medium text-base lg:text-lg ">
                      76 %
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="grid grid-cols-8">
                  <div className="flex items-center col-span-3">
                    <div className=" h-2 w-2 rounded-full bg-centyorange"></div>
                    <p className=" ml-3 text-centydark  text-base lg:text-lg ">
                      Biology
                    </p>
                  </div>
                  <div className="mx-4 my-auto col-span-4">
                    <LineBar
                      progress={72}
                      size={110}
                      strokeWidth={8}
                      lineOneStroke="#FF9057"
                    />
                  </div>
                  <div className="col-span-1">
                    <p className="text-centygrey font-medium lg:text-lg text-base ">
                      72 %
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="grid grid-cols-8">
                  <div className="flex items-center col-span-3">
                    <div className=" h-2 w-2 rounded-full bg-centypurple"></div>
                    <p className=" ml-3 text-centydark  text-base lg:text-lg ">
                      English
                    </p>
                  </div>
                  <div className="mx-4 my-auto col-span-4">
                    <LineBar
                      progress={82}
                      size={110}
                      strokeWidth={8}
                      lineOneStroke="#1929D9"
                    />
                  </div>
                  <div className="col-span-1">
                    <p className=" text-centygrey font-medium text-base lg:text-lg ">
                      82 %
                    </p>
                  </div>
                </div>
              </li>
              <li className="border-b py-4">
                <div className="grid grid-cols-8">
                  <div className="flex items-center col-span-3">
                    <div className=" h-2 w-2 rounded-full bg-centypink"></div>
                    <p className=" ml-3 text-centydark  text-base lg:text-lg ">
                      Chemistry
                    </p>
                  </div>
                  <div className="mx-4 my-auto col-span-4">
                    <LineBar
                      progress={77}
                      size={110}
                      strokeWidth={8}
                      lineOneStroke="#9013B4"
                    />
                  </div>
                  <div className="col-span-1">
                    <p className=" text-centygrey font-medium text-base lg:text-lg ">
                      77 %
                    </p>
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

export default ExamsCard;
